import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function ConfirmDialog({
  open,
  title,
  description,
  onConfirm = () => {},
  onCancel = () => {},
  titleProps,
  contentProps,
  actions,
}) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle {...titleProps}>{title}</DialogTitle>
      <DialogContent {...contentProps}>{description}</DialogContent>
      <DialogActions>
        {actions ? (
          actions
        ) : (
          <>
            <Button
              variant="text"
              size="small"
              color="inherit"
              onClick={onCancel}
            >
              Hủy
            </Button>
            <Button variant="outlined" size="small" onClick={onConfirm}>
              Xác nhận
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
