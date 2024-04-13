import {FC} from 'react';
import ChatIcon from "@/6-shared/ui/chatIcon/ChatIcon.tsx";
import styled from "styled-components";

const ChatCardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        background: #eae9e9;
    }
`

const ChatCardContentText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

interface Props{
    title:string,
    text?:string
}

export const ChatCard:FC<Props> = ({title, text}) => {
    return (
        <ChatCardWrapper>
            <ChatIcon/>
            <ChatCardContentText>
                <div>
                    {title}
                </div>
                <div>
                    {text}
                </div>
            </ChatCardContentText>
        </ChatCardWrapper>
    );
};