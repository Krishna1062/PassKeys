import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/login'
import Manager from './components/Manager'
import Navbar from './components/navbar'
import Signup from './components/signup'
import './index.css'
import { useRef } from 'react'
import { useState } from 'react'



function App() {
  const ref = useRef();
  const[passType, setPassType] = useState('password')
  const togglePassword=()=>{
    if (ref.current.src.includes("icons/eye.svg")) {
      ref.current.src = "icons/eyecross.svg"
      setPassType('text')
    }
    else{
      ref.current.src = "icons/eye.svg"
      setPassType('password')
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Manager passType={passType} ref={ref} togglePassword={togglePassword} />}/>
        <Route path='/signup' element={<Signup passType={passType} ref={ref} togglePassword={togglePassword} />}/>
        <Route path='/login' element={<Login passType={passType} ref={ref} togglePassword={togglePassword} />}/>
      </Routes>
    </>
  )
}

export default App
