import React, { useEffect, useState } from "react";
import { Box, Button, Popover, Stack, Typography, Slider } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IOSSlider } from "./SliderCustom";
import useFilterParams from "../../../components/filters/useFilterParams";
import { FILTER_CONDITION } from "../../../layouts/constants";

const AgeFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState([0, 0]);

  const { values, setParam } = useFilterParams();
  const { [FILTER_CONDITION.rangeAge]: rangeAge, defaultValues } = values ?? {};
  const defaultData = defaultValues?.[FILTER_CONDITION.rangeAge];

  useEffect(() => {
    setValue(rangeAge || [0, 0]);
  }, [rangeAge]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    setParam(FILTER_CONDITION.rangeAge, value);
    handleClose();
  };

  const handleReset = () => {
    setParam(FILTER_CONDITION.rangeAge, defaultData);
    setValue(defaultData);
    handleClose();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const isHasData =
    defaultData?.[0] !== rangeAge?.[0] || defaultData?.[1] !== rangeAge?.[1];

  return (
    <>
      <Button
        variant={isHasData ? "contained" : "text"}
        size="small"
        sx={{
          borderRadius: 0,
          fontSize: "1rem",
          fontWeight: 400,
          color: "#46494F",
          ...(isHasData && {
            color: "white",
            bgcolor: (theme) => theme.palette.primary.light,
            border: (theme) => `1px solid ${theme.palette.primary.dark}`,
          }),
        }}
        endIcon={
          open ? (
            <KeyboardArrowUp fontSize="small" />
          ) : (
            <KeyboardArrowDown fontSize="small" />
          )
        }
        onClick={handleClick}
      >
        Độ tuổi
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography fontSize="14px" fontWeight={300}>
            LỌC THEO TUỔI
          </Typography>
          <Box sx={{ my: 1.5, width: "272px" }}>
            <Slider
              getAriaLabel={() => "Age range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="on"
              getAriaValueText={(value) => `${value} tuổi`}
            />
          </Box>
          <Stack
            flex={1}
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent={{
              xs: "initial",
              sm: isHasData ? "space-between" : "flex-end",
            }}
          >
            {isHasData && (
              <Button
                variant="outlined"
                color="error"
                size="small"
                sx={{
                  borderRadius: 100,
                }}
                onClick={handleReset}
              >
                Đặt lại
              </Button>
            )}
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                borderRadius: 100,
              }}
              onClick={handleSubmit}
            >
              Áp dụng
            </Button>
          </Stack>
        </Box>
      </Popover>
    </>
  );
};

export default AgeFilter;
