import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = (props) => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem('password');
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const savePassword = () => {
    
     setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
     localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
     console.log(passwordArray)
     toast('Password has been saved', {
       containerId: "containerB",
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
      });
    
  }
  const deletePassword = (id) => {
    // console.log(`deletomg password with id ${id}`)

    setPasswordArray(passwordArray.filter(item => item.id !== id))
    localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    toast('Password has been deleted', {
      containerId: "delete",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // console.log(passwordArray)
  }
  const editPassword = (id) => {
    console.log(`editing password with id ${id}`)
    setForm(passwordArray.filter(item => item.id === id)[0]);
    setPasswordArray(passwordArray.filter(item => item.id !== id))

  }
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
  }

  const copyText = (text) => {
    toast('Copied to clipboard!', {
      containerId: "containerA",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text)
  }


  return (
    <>
      <ToastContainer
        containerId="containerA"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        containerId="containerB"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        containerId="delete"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <ToastContainer
        containerId="edit"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <ToastContainer
        containerId="notSaved"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className='pt-14 '>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold text-2xl'>
            <span className='text-purple-800'>&lt;</span>
            Pass<span className='text-purple-800'>K</span>eys<span className='text-purple-800'>/&gt;</span></h1>
          <span className='font-semibold text-purple-900'>Your own Password Manager</span>
        </div>
        <div className='lg:w-1/2 w-11/12 mx-auto my-6'>
          <input minLength='3' value={form.site} onChange={handleChange} name='site' className='w-full border-2 border-purple-600 outline-none text-sm px-4 py-1 rounded-xl' placeholder='Enter the URL of the Website' type="text" />
          <div className='flex flex-col lg:flex-row items-center justify-center gap-6 my-6 relative'>
            <input minLength='3' value={form.username} onChange={handleChange} name='username' className="lg:w-2/3 w-full border-2 border-purple-600 outline-none text-sm px-4 py-1 rounded-xl" placeholder='Enter Username' type="text" />
            <input minLength='3' value={form.password} onChange={handleChange} name='password' className="w-full lg:w-1/3 border-2 border-purple-600 outline-none text-sm px-4 py-1 rounded-xl" placeholder='Enter Password' type={props.passType} />
            <button className="absolute right-3 top-[63px] lg:top-[9px]" onClick={props.togglePassword}><img ref={props.ref} src="icons/eye.svg" width="16px" alt="" /></button>
          </div>
          <button onClick={savePassword} className='mx-auto py-2 px-3 text-sm bg-purple-600 hover:bg-purple-700 hover:font-bold rounded-full text-white font-semibold focus:ring-4 focus:ring-purple-300 flex items-center justify-center gap-3'><lord-icon
            src="https://cdn.lordicon.com/mfdeeuho.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#f4b69c,secondary:#66d7ee"
          >
          </lord-icon>Save Password</button>
        </div>
        <div className='lg:w-1/2 w-11/12 mx-auto'>
          <h2 className='text-2xl font-semibold my-3'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to Show</div>}
          {passwordArray.length != 0 &&
            <div className='max-h-64 overflow-auto'>
              <table className='table-auto min-w-96 lg:min-w[60vw] w-full rounded-xl overflow-hidden'>
                <thead className='bg-purple-800 text-white'>
                  <tr>
                    <th className='py-2'>Website</th>
                    <th className='py-2'>Username</th>
                    <th className='py-2'>Password</th>
                    <th className='py-2 min-w-32'>Actions</th>
                  </tr>
                </thead>
                <tbody className='bg-purple-200'>
                  {passwordArray.map((item, index) => {
                    return <tr key={index}>
                      <td className='text-center py-1 border-white border'>
                        <div className="flex justify-center items-center flex-wrap gap-3">
                          <span>{item.site}</span><button onClick={() => { copyText(item.site) }}><img src="icons/copy.svg" width="12" alt="" /></button></div></td>
                      <td className='text-center py-1 border-white border'>
                        <div className="flex justify-center items-center flex-wrap gap-3">
                          <span>{item.username}</span><button onClick={() => { copyText(item.username) }}><img src="icons/copy.svg" width="12" alt="" /></button></div>
                      </td>
                      <td className='text-center py-1 border-white border'>
                        <div className="flex justify-center items-center flex-wrap gap-3">
                          <span>{item.password}</span><button onClick={() => { copyText(item.password) }}><img src="icons/copy.svg" width="12" alt="" /></button></div>
                      </td>
                      <td className='text-center py-1 border-white border'>
                        <div className="flex justify-center items-center gap-4">
                          <img onClick={() => { editPassword(item.id) }} className='cursor-pointer' src="icons/edit.svg" width='12px' alt="" />
                          <img onClick={() => { deletePassword(item.id) }} className='cursor-pointer' src="icons/delete.svg" width='12px' alt="" />
                        </div>
                      </td>
                    </tr>
                  })}

                </tbody>
              </table></div>}
        </div>
      </div>
    </>
  )
}

export default Manager
