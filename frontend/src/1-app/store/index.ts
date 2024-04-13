import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "@/5-entities/chat/model/ChatSlice.ts";

export const store = configureStore({
    reducer:{
        chats: chatSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch