export interface IInterlocutor {
    id: string,
    name: string
}

export interface IMessage {
    type: "owner" | 'other';
    text: string
}

export interface IChat {
    interlocutor: IInterlocutor
    chatMessages: IMessage[];
}