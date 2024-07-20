import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
//
import Image from './Image';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(3, 2),
}));

// ----------------------------------------------------------------------

ErrorAlert.propTypes = {
  img: PropTypes.string,
};

export default function ErrorAlert({ img, imgStyle, title, titleStyle, description, descStyle, ...other }) {
  return (
    <RootStyle {...other}>
      <Image
        alt="Error content"
        src={img || '/assets/illustrations/no_upcoming_trips.svg'}
        sx={{ height: 150, mb: 3, ...imgStyle }}
      />
      <Stack>
        <Typography variant="h6" gutterBottom
          fontWeight={500} sx={titleStyle}>
          {title ?? "Rất tiếc! Đã xảy ra lỗi"}
        </Typography>
        <Typography variant="body2" color='text.secondary'
          sx={descStyle}>
          {description ?? "Xin vui lòng thử lại sau một thời gian."}
        </Typography>
      </Stack>
    </RootStyle>
  );
}
