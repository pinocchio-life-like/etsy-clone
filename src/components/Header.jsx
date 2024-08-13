import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{ boxShadow: "none", borderBottom: "1px solid #ddd" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap>
          Etsy
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", width: "50%" }}>
          <Box sx={{ position: "relative", width: "100%" }}>
            <InputBase
              placeholder="Search for items"
              sx={{
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "4px",
                backgroundColor: "#f1f1f1",
                width: "100%",
              }}
            />
            <IconButton
              type="submit"
              sx={{ position: "absolute", right: 0, top: 0, padding: "10px" }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
