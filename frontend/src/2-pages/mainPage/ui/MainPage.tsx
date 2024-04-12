import {FC} from 'react';
import styled from "styled-components";
import {ChatCard} from "@/3-widgets/";

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
`

export const MainPage:FC = () => {
    return (
        <MainWrapper>
            <div>
                <ChatCard/>
            </div>
            <div>
                Chat
            </div>
        </MainWrapper>
    );
};