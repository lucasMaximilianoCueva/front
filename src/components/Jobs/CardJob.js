import React, { useContext, useEffect } from 'react'

import Axios from "axios";
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';

const CardJob = ({ item: { id } }) => {
    const {authUser, dataUser, logOut} = useContext(UserContext);

    return (
        <div className="container listCard mb-4">
            <ul className="list-group">
                <li className="list-group-item">
                    <h3 className="list-group-item-heading bold">
                        {id}
                        {/* <span className="label label-danger pull-right">NEW !</span> */}
                    </h3>
                    <div>
                        <Badge pill bg="primary" className='listBadge'>
                            {"dataUser.lastname"}
                        </Badge>{' '}
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