import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Popover,
  Typography,
  styled,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useFilterParams from "../../../components/filters/useFilterParams";
import { FILTER_CONDITION } from "../../../layouts/constants";
import { useGetAllMilkBrandQuery } from "../../../app/services/milk-brand/milkBrandApi";
import StateManager, { specifyState } from "../../../components/StateManager";
import BrandSkeleton from "./BrandSkeleton";
import ErrorAlert from "../../../components/ErrorAlert";

const CheckboxStyled = styled(Box)(({ theme, sx, checked }) => ({
  padding: theme.spacing(0),
  border: 0,
  minWidth: "80px",
  textAlign: "center",
  ...(checked && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  }),
}));

const BrandFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { values, setParam } = useFilterParams();
  const { [FILTER_CONDITION.milkBrandIds]: milkBrandIds = [] } = values ?? {};

  const responseMilkBrand = useGetAllMilkBrandQuery();
  const { data } = responseMilkBrand;
  const state = specifyState(responseMilkBrand);

  const handleChange = (event, id) => {
    let cloneData = structuredClone(milkBrandIds);
    const selectedIdx = cloneData?.indexOf(id);

    if (selectedIdx !== -1) cloneData?.splice(selectedIdx, 1);
    else cloneData = [...(cloneData || []), id];
    setParam(FILTER_CONDITION.milkBrandIds, cloneData);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const isHasData = milkBrandIds?.length > 0;

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
        Thương hiệu
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
        <Box sx={{ p: 1, width: 1, maxWidth: "400px" }}>
          <Typography fontSize="14px" fontWeight={300}>
            LỌC THEO THƯƠNG HIỆU
          </Typography>
          <FormControl component="fieldset" variant="standard" sx={{ mt: 1.5 }}>
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                rowGap: 1,
                columnGap: 1.5,
                flexWrap: "wrap",
              }}
            >
              <StateManager
                state={state}
                loadingState={<BrandSkeleton />}
                errorState={<ErrorAlert />}
              >
                {data?.map((brand) => {
                  const isSelected = milkBrandIds?.includes(brand.id);
                  return (
                    <FormControlLabel
                      key={brand.id}
                      control={
                        <Checkbox
                          checked={isSelected}
                          name={brand.name}
                          onChange={(e) => handleChange(e, brand.id)}
                          sx={{ display: "none" }}
                        />
                      }
                      label={
                        <CheckboxStyled checked={isSelected}>
                          {brand.name}
                        </CheckboxStyled>
                      }
                      sx={{
                        display: "inline-block",
                        m: 0,
                      }}
                    />
                  );
                })}
              </StateManager>
            </FormGroup>
          </FormControl>
        </Box>
      </Popover>
    </>
  );
};

export default BrandFilter;
