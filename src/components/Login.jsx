import React from 'react'

const Login = (props) => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className='my-14'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-2xl'>
                        <span className='text-purple-800'>&lt;</span>
                        Pass<span className='text-purple-800'>K</span>eys<span className='text-purple-800'>/&gt;</span></h1>
                    <span className='font-semibold text-lg text-purple-900'>Login to continue </span>
                </div>
                <div className='w-1/2 mx-auto my-6 relative'>
                    <input className='w-full border-2 border-purple-600 outline-none px-4 py-1 rounded-xl' placeholder='Enter your Email' type="text" />
                    <input className='w-full border-2 mt-6 border-purple-600 outline-none px-4 py-1 rounded-xl' placeholder='Enter your Password' type={props.passType} />
                    <button className="absolute right-3 top-[70px]" onClick={props.togglePassword}><img ref={props.ref} src="icons/eye.svg" width="16px" alt="" /></button>
                    <button className='mx-auto my-6 py-2 px-4 bg-purple-600 hover:bg-purple-700 hover:font-bold rounded-full text-white font-semibold focus:ring-4 focus:ring-purple-300 flex items-center justify-center gap-3'>Login</button>
                </div></div>
    </div>
  )
}

export default Login
