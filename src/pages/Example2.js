
import { useState } from 'react'
import { Typography, Input, Select, Flex, Checkbox, Button } from 'antd';
import { useStore, addTodo } from '../store/example2Store';

function Example2() {

    const { Title } = Typography;
    const [inputValue, setInputValue] = useState();
    const todoList = useStore((state) => state.todoList);

    function handleSubmit(event){
        event.preventDefault();
        addTodo(inputValue); // add the todo to the array
        setInputValue(''); // clears the input field
    }

  return (
    <div className="App" style={{padding: '20px', display: 'flex',flexDirection: 'column', gap: '20px'}}>
        <Title>TODO LIST</Title>
        <Flex gap={8}>
            <Input placeholder="Add Todo" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
            <Button onClick={handleSubmit}>Submit</Button>
            <Select
                defaultValue="All"
                style={{ width: 120 }}
                options={[
                { value: 'completed', label: 'Completed' },
                { value: 'todo', label: 'To Do' },
                ]}
            />
        </Flex>
        <Flex vertical>
            {todoList.map((todo) =>  <Checkbox>{todo.description}</Checkbox>)}
        </Flex>
  </div>
  )
}

export default Example2