import React, { useContext } from 'react'
import { SearchContext } from '../../../Context/SearchContext';


export const Pill = ({ title, category }) => {
    const { setSearch } = useContext(SearchContext);

    const handleSearch = () => {
        setSearch(category)
        console.log(category)
    }

    return (
        <div className="pastilla" onClick={handleSearch}>
            {title}
        </div>
    )
}
