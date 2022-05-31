import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#ffffff] text-[#000000]'>
        <div>
            <img src={Logo} alt="" style={{width : '50px'}} />
        </div>
        {/*Menu*/}
        <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={500}>
                Expérience
            </Link>
            </li>
            <li>
            <Link to="travail" smooth={true} duration={500}>
                Projets
            </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>
        
        {/*Menu Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*Menu Mobile*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="home" smooth={true} duration={500}>
                Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>
                Expérience
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="travail" smooth={true} duration={500}>
                Projets
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>
                Contact
            </Link>
            </li>
        </ul>

        {/*Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#393f47]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/ArnoNoctua">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a onClick={() => {navigator.clipboard.writeText("arnaud.caouette8@gmail.com"); alert("Courriel copié dans votre presse-papiers");}} className='flex justify-between items-center w-full text-gray-300' href="arnaud.caouette8@gmail.com">
                        Courriel <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        CV <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
