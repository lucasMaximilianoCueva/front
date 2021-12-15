import axios from 'axios'

export const jobsData = async () => {
    const res = await axios.get('https://www.getonbrd.com/api/v0/search/jobs?query=%22Sin%20experiencia%22')
    return res.data
}

export const companyData = async (id) => {
    const res = await axios.get(`https://www.getonbrd.com/api/v0/companies/${id}`)
    return res.data
}

export const jobsDataPerPage = async (page) => {
    const res = await axios.get(`https://www.getonbrd.com/api/v0/search/jobs?query=%22Sin%20experiencia%22&per_page=10&page=${page}`)
    return res.data
}

export const listOfCategories = async () => {
    const res = await axios.get(`https://www.getonbrd.com/api/v0/categories?per_page=20&page=1`)
    
    return res.data
}
export const jobsForCategory = async (category) => {
    const res = await axios.get(`https://www.getonbrd.com/api/v0/categories/${category}/jobs?per_page=10&page=1`)
    return res.data
}

