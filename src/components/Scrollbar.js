import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

export function getDeviceType() {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return { isMobile }
}

const Scrollbar = forwardRef(({ children, sx, ...other }, ref) => {
  const { isMobile } = getDeviceType()

  const mobileStyles = {
    '& .simplebar-track.simplebar-vertical': {
      width: 0,
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
      height: 0,
    },
  }

  return (
    <SimpleBarStyle timeout={500} clickOnTrack={false}
      scrollableNodeProps={{
        ref: ref,
      }}
      sx={{ ...isMobile && mobileStyles, ...sx }}
      {...other}>
      {children}
    </SimpleBarStyle>
  );
})

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default Scrollbar