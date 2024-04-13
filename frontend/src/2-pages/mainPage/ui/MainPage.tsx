import {FC} from 'react';
import styled from "styled-components";
import {Card} from "@mui/material";
import {ChatList} from "@/3-widgets/ChatList";
import {CurrentChat} from "@/3-widgets/CurrentChat";

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
`

export const MainPage:FC = () => {
    return (
        <MainWrapper>
            <Card variant="outlined">
                <ChatList/>
            </Card>
            <Card>
                <CurrentChat/>
            </Card>
        </MainWrapper>
    );
};