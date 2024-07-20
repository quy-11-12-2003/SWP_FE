import { Stack, Typography, styled } from '@mui/material'

const RootStyle = styled(Stack)(({ theme, variant = "body2", sx }) => ({
    ...theme.typography[variant],
    alignItems: 'center',
    ...sx?.textAlign === "right" && { justifyContent: "flex-end" },
}))

function LabelRequired({ isShowSymbol = true, symbol = '*', position = 'after', children, ...others }) {
    const MandatorySymbol = isShowSymbol && (
        <Typography color={theme => theme.palette.error.main}>
            {symbol}
        </Typography>
    )

    return (
        <RootStyle direction='row' spacing={0.3} {...others}>
            {position === 'before' && MandatorySymbol}
            {children}
            {position === 'after' && MandatorySymbol}
        </RootStyle>
    )
}

export default LabelRequired