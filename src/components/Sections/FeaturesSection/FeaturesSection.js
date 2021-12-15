import React, { useEffect, useState } from 'react'
import { jobsForCategory, listOfCategories } from '../../../data/getData'
import { Pill } from './Pill'

const FeaturesSection = () => {
    const [categories, setCategories] = useState([{}])

    const categoriesList = () => {
        listOfCategories()
            .then((res)=>{
                const list = res.data.map((item) =>{
                    return {
                        title: item.attributes.name,
                        category: item.id
                    }
                })
                console.log(list)
                return list
            })
            .then(res=>setCategories(res))
    }
    
    useEffect(()=>{
        categoriesList()
    }, [])

    return (
        <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row justify-content-evenly"> 
                        <div className="col-12">
                            <h1 className="fw-bolder mb-4 text-center">Nuestras categorías más buscadas.</h1>
                        </div>
                        <div className="col-12 mt-4">
                            <div className="d-flex justify-content-center flex-wrap">
                                {
                                    categories &&
                                    categories.map((item, index)=>{
                                        return (
                                            <div className="mb-4" key={index}>
                                                <Pill {...item}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div> 
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
