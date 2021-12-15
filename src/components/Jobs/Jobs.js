import React, { useContext, useEffect, useState } from 'react'

import Axios from "axios";
import { Badge } from 'react-bootstrap'
import CardJob from './CardJob';
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';

const Jobs = ({id, title, minSalary, maxSalary, remote, category, country, companyId}) => {
    const {authUser, dataUser, logOut} = useContext(UserContext);
    const [data, setData] = useState([]);

    const post = () => {
        Axios({
          method: "POST",
          data: {
            username: dataUser.username
          },
          withCredentials: true,
          url: "/api/job",
        }).then((res) => {
          setData(res.data.jobs)
        });
      };

      useEffect(() => {
        post();
      }, []);

      console.log(data)

    return (
        <>
      <ul className="grid">
        {data.map((item) => (
          <li key={item._id} className="column">
            <CardJob item={item} />
          </li>
        ))}
      </ul>
    </>
    )
}

export default Jobs