import React from 'react';
import { Search } from "@mui/icons-material";

export const SearchIcon=()=> {
  return (
    <div role="info">
      <Search fontSize="large" sx={{ color: "#042330" }}></Search>
    </div>
  );
}

export default SearchIcon;