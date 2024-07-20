import { Stack, Typography, Accordion, AccordionDetails } from "@mui/material"
import { isString } from "lodash";
import { AccordionSummary } from "../customs/Accordions/AccordionSummary"

export function GroupBox({ title, titleProps, sx, variant = "default", defaultExpanded,
    deletedFiles, trans, dispatch, ...props }) {
    switch (variant) {
        case "accordion": return <AccordionGroupBox
            title={title}
            sx={sx}
            defaultExpanded={defaultExpanded}
            titleProps={titleProps}
            {...props}
        />
        default: return <DefaultGroupBox
            title={title}
            titleProps={titleProps}
            {...props}
        />
    }
}

function DefaultGroupBox({ title, titleProps, ...props }) {
    return <Stack direction={"column"} {...props}>
        {isString(title) && <Typography variant="subtitle2"
            sx={{ py: 0, fontWeight: 500 }}
            {...titleProps}>
            {title}
        </Typography>}
        {!isString(title) && title}
        {props?.children}
    </Stack>
}

function AccordionGroupBox({ title, titleProps, sx, ...props }) {
    return <Accordion // defaultExpanded
        {...props}
        TransitionProps={{ unmountOnExit: true }}
        sx={{
            '&.Mui-expanded': {
                boxShadow: 'none',
                mb: 0,
            },
            '&:before': { height: 0 },
            ...sx,
        }}>
        <AccordionSummary>
            {isString(title) && <Typography variant="subtitle2"
                sx={{ py: 0, fontWeight: 500 }}
                {...titleProps}>
                {title}
            </Typography>}
            {!isString(title) && title}
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0, m: 0 }}>
            {props?.children}
        </AccordionDetails>
    </Accordion>
}