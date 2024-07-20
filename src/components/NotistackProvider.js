import PropTypes from 'prop-types';
import { useRef } from 'react';
import { SnackbarProvider } from 'notistack';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, GlobalStyles, Collapse } from '@mui/material';
//
import Iconify from './Iconify';
import { IconButtonAnimate } from './animate';

// configs
import { STACKBAR } from '../configs/app'

// ----------------------------------------------------------------------

function SnackbarStyles() {
  return (
    <GlobalStyles
      styles={{
        '#root': {
          '& .SnackbarContent-root': {
            width: '100%',
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
          },
          '& .SnackbarItem-message': {
            padding: '0 !important',
            fontWeight: 600,
          },
          '& .SnackbarItem-action': {
            marginRight: 0,
            '& svg': { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

// ----------------------------------------------------------------------

NotistackProvider.propTypes = {
  children: PropTypes.node,
};

export default function NotistackProvider({ children }) {

  const notistackRef = useRef(null);

  const onClose = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarStyles />
      <SnackbarProvider
        ref={notistackRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={STACKBAR.HIDE_DURATION}
        TransitionComponent={Collapse}
        variant="success" // Set default variant
        anchorOrigin={{ vertical: STACKBAR.ANCHOR_VERTICAL, horizontal: STACKBAR.ANCHOR_HORIZONTAL }}
        iconVariant={{
          info: <SnackbarIcon icon={'eva:info-fill'} color="info" />,
          success: <SnackbarIcon icon={'eva:checkmark-circle-2-fill'} color="success" />,
          warning: <SnackbarIcon icon={'eva:alert-triangle-fill'} color="warning" />,
          error: <SnackbarIcon icon={'eva:alert-circle-fill'} color="error" />,
        }}
        // With close as default
        action={(key) => (
          <IconButtonAnimate size="small" onClick={onClose(key)} sx={{ p: 0.5 }}>
            <Iconify icon={'eva:close-fill'} />
          </IconButtonAnimate>
        )}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}

// ----------------------------------------------------------------------

SnackbarIcon.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'warning', 'error']),
};

function SnackbarIcon({ icon, color }) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16),
      }}
    >
      <Iconify icon={icon} width={24} height={24} />
    </Box>
  );
}
