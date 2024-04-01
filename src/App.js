import { Link } from "react-router-dom"

function App() {

  return (
    <div className="App" style={{display:'flex', flexDirection: 'column', gap: '8px', padding: '20px'}}>
        <Link to="example-1">Example 1</Link>
        <Link to="example-2">Example 2</Link>
    </div>
  )
}

export default App 