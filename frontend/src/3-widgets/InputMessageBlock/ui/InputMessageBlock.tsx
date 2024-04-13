import InputMessage from "@/6-shared/ui/inputMessage/InputMessage.tsx";
import styled from "styled-components";
import {Button} from "@mui/material";

const InputMessageBlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const InputMessageBlock = ()=>{
    return (
        <InputMessageBlockWrapper>
            <InputMessage/>
            <Button variant="outlined">Отправить</Button>
        </InputMessageBlockWrapper>
    )
}