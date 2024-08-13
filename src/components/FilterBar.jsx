import React from "react";
import { Box, Button } from "@mui/material";

const FilterBar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, padding: "10px 20px" }}>
      <Button variant="outlined">All Filters</Button>
      <Button variant="outlined">Etsy's Pick</Button>
      {/* Add other filter options as buttons */}
    </Box>
  );
};

export default FilterBar;
