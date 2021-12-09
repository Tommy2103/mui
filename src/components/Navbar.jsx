import { AppBar, Stack, styled, Toolbar, Typography } from "@mui/material";

const NavItems = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const Offset = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));


const Navbar = ({ children }) => {
  return (
    <>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-around" }}>
          <Typography variant="h6" color="primary">
            Logo
          </Typography>
          <NavItems>{children}</NavItems>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Navbar;
