export const getList = () => {
    return fetch('http://localhost:3000/api/chapters',{
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}