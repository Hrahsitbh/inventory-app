import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

const Navbar = ({ isAdmin, toggleView }) => {
  const onChange = (e) => {
    console.log(e.target.checked);
    toggleView(e.target.checked);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "black",
        color: "#fff",
        padding: "30px 10px",
      }}
    >
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Inventory Stats
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" fontWeight="bold">
            {"User"}
          </Typography>
          <Box>
            <Switch color="success" checked={isAdmin} onChange={onChange} />
          </Box>
          <Typography variant="h6" fontWeight="bold">
            {"Admin"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
