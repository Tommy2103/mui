import loginBg from "../assets/loginBg.jpg";
import { Grid, styled } from "@mui/material";
import LoginBox from "../components/LoginBox";

const StyledImg = styled('img')(() => ({
  maxHeight: "100vh",
  maxWidth: "100%",
  objectFit: "cover",
}))

const Login = () => {
  return (
    <Grid container alignItems="center" gap={1}>
      <Grid item lg={7} xs={12}>
        <StyledImg src={loginBg} alt="bho" />
      </Grid>
      <Grid item lg xs={12}>
        <LoginBox />
      </Grid>
    </Grid>
  );
};

export default Login;
