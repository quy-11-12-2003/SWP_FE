import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
//
import Image from './Image';
import useResponsive from '../hooks/useResponsive';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(8, 2),
}));

// ----------------------------------------------------------------------

EmptyContent.propTypes = {
  title: PropTypes.any,
  img: PropTypes.string,
  description: PropTypes.any,
};

export default function EmptyContent({ title, description, img, titleStyles, descStyles, imgProps, ...other }) {
  const isMobile = useResponsive('down', 'sm');

  return (
    <RootStyle {...other}>
      <Image
        disabledEffect
        visibleByDefault
        alt="empty content"
        src={img || '/assets/illustrations/empty_flower.svg'}
        {...imgProps}
        sx={{
          mb: 3,
          height: isMobile ? 120 : 160,
          ...imgProps
        }}
      />
      <Typography gutterBottom
        sx={{
          fontWeight: 500, ...titleStyles
        }}>
        {title}
      </Typography>
      {typeof description === 'string' ? (
        <Typography variant="body2"
          sx={{ color: 'text.secondary', ...descStyles }}>
          {description}
        </Typography>
      ) : description}
    </RootStyle>
  );
}