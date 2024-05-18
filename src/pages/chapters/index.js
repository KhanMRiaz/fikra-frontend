import { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import './index.css'
import { getList } from '../../api/chapters/getList'
import { getAccessToken } from '../../api/auth/getAccessToken'
import Card from '../../components/chapters/card'
import BottomNav from '../../components/chapters/bottomNav'

const Chapters = () => {
  const [chapters, setChapters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    getAccessTokenCaller()
  },[])

  const getAccessTokenCaller = async() =>{
    let res = await getAccessToken()
    res = await res.json()
    localStorage.setItem('token',res.token)
    getListCaller()
  }

  const getListCaller = async() =>{
    let res = await getList()
    res = await res.json()
    setChapters(res)
    setIsLoading(false)
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='back-icon'/>
        <div className='top-heading-container'>
          QURAN
        </div>
        <div className='grid-icon'/>
      </div>
      <div className='chapter-background'>
        <p className='heading'>Let's begin the journey towards<br/>Enlightenment</p>
        <div className='chapter-top-right'/>
        <div className='chapter-quran'/>
        <div className='bottom-left'/>
      </div>
      <p className='surah'>SURAH</p>
      {/* list */}
      {isLoading ? 
        <Audio height="120" width="120" radius="9" color='#61B198' ariaLabel="loading" wrapperStyle wrapperClass/> : 
        <div className='list-container'>
        {chapters.length && chapters.map((chapter)=><Card key={chapter.id} chapter={chapter}/>)}
        </div>
      }
      <BottomNav/>
    </div>
  )
}

export default Chapters