import { styled, TextField } from "@mui/material"

const TextFieldStyle = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#919eab52',
    },
    padding: "10px",
    fontSize: "1rem",
  },
  '& .MuiOutlinedInput-input': {
    padding: 0,
  },
  '& .MuiInput-root': {
    fontSize: "0.875rem",
  },
})
export const ReadOnlyTextField = ({ InputProps, ...props }) => {
  return <TextFieldStyle  {...props}
    InputProps={{ readOnly: true, ...InputProps }}
  />
}