import loginBg from "../assets/loginBg.jpg";
import { Grid, styled } from "@mui/material";
import LoginBox from "../components/LoginBox";

const StyledImg = styled('img')(() => ({
  maxWidth: "100%",
  height: "100vh",
  objectFit: "cover",
}))

const Login = () => {
  return (
    <Grid container alignItems="center" gap={1}>
      <Grid item lg xs={12}>
        <LoginBox />
      </Grid>
      <Grid item lg={7} xs={12} sx={{maxHeight: "100vh"}}>
        <StyledImg src={loginBg} alt="bho" />
      </Grid>
    </Grid>
  );
};

export default Login;
