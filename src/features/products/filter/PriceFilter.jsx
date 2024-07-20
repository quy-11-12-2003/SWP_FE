import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useFilterParams from "../../../components/filters/useFilterParams";
import { isNil } from "lodash";

const PriceFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [_startPrice, setStartPrice] = useState(null);
  const [_endPrice, setEndPrice] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const { values, setParams } = useFilterParams();
  const { startPrice, endPrice, defaultValues } = values ?? {};

  useEffect(() => {
    setStartPrice(startPrice || null);
    setEndPrice(endPrice || null);
  }, [startPrice, endPrice]);

  const changeStartPrice = (newValue) => {
    setStartPrice(newValue);
  };

  const changeEndPrice = (newValue) => {
    setEndPrice(newValue);
  };

  const handleReset = () => {
    setParams({
      ...values,
      startPrice: null,
      endPrice: null,
    });
    setStartPrice(null);
    setEndPrice(null);
    handleClose();
  };

  const isValidNum = (data) => {
    return !isNil(data) && data !== "";
  };

  const handleSubmit = () => {
    if (isValidNum(_startPrice) && isValidNum(_endPrice)) {
      const numStartPrice = Number(_startPrice);
      const numEndPrice = Number(_endPrice);
      if (numStartPrice > numEndPrice)
        return setErrorMsg("Giá đến phải lớn hơn giá từ!");
    }
    setErrorMsg("");
    setParams({
      ...values,
      startPrice: _startPrice,
      endPrice: _endPrice,
    });
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
    startPrice !== defaultValues?.startPrice ||
    endPrice !== defaultValues?.endPrice;

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
        Khoảng giá
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
            LỌC THEO GIÁ
          </Typography>
          <Stack my={1.5}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CurrencyField
                label="Từ"
                value={_startPrice}
                onChange={changeStartPrice}
              />
              <Stack
                sx={{
                  height: 40,
                  justifyContent: "center",
                  alignSelf: "flex-end",
                }}
              >
                <Typography>-</Typography>
              </Stack>
              <CurrencyField
                label="Đến"
                value={_endPrice}
                onChange={changeEndPrice}
              />
            </Stack>
            {!!errorMsg && (
              <Typography
                variant="caption"
                sx={{ color: (theme) => theme.palette.error.main }}
              >
                {errorMsg}
              </Typography>
            )}
          </Stack>
          <Stack
            flex={1}
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            justifyContent={{
              xs: "initial",
              sm: "flex-end",
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

export default PriceFilter;

function CurrencyField({ label, value, onChange }) {
  return (
    <Stack>
      <Typography>{label}</Typography>
      <NumericFormat
        customInput={TextField}
        thousandSeparator
        onValueChange={(values) => onChange(values.value)}
        value={value}
        size="small"
        sx={{ width: 130 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">₫</InputAdornment>,
        }}
      />
    </Stack>
  );
}
