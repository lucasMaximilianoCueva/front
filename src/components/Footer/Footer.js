import React from 'react'

const Footer = () => {
    return (
        <footer className=" py-4 mt-auto"  style={{backgroundColor: '#CE7072'}}>
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">&copy; 2021 Get on Board</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!">Privacidad</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Terminos</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
