import React, { useContext, useEffect, useState } from 'react'

import Axios from "axios";
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
import { jobsData } from '../../data/getData';

const CardJob = ({ item: { id } }) => {
    const {authUser, dataUser, logOut} = useContext(UserContext);

    const [ values, setValues ] = useState({
        title: '',
        descriptionHeadline: '',
        description: '',
        projects: '',
        functionsHeadline: '',
        functions: '',
        benefitsHeadline: '',
        benefits: '',
        desirableHeadline: '',
        desirable: '',
        remote: '',
        category: '',
        country: '' 
    });

    const getJobs = async () => {
        const data = await jobsData()
        const jobData = data.data.find((item =>item.id === id))
       
        console.log(jobData)
        setValues({
            title: jobData.attributes.title,
            descriptionHeadline: jobData.attributes.description_headline,
            description: (jobData.attributes.description).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            projects: (jobData.attributes.projects.replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, "")),
            functionsHeadline: jobData.attributes.functions_headline,
            functions: (jobData.attributes.functions).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            benefitsHeadline: jobData.attributes.benefits_headline,
            benefits: (jobData.attributes.benefits).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            desirableHeadline: jobData.attributes.desirable_headline,
            desirable: (jobData.attributes.desirable).replace(/<\/?[^>]+(>|$)|(&nbsp;)/g, ""),
            remote: jobData.attributes.remote,
            category: jobData.attributes.category_name,
            country: jobData.attributes.country
        })
        
    }

    useEffect(()=>{        
        getJobs()
    }, [])

    return (
        <div className="container listCard mb-4">
            <ul className="list-group">
                <li className="list-group-item">
                    <h3 className="list-group-item-heading bold">
                        {values.title}
                        {/* <span className="label label-danger pull-right">NEW !</span> */}
                    </h3>
                    <div>
                        <Badge pill bg="primary" className='listBadge'>
                            {"Postulado"}
                        </Badge>
                        <Badge pill bg="info" className='listBadge'>
                            {values.category}
                        </Badge>
                        <Badge pill bg="success" className='listBadge'>
                            {values.country}
                        </Badge>
                    </div>
            
                    <div className="btn-group mt-4">
                        Salario: 
                        <span>0 -</span>
                        <span> 10</span>                        
                    </div>

                    <div className="btn-toolbar pull-right" role="toolbar" aria-label="">
                        <Link exact to={`/jobs/${id}`}>
                            <button className="btn btn-primary btn-lg px-4 me-sm-3 text-light">VER MAS</button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default CardJob