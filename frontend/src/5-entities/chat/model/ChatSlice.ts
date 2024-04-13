import {createSlice} from "@reduxjs/toolkit";
import {IChat} from "@/5-entities/chat/types/ChatTypes.ts";



interface IInitialState{
    chats:IChat[]
}


const initialState:IInitialState = {
    chats:[
        {
            interlocutor:{id:'1', name:'Polina'},
            chatMessages:[
                {
                    type:'owner',
                    text:'Привет'
                },
                {
                    type:'other',
                    text:'Приветик'
                },
            ]
        },
        {
            interlocutor:{id:'2', name:'Feduk'},
            chatMessages:[
                {
                    type:'owner',
                    text:'Привет'
                },
                {
                    type:'other',
                    text:'Алей'
                },
            ]
        }
    ]
}

const ChatSlice = createSlice({
    name:'ChatSlice',
    initialState,
    reducers:{

    }
})

export default ChatSlice.reducer