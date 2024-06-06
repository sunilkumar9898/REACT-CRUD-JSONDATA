import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Mainrouter from './Mainrouter/Mainrouter';


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Navbar />
      <Mainrouter />
      </>
  );
}

export default App
