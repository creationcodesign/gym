import React, { useState } from 'react'
import '../style/authorize.scss'

export default function Authorize() {
    const [isRegister, setIsRegister] = useState(false)

    const toggleOption = () => {
        setIsRegister(!isRegister)
    }

    return (
        <div className="authorize-container">
            <h2>authorization</h2>
            <div className="authorize-form">
                <div className="options">
                    <h3 onClick={toggleOption} className={!isRegister && "active"}>Sign Up</h3>
                    <h3 onClick={toggleOption} className={isRegister && "active"}>Login</h3>
                </div>
                {!isRegister ? (
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className='btn btn-send'>SIGNUP</button>
                    </form>
                ) : (
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className='btn btn-send'>LOGIN</button>
                    </form>
                )}
            </div>
        </div>
    )
}
