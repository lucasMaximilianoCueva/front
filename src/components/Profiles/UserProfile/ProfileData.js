import React, { useEffect, useState } from "react";

const ProfileData = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
      fetch("/api/getuser")
        .then((res) => res.json())
        .then((res) => setDataUser(res))
        .catch((err) => {
          console.log(`error: ${err}`);
        });
    }, []);
    

    return (
        <section className="py-5 bg-light" id="scroll-target" style={{backgroundColor: '#fff'}}>
            <h2 className='text-center bold mb-4'>Perfil</h2>
            <div className="container px-5">
                

                <div className='row'>
                    <div className='col-3'>
                          <p>Email: {dataUser.username}</p>
                          <p>Nombre: {dataUser.name}</p>
                          <p>Apellido {dataUser.lastname}</p>
                          <p>Género: {dataUser.gender}</p>
                          <p>Github: {dataUser.github}</p>
                          <p>Linkedin: {dataUser.linkedin}</p>
                          <p>Portfolio: {dataUser.portfolio}</p>
                    </div>
                    <div className='col-3'>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProfileData
