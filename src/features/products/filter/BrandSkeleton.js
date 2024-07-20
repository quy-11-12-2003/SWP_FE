import { Skeleton } from '@mui/material'
import React from 'react'

const BrandSkeleton = () => {
    return (
        Array(5).fill(0).map((_, idx) => (
            <Skeleton key={idx} variant='rectangular' sx={{
                padding: 0.5,
                paddingLeft: 0.75,
                paddingRight: 0.75,
                borderRadius: 3,
                height: '32px',
                minWidth: "80px",
            }} />
        ))
    )
}

export default BrandSkeleton