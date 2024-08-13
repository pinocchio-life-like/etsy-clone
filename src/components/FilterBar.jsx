import React from "react";
import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const FilterBar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 24px",
          flexWrap: "nowrap",
        }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              fontWeight: "bold",
              padding: "5px 16px",
              borderRadius: "24px",
              border: "1px solid black",
              color: "black",
              height: "36px",
              fontSize: "14px",
            }}>
            All Filters
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ color: "#555", fontSize: "14px" }}>
            356 results, with Ads
          </Typography>
          <IconButton sx={{ padding: 0, color: "#555", fontSize: "14px" }}>
            <HelpOutlineIcon fontSize="small" />
          </IconButton>
          <Select
            defaultValue="Most relevant"
            variant="outlined"
            sx={{
              fontWeight: "bold",
              padding: "5px 16px",
              borderRadius: "24px",
              border: "1px solid black",
              color: "black",
              fontSize: "14px",
              height: "36px",
            }}>
            <MenuItem value="Most relevant">Sort by: Most relevant</MenuItem>
            <MenuItem value="Price: Low to High">
              Sort by: Price: Low to High
            </MenuItem>
            <MenuItem value="Price: High to Low">
              Sort by: Price: High to Low
            </MenuItem>
          </Select>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "8px 24px",
          display: "flex",
          justifyContent: "flex-start",
        }}>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            padding: "5px 16px",
            borderRadius: "24px",
            backgroundColor: "#f5f5f5",
            color: "#333",
            boxShadow: "none",
            height: "36px",
            fontSize: "14px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#f5f5f5",
              color: "#333",
              boxShadow: "none",
            },
          }}>
          Etsy's Pick <Typography sx={{ marginLeft: 1 }}>✕</Typography>
        </Button>
      </Box>
    </>
  );
};

export default FilterBar;
