import { Box, Stack, alpha } from '@mui/material'
import React from 'react'

const PAYMENT_METHOD = {
    vnpay: 'vnpay'
}

const methods = [
    { imgUrl: 'https://seeklogo.com/images/V/vnpay-logo-CCF12E3F02-seeklogo.com.png', value: PAYMENT_METHOD.vnpay }
]

const PaymentItem = ({ imgUrl, isSelected }) => {
    return (
        <Box sx={{
            borderRadius: 0.75,
            border: '1px solid #F4F4F4',
            width: '56px',
            height: '32px',
            py: 0.875,
            px: 1.5,
            cursor: 'pointer',
            ...isSelected && {
                borderColor: theme => theme.palette.primary.main,
                bgcolor: theme => alpha(theme.palette.primary.light, 0.1)
            }
        }}>
            <img alt='payment-method' src={imgUrl}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center'
                }}
            />
        </Box>
    )
}


const PaymentMethod = () => {
    return (
        <Stack direction='row' spacing={1.5}>
            {methods.map(method => <PaymentItem key={method.value}
                imgUrl={method.imgUrl}
                isSelected
            />)}
        </Stack>
    )
}

export default PaymentMethod