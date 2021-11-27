import {
  CssBaseline,
  FormControlLabel,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Grid,
  Container,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ws = "wss://stream.binance.com:9443/ws";
const socket = new WebSocket(ws);
const intervals = ["1m", "1h", "4h", "1d", "1w", "1M"];

socket.onopen = () => {
  socket.send(
    JSON.stringify({
      method: "SUBSCRIBE",
      params: intervals.map((i) => "etheur@kline_" + i),
      id: 5,
    })
  );
};

interface Candle {
  x: number;
  y: number[];
}

enum CHART_TYPE {
  CANDLES = "candlestick",
  LINES = "line",
}

const App = () => {
  const [currentInterval, setCurrentInterval] = useState(intervals[0]);
  const [pairs, setPairs] = useState<string[]>([]);
  const [candles, setCandles] = useState<Candle[]>([]);
  const [chartType, setChartType] = useState(CHART_TYPE.CANDLES);
  const theme = useTheme();

  useEffect(() => {
    const retrieve = async () => {
      const res = await fetch(
        `https://api.binance.com/api/v3/klines?symbol=ETHEUR&interval=${currentInterval}`
      );
      const candleDatas = await res.json();

      const candles = candleDatas.slice(-100, -1).map((candle: any) => ({
        x: candle[0],
        y: [candle[1], candle[2], candle[3], candle[4]],
      }));
      setCandles(candles);
    };

    retrieve();
  }, [currentInterval]);

  const options = {
    chart: {
      id: "candlestick",
      width: "100% !important",
    },
    xaxis: {
      type: "datetime" as "datetime",
    },
    tooltip: {
      x: { format: "yyyy/MM/dd hh:mm" },
    },
  };

  const series = [
    {
      name: "first",
      data: candles,
    },
  ];

  socket.onmessage = (msg) => {
    const currentData = JSON.parse(msg.data);
    if (currentData.result === null) return;

    const candleDatas = currentData.k;
    const interval = candleDatas.i;

    if (interval !== currentInterval) return;

    const candleBody = [
      candleDatas.o,
      candleDatas.h,
      candleDatas.l,
      candleDatas.c,
    ];
    const newCandle = { x: candleDatas.t, y: candleBody };

    if (!candles.length || newCandle.x > candles[candles.length - 1].x)
      setCandles([...candles, newCandle]);
    else setCandles([...candles.slice(0, -1), newCandle]);
  };

  const closeSocket = () => {
    socket.close();
  };

  const handleIntervalChange = (e: any, newInterval: any) => {
    if (newInterval !== currentInterval) setCurrentInterval(newInterval);
  };

  const handleChartType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChartType(e.target.checked ? CHART_TYPE.CANDLES : CHART_TYPE.LINES);
  };

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" alignItems="center">
        <CssBaseline />
        <Grid justifyContent="space-between" container>
          <ToggleButtonGroup
            value={currentInterval}
            exclusive
            onChange={handleIntervalChange}
          >
            {intervals.map((interval, i) => {
              return (
                <ToggleButton
                  key={i}
                  value={interval}
                  sx={{ textTransform: "none" }}
                >
                  {interval}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
          <FormControlLabel
            control={
              <Switch
                value={chartType}
                onChange={handleChartType}
                defaultChecked
              />
            }
            label={chartType === CHART_TYPE.CANDLES ? "Candles" : "Lines"}
          />
        </Grid>
        <Grid item width="100%">
          <Chart
            key={chartType}
            options={options}
            series={series}
            type={chartType}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={closeSocket}>
            close socket
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
