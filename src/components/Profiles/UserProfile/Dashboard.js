import React from 'react'
import CardList from '../../Cards/CardList'
import PillCard from '../../Cards/PillCard'
import { MdQuiz } from 'react-icons/md'
import { RiFileCopy2Fill } from 'react-icons/ri'
import { MdOutlineWork } from 'react-icons/md'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
    const {id} = useParams()

    const pills = [
        {
            link: 'quizzes',
            icon: <MdQuiz/>,
            title: 'Quizzes',
            quantity: 2,
            id: id
        },
        {
            link: 'postulaciones',
            icon: <RiFileCopy2Fill/>,
            title: 'Postulaciones',
            quantity: 0,
            id: id
        },
        {
            link: 'guardado',
            icon: <MdOutlineWork/>,
            title: 'Empleos guardados',
            quantity: 3,
            id: id
        }
    ]

    return (
        <div className="row">
            <div className="col-12">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row">
                            <CardList cardsData={pills} CardComponent={PillCard} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
