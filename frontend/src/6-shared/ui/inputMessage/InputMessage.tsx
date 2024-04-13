import {TextField} from "@mui/material";
import styled from "styled-components";

const StyledInput = styled(TextField)`
    flex-grow: 1;
`

const InputMessage = ()=>{
    return(
        <StyledInput id="outlined-basic" variant="outlined" size="small" />
    )
}

export default InputMessage