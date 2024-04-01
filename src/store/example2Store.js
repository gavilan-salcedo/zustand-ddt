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
  secondState: null, // just add states here and functions should be defined the main store
}));

export const addTodo = (description, status = 'PENDING') => useStore.setState((state) => {
    const maxId = state.todoList.reduce((max, item) => Math.max(max, item.id), -1);
    const newTodo = {
      id: maxId + 1,
      description,
      status,
    };
    return {
      todoList: [...state.todoList, newTodo]
    };
  })