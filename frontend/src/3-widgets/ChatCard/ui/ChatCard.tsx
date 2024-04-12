import React, {FC} from 'react';
import ChatIcon from "@/6-shared/ui/chatIcon/ChatIcon.tsx";
import styled from "styled-components";

const ChatCardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 10px;
`

const ChatCardContentText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

export const ChatCard:FC = () => {
    return (
        <ChatCardWrapper>
            <ChatIcon/>
            <ChatCardContentText>
                <div>
                    Заголовок
                </div>
                <div>
                    Последнее сообщение
                </div>
            </ChatCardContentText>
        </ChatCardWrapper>
    );
};