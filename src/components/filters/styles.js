import { Box, Paper, styled, alpha } from "@mui/material"

const WrapperStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    overflow: 'hidden',
    alignItems: 'stretch',
    margin: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    border: `solid 1px ${alpha(theme.palette.divider, 0.12)}`,
}));

const LabelStyle = styled('span')(({ theme }) => ({
    ...theme.typography.subtitle2,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 0, 0, 1),
    color: theme.palette.text.secondary,
    // backgroundColor: theme.palette.background.neutral,
    // borderRight: `solid 1px ${theme.palette.divider}`,
}));

const RootStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
}));


export {
    WrapperStyle, 
    LabelStyle, 
    RootStyle
}