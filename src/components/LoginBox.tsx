import { Button, Grid, Input, styled, Typography } from "@mui/material";

const StyledBox = styled(Grid)(({ theme }) => ({
  margin: "0 auto",
  padding: theme.spacing(3),
  boxShadow: ["1px", "1px", theme.palette.grey[800]].join(" "),
  borderRadius: 5,
  backgroundColor: theme.palette.grey[900],
  
}));


const LoginBox = () => {
  return (
    <StyledBox container direction="column" gap={2} maxWidth="sm">
      <Grid item>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="text.secondary">
          Email
        </Typography>
        <Input type="email" fullWidth />
      </Grid>
      <Grid item>
        <Typography variant="h6" color="text.secondary">
          Password
        </Typography>
        <Input type="password" fullWidth />
      </Grid>
      <Grid item>
        <Button variant="contained" fullWidth>
          Log In
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" fullWidth>
          Sign up
        </Button>
      </Grid>
    </StyledBox>
  );
};

export default LoginBox;
