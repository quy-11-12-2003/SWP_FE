import PropTypes from 'prop-types';
// @mui
import { Box, Typography, Link, Skeleton, Stack } from '@mui/material';
//
import Breadcrumbs from './Breadcrumbs';
import useResponsive from '../hooks/useResponsive';

// ----------------------------------------------------------------------

HeaderBreadcrumbs.propTypes = {
  links: PropTypes.array,
  action: PropTypes.node,
  heading: PropTypes.any,
  moreLink: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sx: PropTypes.object,
};

export default function HeaderBreadcrumbs({ links, action, heading, moreLink = '' || [], sx, sxContainers,
  sxActions, isLoading = false, renderExpanded, styleHeading, ...other }) {
  const isPhone = useResponsive('down', 'sm')

  return (
    <Box sx={{ mb: 0, ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center', ...sxContainers }}>
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction='row' alignItems='center'>
            <Typography variant="h5" gutterBottom fontWeight={500} {...styleHeading}>
              {heading}
            </Typography>
            {!isPhone && renderExpanded?.()}
          </Stack>
          <Breadcrumbs links={links} {...other} />
        </Box>
        {action && <Box sx={{ flexShrink: 0, ...sxActions }}>{action}</Box>}
      </Box>
      <Box sx={{ mt: 2 }}>
        {typeof moreLink === 'string' ? (
          <Link href={moreLink} target="_blank" rel="noopener" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href, idx) => (
            <Link
              noWrap
              key={idx}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
      {isPhone && renderExpanded?.()}
    </Box>
  );
}
