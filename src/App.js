import './App.css';
import { Typography, Input, Select, Flex, Checkbox } from 'antd';

function App() {

  const { Title } = Typography;

  return (
    <div className="App" style={{padding: '20px', display: 'flex',flexDirection: 'column', gap: '20px'}}>
      <Title>TODO LIST</Title>
      <Flex gap={8}>
        <Input placeholder="Add Todo" />
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
        <Checkbox>Checkbox</Checkbox>
      </Flex>
    </div>
  );
}

export default App;
