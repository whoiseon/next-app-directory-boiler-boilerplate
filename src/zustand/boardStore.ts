import { create } from "zustand";

interface Board
{
    id: number;
    title: string;
    description: string;
}

interface BoardStore
{
    list: Board[];
    addPost: (postData: Board) => void;
    removePost: (id: number) => void;
}

export const boardStore = create<BoardStore>((set) => ({
    list: [],
    addPost: (postData) =>
    {
        set((state) => ({
            list: [postData, ...state.list]
        }));
    },
    removePost: (id) =>
    {
        set((state) => ({
            list: state.list.filter((board) => board.id !== id),
        }));
    }
}));