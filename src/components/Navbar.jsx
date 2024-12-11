import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    {/* <div class="absolute top-0 z-[-2] h-3 w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
      <header className='transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] p-4'>
        <nav className="flex lg:justify-around justify-between items-center">
          <div className='flex justify-center items-center gap-10'>
        <h1 className='font-bold text-2xl'>
          <Link to='/'><span className='text-purple-800'>&lt;</span>
          Pass<span className='text-purple-800'>K</span>eys<span className='text-purple-800'>/&gt;</span></Link></h1>
          <Link className='font-bold text-purple-700 lg:block hidden' to="/">Home</Link>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <Link to="/signup"><button className='py-2 px-4 bg-purple-600 hover:bg-purple-700 hover:font-bold rounded-lg text-white font-semibold focus:ring-4 focus:ring-purple-300'>Signup</button></Link>
            <Link to="/login"><button className='py-2 px-4 bg-purple-600 hover:bg-purple-700 hover:font-bold rounded-lg text-white font-semibold focus:ring-4 focus:ring-purple-300'>Login</button></Link>
          </div>
          </nav>
      </header>
    </>
  )
}

export default Navbar
