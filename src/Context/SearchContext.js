import React, { createContext, useEffect, useState } from 'react'
import { jobsForCategory } from '../data/getData';


export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [ search, setSearch ] = useState('');
    const [filterData, setFilterData] = useState('')
    
    const searchItems = (category) => {
        jobsForCategory(category)
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
                setFilterData(newValues)
            })
            
    }
   

    useEffect (()=> {
       searchItems(search)
    }, [search])



    return (
        <SearchContext.Provider value={{
            search,
            setSearch, 
            searchItems,
            filterData
        }}>
            {children}
        </SearchContext.Provider>
    )
}