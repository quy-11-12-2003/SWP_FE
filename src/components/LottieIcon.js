import { forwardRef } from 'react';
import { Box } from '@mui/system';
import { useLottie } from "lottie-react"
// ----------------------------------------------------------------------

const LottieIcon = forwardRef((props, ref) => {
    const { animationData, loop, width, height, style } = props || {}
    
    const options = {
        animationData: animationData,
        loop: loop ?? true
    };
    
    const styles = {
        width: width,
        height: height,
        ...style
    }

    const { View } = useLottie(options, styles)

    return <Box ref={ref}>
        {View}
    </Box>
})
export default LottieIcon