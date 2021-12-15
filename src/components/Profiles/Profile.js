import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ProfileHeader from './ProfileHeader'

import { useParams } from 'react-router-dom'

const Profile = ({children}) => {
    const {id} = useParams()

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="col-md-8 col-lg-9">
                        <div className="dashboard-area">
                            <ProfileHeader id={id} />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
