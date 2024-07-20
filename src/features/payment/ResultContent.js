import { useMemo } from 'react';
import { isString } from 'lodash';
import { Stack, Typography } from '@mui/material'
//
import failed from '../../components/lottie/lottie-json/failed.json'
import success from '../../components/lottie/lottie-json/success.json'
import LottieIcon from '../../components/LottieIcon';

// ----------------------------------------------------------------------

export default function ResultContent({ isError = false, title = "Successfully", content = "Great job!", ...props }) {
    const animationData = useMemo(() => isError ? failed : success, [isError])

    return (
        <Stack my={3} spacing={2} alignItems={'center'} {...props}>
            <LottieIcon height="150px"
                loop={false}
                animationData={animationData}
            />
            <Stack alignItems={'center'} spacing={2}>
                {!isString(title) ? title : <Typography fontWeight={500}>{title}</Typography>}
                {!isString(content) ? content : <Typography variant='body2'>{content}</Typography>}
            </Stack>
        </Stack>
    )
}
