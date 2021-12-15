import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom'
import {images} from '../../assets/images'
import { UserContext } from '../../Context/UserContext';
import { companyData, jobsData } from '../../data/getData';

const ProfileHeader = ({id}) => {
    const {dataUser} = useContext(UserContext)
    const [loader, setLoader] = useState(false)
    const [user, setUser] = useState(true)
    const [ values, setValues ] = useState({
        name: '',
        description: '',
        gender: ''
    });
    const location = useLocation();

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
            logo: company.data.attributes.logo
        })
        setLoader(false)
        return company
    }


    useEffect(()=>{
        if (location.pathname.includes('dashboard')) {
            setValues({
                name: dataUser.name,
                description: dataUser.portfolio,
                gender: dataUser.gender
            })
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
                                        {/* {
                                            user && <button className="position-absolute btn ml-3 mt-3 text-white">Editar</button>
                                        } */}
                                        <div className="col-12 ml-auto m-auto">
                                            <div className="p-3 my-4 rounded text-center shadow-sm">

                                                <Link exact to={`/dashboard/${id}`}>
                                                    <img 
                                                        src={
                                                            user 
                                                            ? values && 
                                                                (values.gender === 'masculino' 
                                                                    ? images.avatar1
                                                                    : images.avatar5)
                                                            : values && values.logo
                                                        } 
                                                        alt='avatar' 
                                                        className="profile__avatarImage rounded-circle img-fluid mb-2" 
                                                        data-toggle="tooltip" 
                                                        data-placement="bottom" title="" 
                                                        data-original-title="avatar images" 
                                                    />
                                                </Link>

                                                <div>
                                                    <h3 className="title text-light">{values && values.name}</h3>
                                                    <p className="normal text-light">{values && values.description}</p>
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
