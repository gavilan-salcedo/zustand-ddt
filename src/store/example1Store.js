import { create } from 'zustand'


const INITIAL_TODO_LIST = [
  {
    id: 0,
    description: "Buy Groceries",
    status: "COMPLETED"
  }
]

export const useStore = create((set) => ({
  todoList: INITIAL_TODO_LIST,
  addTodo: (description, status = 'PENDING') => set((state) => {
    const maxId = state.todoList.reduce((max, item) => Math.max(max, item.id), -1);
    const newTodo = {
      id: maxId + 1,
      description,
      status,
    };
    return {
      todoList: [...state.todoList, newTodo]
    };
  }),
}));