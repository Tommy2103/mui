import {
  Button,
  Divider,
  Grid,
  Input,
  styled,
  Typography,
} from "@mui/material";

const StyledBox = styled(Grid)(({ theme }) => ({
  margin: "0 auto",
  padding: theme.spacing(3),
  boxShadow: ["1px", "1px", theme.palette.grey[800]].join(" "),
  borderRadius: 5,
  backgroundColor: theme.palette.background[900],
}));

const LoginBox = () => {
  return (
    <StyledBox container direction="column" gap={3} maxWidth="sm">
      <Grid item>
        <Typography variant="h4" color="primary">
          Login
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">Email</Typography>
        <Input type="email" fullWidth />
      </Grid>
      <Grid item>
        <Typography variant="h6">Password</Typography>
        <Input type="password" fullWidth />
      </Grid>
      <Grid container direction="column" gap={1}>
        <Grid item>
          <Button variant="contained" fullWidth>
            Log In
          </Button>
        </Grid>
        <Divider>
          <Typography color="text.secondary">Or</Typography>
        </Divider>
        <Grid item>
          <Button variant="outlined" fullWidth>
            Sign up
          </Button>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default LoginBox;
