
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradiant_text'>SP</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Home
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        
        <NavLink to='https://drive.google.com/file/d/1TVbr6pOusVC1ge4gBqPqDaYJWH7Yja9B/view?usp=sharing' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Resume
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
