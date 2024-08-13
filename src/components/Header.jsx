import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        boxShadow: "none",
        borderBottom: "2px solid #ddd",
        paddingX: isMobile ? 0 : 3,
        backgroundColor: "#ffffff",
      }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: 0,
        }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isMobile && (
            <IconButton sx={{ color: "#333", marginRight: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant={isMobile ? "h6" : "h5"}
            noWrap
            sx={{ fontWeight: "bold", color: "#F16521", marginRight: 2 }}>
            Etsy
          </Typography>
          {!isMobile && (
            <Button
              startIcon={<MenuIcon />}
              sx={{
                color: "#333",
                fontWeight: "bold",
                textTransform: "none",
                marginLeft: 2,
              }}>
              Categories
            </Button>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: isMobile ? 0 : 1,
            marginX: isMobile ? 1 : 4,
            width: "100%",
          }}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: isMobile ? "100%" : "1400px",
              borderRadius: "50px",
              border: "1.5px solid black",
              backgroundColor: "#fff",
              paddingX: 1,
            }}>
            <InputBase
              placeholder="Search for items"
              sx={{
                paddingLeft: 2,
                paddingRight: 6,
                width: "100%",
                fontSize: "16px",
                color: "#333",
                py: "5px",
              }}
            />
            <IconButton
              sx={{
                position: "absolute",
                right: 40,
                top: "50%",
                transform: "translateY(-50%)",
                padding: "8px",
                color: "#666",
              }}>
              <CloseIcon />
            </IconButton>
            <IconButton
              type="submit"
              sx={{
                position: "absolute",
                right: 4,
                top: "50%",
                transform: "translateY(-50%)",
                padding: "6px",
                color: "#f5f5f5",
                bgcolor: "#F16521",
              }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isMobile && (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: "#333",
                marginRight: 2,
                whiteSpace: "nowrap",
              }}>
              Sign in
            </Button>
          )}
          <IconButton sx={{ color: "#333" }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton sx={{ color: "#333" }}>
            <CardGiftcardIcon />
          </IconButton>
          <IconButton sx={{ color: "#333" }}>
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {!isMobile && (
        <Toolbar
          sx={{
            justifyContent: "center",
            backgroundColor: "#ffffff",
          }}>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#333",
              marginX: 1,
            }}>
            Gift Mode
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#333",
              marginX: 1,
            }}>
            Back-to-School Savings
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#333",
              marginX: 1,
            }}>
            Home Favorites
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#333",
              marginX: 1,
            }}>
            Fashion Finds
          </Button>
          <Button
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "#333",
              marginX: 1,
            }}>
            Registry
          </Button>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
