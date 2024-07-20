// @mui
import { styled } from '@mui/material/styles'
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Iconify from '../../Iconify';
// -----------------------------------------------------------------

export const AccordionSummary = styled((props) => (
    <MuiAccordionSummary sx={{ width: `100%`, padding: 0}}
        expandIcon={<Iconify sx={{width: "20px", height: "20px"}} icon={"ic:round-expand-more"}/>}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row',
    '& .MuiAccordionSummary-content': {
        margin: theme.spacing(0),
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: theme.spacing(0),
    },
    '&.MuiAccordionSummary-root.Mui-expanded':{
        minHeight: "0 !important",
    },
    minHeight: 0,
}));