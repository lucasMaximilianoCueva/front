import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { companyData, jobsData } from '../../data/getData';

import { Spinner } from 'react-bootstrap';
import {images} from '../../assets/images'

const ProfileHeader = ({id}) => {
    const [loader, setLoader] = useState(false)
    const [user, setUser] = useState(true)
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
      fetch("/api/getuser")
        .then((res) => res.json())
        .then((res) => setDataUser(res))
        .catch((err) => {
          console.log(`error: ${err}`);
        });
    }, []);
    
    const [ values, setValues ] = useState({
        name: '',
        description: '',
        avatar: ''
    });
    const location = useLocation();

    const userData = {
        name: dataUser.name,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
        avatar: 'avatar3'
    }

    const getJobs = async () => {
        const data = await jobsData()
        const jobData = data.data.find((item =>item.id === id))
        const companyId = jobData.attributes.company.data.id
        console.log('getJobs', companyId)
        return companyId.toString()
    }

    const getCompany = async () => {
        const companyId = await getJobs()
        console.log('getCompany', companyId)
        const company = await companyData(companyId)
        console.log(company)
        setValues({
            name: company.data.attributes.name,
            description: company.data.attributes.description,
            avatar: company.data.attributes.logo
        })
        setLoader(false)
        return company
    }


    useEffect(()=>{
        if (location.pathname.includes('dashboard')) {
            setValues(userData)
        }
        if (location.pathname.includes('jobs')) {
            setLoader(true)
            setUser(false)
            getCompany()
        }

    }, [location])

    return (
        <div className="row">
            <div className="col-12">
                {
                    loader 
                        ? 
                            <div className='container'>
                                <Spinner animation="border" role="status" className='d-flex justify-content-center align-items-center'>
                                    <span className="visually-hidden">Cargando...</span>
                                </Spinner>
                            </div>
                        :
                            <div className="mb-3 profile">
                                <div className="row">
                                    <div className="col-12">

                                        {/* <button className="position-absolute btn ml-3 mt-3 text-white">Editar</button> */}
                                        
                                        <div className="col-12 ml-auto m-auto">
                                            <div className="p-3 my-4 rounded text-center shadow-sm">

                                                <Link exact to={`/dashboard/${id}`}>
                                                    <img 
                                                        src={
                                                            user 
                                                            ? values && images[values.avatar]
                                                            : values && values.avatar
                                                        } 
                                                        alt='avatar' 
                                                        className="profile__avatarImage rounded-circle img-fluid mb-2" 
                                                        data-toggle="tooltip" 
                                                        data-placement="bottom" title="" 
                                                        data-original-title="avatar images" 
                                                    />
                                                </Link>

                                                <div>
                                                    <h3 className="title text-light">{dataUser.name}</h3>
                                                    <p className="normal text-light">{dataUser.knowledgeareas}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                }
            </div>
        </div>
    )
}

export default ProfileHeader
