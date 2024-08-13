import React from "react";
import { Box, Button } from "@mui/material";

const FilterBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        padding: "20px 0",
        justifyContent: "center",
        borderBottom: "1px solid #ddd",
      }}>
      <Button
        variant="outlined"
        sx={{ fontWeight: "bold", padding: "10px 20px" }}>
        ALL FILTERS
      </Button>
      <Button
        variant="outlined"
        sx={{ fontWeight: "bold", padding: "10px 20px" }}>
        ETSY'S PICK
      </Button>
      {/* Add other filter options as buttons */}
    </Box>
  );
};

export default FilterBar;
