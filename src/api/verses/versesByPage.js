export const getVersesByPage = (page) => {
    return fetch(`http://localhost:3000/api/chapters/verses?page=${page}`,{
        method: 'GET',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
}
