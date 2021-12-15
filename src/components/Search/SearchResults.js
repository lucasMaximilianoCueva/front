import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { jobsData, jobsDataPerPage } from '../../data/getData'
import CardList from '../Cards/CardList'
import ListCard from '../Cards/ListCard'
const SearchResults = () => {
    const [loader, setLoader] = useState(false)
    const [ page, setPage] = useState(1)
    const [values, setValues] = useState([{
        id:'',
        title: '',
        minSalary: '',
        maxSalary: '',
        remote: '',
        category: '',
        country: '',
        companyId:''
    }])

    //Cargar items
    const searchItems = (pageNumber) => {
        jobsDataPerPage(pageNumber)
            .then(res => {
                const newValues = res.data.map((job)=>{
                    return {
                        id: job.id,
                        title: job.attributes.title,
                        minSalary: job.attributes.min_salary,
                        maxSalary: job.attributes.max_salary,
                        remote: job.attributes.remote,
                        category: job.attributes.category_name,
                        country: job.attributes.country,
                        companyId:job.attributes.company.data.id,
                    };
                });
                console.log(newValues)
                return setValues(newValues);
            })
            .finally(()=>setLoader(false))
    }


    //Paginación
    const totalPages = async () =>{
        await jobsData()
            .then(res=>{
                const totalItems = res.data.length;
                //console.log(totalItems)
                const totalPages = Math.ceil(totalItems/10);
                //console.log(totalPages)
                return totalPages
            })
            
    }
        console.log(totalPages)

    const handlePreviousPagination = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNextPagination = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    }


    useEffect(()=>{
        setLoader(true)
        totalPages()
        searchItems(page)
    }, [page])

    return (
        <section className="py-5 bg-light" id="scroll-target" style={{backgroundColor: '#fff'}}>
            <h2 className='text-center bold mb-4'>Búsquedas Junior</h2>
            {
                loader 
                    ?   
                        <div className='container'>
                            <Spinner animation="border" role="status" className='d-flex justify-content-center align-items-center'>
                                <span className="visually-hidden">Cargando...</span>
                            </Spinner>
                        </div>
                    :
                        <div className="container px-5">
                            {
                                values && <CardList cardsData={values} CardComponent={ListCard}/>
                            }

                            <div className='row'>
                                <div className='col-3'>
                                    {
                                        (page !== 1) &&
                                            <button 
                                                className="btn btn-primary" 
                                                onClick={handlePreviousPagination}>
                                                Anterior
                                            </button>
                                    }    
                                </div>
                                <div className='col-3'>
                                    {
                                        (page !== totalPages) &&
                                            <button 
                                                className="btn btn-primary"
                                                onClick={handleNextPagination}
                                                >Siguiente
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
            }

        </section>
    )
}

export default SearchResults
