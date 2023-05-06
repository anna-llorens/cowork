import { TextField as TextFieldMUI } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextFieldMUI)`
  width: 300px;
`;
export const TextField = ({ value, onChange, placeholder, type = "text" }) => (
  <StyledTextField
    size="small"
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />
);
