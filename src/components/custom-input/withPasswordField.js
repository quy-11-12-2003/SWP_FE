import { useState } from "react"
import { InputAdornment, IconButton } from "@mui/material"
import Iconify from "../Iconify"

export default function withPasswordField(Component, configs){
    const { defaultShown=false } = configs ?? {}

    return ({InputProps, size="medium", ...props}) => {
        const [isShown, setIsShown] = useState(defaultShown)
        const endAdornment = (
            <InputAdornment position="end">
                <IconButton size={size} 
                    onClick={() => setIsShown(!isShown)}>
                    <Iconify icon={isShown ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
            </InputAdornment>
        )
        
        return <Component size={size}
            type={isShown ? 'text' : 'password'}
            InputProps={{ endAdornment, ...InputProps }}
            {...props}/>
    }
}