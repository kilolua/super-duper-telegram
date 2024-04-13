import React, {FC} from 'react';
import {ChatCard} from "@/3-widgets/ChatCard";
import styled from "styled-components";

const ChatListWrapper = styled.div`
    padding: 10px;
    min-height: 100vh;
`

export const ChatList: FC = () => {
    return (
        <ChatListWrapper>
            {Array(10).fill(1).map(() => (
                <ChatCard/>
            ))}
        </ChatListWrapper>
    );
};