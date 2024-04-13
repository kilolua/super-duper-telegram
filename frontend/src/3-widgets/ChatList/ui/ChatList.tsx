import {FC} from 'react';
import {ChatCard} from "@/3-widgets/ChatCard";
import styled from "styled-components";
import {useAppSelector} from "@/1-app/store/hook.ts";
import {Link} from "react-router-dom";

const ChatListWrapper = styled.div`
    padding: 10px;
    min-height: 100vh;
`

export const ChatList: FC = () => {
    const {chats} = useAppSelector((state) => state.chats);

    return (
        <ChatListWrapper>
            {chats.map((item) => (
                <Link to={`/chat#${item.interlocutor.id}`}>
                    <ChatCard
                        key={item.interlocutor.id}
                        title={item.interlocutor.name}
                        text={item.chatMessages?.at(-1)?.text}
                    />
                </Link>
            ))}
        </ChatListWrapper>
    );
};