import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import OutlinedInput from "@mui/material/OutlinedInput"
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

            <OutlinedInput multiline={Boolean(multiline)} rows={multiline} fullWidth onChange={onChange} name={name} value={value} type={type} disabled={disabled} onClick={onClick} onBlur={onBlur} placeholder={placeholder} error={!!errorMsg} />
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
