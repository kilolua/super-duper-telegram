import styled from "styled-components";
import {InputMessageBlock} from "@/3-widgets/InputMessageBlock/ui/InputMessageBlock.tsx";

const CurrentChatWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
`

const InputMessageWrapper = styled.div`
    margin-top: auto;
    width: 100%;
`

export const CurrentChat = ()=>{
    return(
        <CurrentChatWrapper>
            <div>Сообщения чата</div>
            <InputMessageWrapper>
                <InputMessageBlock/>
            </InputMessageWrapper>
        </CurrentChatWrapper>
    )
}