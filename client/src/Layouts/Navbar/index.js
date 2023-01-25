import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
function Navbar() {
    return (
        <>
            <div className='nav_main'>
                <div className='nav'>
                    <div className='studio'>
                        <ul>
                            <li>
                                <Link className='wro' to={"/"}><button className='stu'>Studio</button></Link>
                            </li>
                        </ul>

                    </div>
                    <div className='links'>
                        <ul className='ul'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='#Services'>Services</a></li>
                            <li><a href='#Portfolio'>Portfolio</a></li>
                            <li><a href='#About'>About</a></li>
                            <li><a href='#Team'>Team</a></li>
                            <li><a href='#Contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar