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
          alignItems: {
            xs: "flex-end",
            sm: "center",
          },
          justifyContent: "space-between",
          paddingY: "2px",
          paddingX: {
            xs: 0,
            sm: 4,
          },
          flexWrap: "nowrap",
          flexDirection: { xs: "column", sm: "row" },
        }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{
              display: { xs: "inline-flex", sm: "none" },
              padding: "5px",
              color: "black",
            }}>
            <FilterListIcon />
          </IconButton>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              fontWeight: "bold",
              padding: "5px 16px",
              borderRadius: "24px",
              border: "1px solid black",
              color: "black",
              height: "36px",
              fontSize: "14px",
              whiteSpace: "nowrap",
            }}>
            All Filters
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: { xs: "auto", sm: "auto" },
            justifyContent: { xs: "space-between", sm: "flex-end" },
          }}>
          <Typography
            sx={{
              color: "#555",
              fontSize: "14px",
              display: { xs: "inline-flex", sm: "inline-flex" },
            }}>
            356 results, with Ads
          </Typography>
          <IconButton
            sx={{
              padding: 0,
              color: "#555",
              fontSize: "14px",
              display: { xs: "inline-flex", sm: "inline-flex" },
            }}>
            <HelpOutlineIcon fontSize="small" />
          </IconButton>
          <Select
            defaultValue="Most relevant"
            variant="outlined"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              fontWeight: "bold",
              padding: "5px 16px",
              borderRadius: "24px",
              border: "1px solid black",
              color: "black",
              fontSize: "14px",
              height: "36px",
              textAlign: "right",
              "& .MuiSelect-select": {
                paddingRight: "24px",
              },
            }}>
            <MenuItem value="Most relevant">Sort by: Most relevant</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          paddingY: "8px",
          paddingX: {
            xs: 0,
            sm: 4,
          },
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
