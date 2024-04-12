import React, {FC} from 'react';
import styled from "styled-components";
import testChatImage from '@/6-shared/assets/testChatImage.jpg';

const Image = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 50%;
`

interface Props{

}

const ChatIcon:FC<Props> = () => {
    return (
        <Image src={testChatImage} alt={'chat image'}/>
    );
};

export default ChatIcon;