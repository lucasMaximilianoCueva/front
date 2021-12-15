import React, { useState, useEffect, useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { SearchContext } from '../../Context/SearchContext'
import { jobsData, jobsDataPerPage } from '../../data/getData'
import CardList from '../Cards/CardList'
import ListCard from '../Cards/ListCard'
const SearchResults = () => {
    const [loader, setLoader] = useState(false)
    const { filterData } = useContext(SearchContext)
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
             
                const totalPages = Math.ceil(totalItems/10);
              
                return totalPages
            })
            
    }
       

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
        if (filterData.length === 0) {
            totalPages()
            searchItems(page)
        } else {
            setValues(filterData)
            setLoader(false)
        }
       
    }, [page, filterData])

    return (
        <section className="py-5 bg-light searchResults" >
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

                            {/* <div className='row'>
                                <div className='col-3'>
                                    {
                                        (page !== 1) &&
                                            <button 
                                                className="btn btn-primary btn-lg px-4 me-sm-3 text-light" 
                                                onClick={handlePreviousPagination}>
                                                Anterior
                                            </button>
                                    }    
                                </div>
                                <div className='col-3'>
                                    {
                                        (page !== totalPages) &&
                                            <button 
                                                className="btn btn-primary btn-lg px-4 me-sm-3 text-light"
                                                onClick={handleNextPagination}
                                                >Siguiente
                                            </button>
                                    }
                                </div> 
                            </div>*/}
                        </div>
            }

        </section>
    )
}

export default SearchResults
