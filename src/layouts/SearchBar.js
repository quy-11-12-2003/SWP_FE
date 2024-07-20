import React, { useEffect, useState } from "react";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import useFilterParams from "../components/filters/useFilterParams";
import { FILTER_CONDITION } from "./constants";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const { values, setParam } = useFilterParams();
  const { [FILTER_CONDITION.name]: name } = values ?? {};

  useEffect(() => {
    setKeyword(name || "");
  }, [name]);

  const handleSubmit = () => {
    setParam(FILTER_CONDITION.name, keyword);
  };

  const handleReset = () => {
    setParam(FILTER_CONDITION.name, "");
    setKeyword("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleSubmit();
  };

  const handleChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <Stack
      direction="row"
      spacing={0.5}
      alignItems="center"
      sx={{
        width: 400,
        display: { xs: "none", sm: "flex" },
      }}
    >
      <TextField
        size="small"
        fullWidth
        placeholder="Tìm kiếm"
        value={keyword}
        onChange={handleChangeKeyword}
        onKeyDown={handleKeyDown}
        InputProps={{
          sx: { borderRadius: 0 },
        }}
      />
      <IconButton disableRipple
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
