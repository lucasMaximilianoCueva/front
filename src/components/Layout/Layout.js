import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <div className="flex-shrink-0">
                {children}
            </div>   
        </div>
    )
}

export default Layout
