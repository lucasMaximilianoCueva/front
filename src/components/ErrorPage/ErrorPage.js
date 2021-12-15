import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import errorAnimation from './errorAnimation.json'

const ErrorPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorAnimation
    }

    return (
        <div className="container">
            <div className="error">

                <h2>Lo sentimos... parece que esta página no existe</h2>
                <Lottie options={defaultOptions} />

                <Link to="/" >
                    <button 
                        className='btn btn-primary btn-lg px-4 me-sm-3 text-light'
                    >
                            Volver al inicio
                    </button>
                </Link>
                
            </div>
        </div>
    ) 
}

export default ErrorPage
