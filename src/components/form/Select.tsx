import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

import Box from "@mui/material/Box"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import { BoxProps } from "@mui/material"

interface InputProps {
    placeholder?: string
    label?: string
    errorMsg?: string | undefined | boolean
    multiline?: number
}

const DefaultInput: FC<InputProps & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & BoxProps> = ({ placeholder, label, errorMsg, multiline, name, type, onBlur, onChange, value, onClick, disabled, ...props }) => {
    return (
        <Box width="100%" {...props}>
            {label && (
                <Typography pb="8px" fontWeight="regular" variant="subtitle2">
                    {label}
                </Typography>
            )}

            <Select fullWidth name={name} value={value} type={type} disabled={disabled} onClick={onClick} onBlur={onBlur} placeholder={placeholder} error={!!errorMsg}>
                <MenuItem disabled selected value="">
                    {placeholder}
                </MenuItem>
                <MenuItem selected value="">
                    <Typography variant="subtitle2">item 1</Typography>
                </MenuItem>
                <MenuItem selected value="">
                    <Typography variant="subtitle2">item 1</Typography>
                </MenuItem>
            </Select>
        </Box>
    )
}

DefaultInput.defaultProps = {
    errorMsg: false,
    label: "",
    placeholder: "",
    multiline: 0,
}

export default DefaultInput
