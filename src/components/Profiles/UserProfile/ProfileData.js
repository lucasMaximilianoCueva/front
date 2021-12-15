import React, { useContext } from 'react'
import { UserContext } from '../../../Context/UserContext';

const ProfileData = () => {
    const {dataUser} = useContext(UserContext);

    return (
        <section className="py-5">
            <h2 className='text-center bold mb-4'>Tus datos</h2>
            <div className="container px-5 profileData" >
                <div className='row'>
                    <div className='col-12'>
                        <ul className='py-4'>
                            <li className='bold'>Nombre completo: <span>{dataUser.name} {dataUser.lastname}</span></li>
                            <li className='bold'>Email: <span>{dataUser.username}</span></li>
                            <li className='bold'>Github: <span>{dataUser.github}</span></li>
                            <li className='bold'>Linkedin: <span>{dataUser.linkedin}</span></li>
                            <li className='bold'>Portfolio: <span>{dataUser.portfolio}</span></li>
                            <li className='bold'>Genero: <span>{dataUser.gender}</span></li>
                            <li className='bold'>Área de conocimiento: <span>{dataUser.knowledgeareas}</span></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProfileData
