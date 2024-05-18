import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Audio } from 'react-loader-spinner'
import { getVersesByPage } from '../../api/verses/versesByPage'
import Verse from '../../components/verses/verse'
import './index.css'

const Verses = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {name_arabic, name_simple} = location.state.chapter
  const translated_name = location.state.chapter.translated_name.name
  const [firstPage, setFirstPage] = useState(null)
  const [lastPage, setLastPage] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)
  const [verses, setVerses] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
    setFirstPage(location.state.chapter.pages[0])
    setLastPage(location.state.chapter.pages[1])
    setCurrentPage(location.state.chapter.pages[0])
  },[])

  useEffect(()=>{
    if(currentPage){
      getVersesByPageCaller()
    }
  },[currentPage])

  const getVersesByPageCaller = async() =>{
    try{
      let res = await getVersesByPage(currentPage)
      res = await res.json()
      setVerses(res)
      window.scrollTo(0, 0)
      setIsLoading(false)
    }
    catch(e){
      console.warn(e)
      setIsLoading(false)
    }
  }

  const handleNext = () => {
    setCurrentPage(currentPage+1)
  }
  const handlePrev = () => {
    setCurrentPage(currentPage-1)
  }
  
  return (
    <div className='container'>
      <div className='header'>
        <div className='back-icon' onClick={()=>{navigate('/chapters', { replace: true })}}/>
        <div className='top-heading-container'>
          <div className='top-heading-surah'>
            SURAH {name_simple}
          </div>
          <div className='top-heading-details'>
            Page{' '}{verses[0]?.page_number}{', '}{'Para'}{' '}{verses[0]?.juz_number}
          </div>
        </div>
        <div className='grid-icon'/>
      </div>
      <div className='background'>
        <div>
          <p className='arabic-heading'>{name_arabic}</p>
          <p className='simple-heading'>{name_simple}<span className='translated-heading'>{' '} ({translated_name})</span></p>
          {/* mobile */}
          <p className='simple-heading-mobile'>{name_simple}</p>
          <p className='translated-heading-mobile'>{' '} {translated_name}</p>
        </div>
        <div className='top-right'/>
        <div className='quran'/>
      </div>
      {/* list */}
      {isLoading ? <Audio height="120" width="120" radius="9" color='#61B198' ariaLabel="loading" wrapperStyle wrapperClass/>
      : <>
          <div className='verse-list-container'>
            {verses.length && verses.map((verse)=><Verse key={verse.id} verse={verse}/>)} 
          </div>
          <div className='buttons-container'>
            <button 
              onClick={handleNext} 
              className={currentPage === lastPage ? 'button-disabled' : 'button'} 
              disabled={currentPage === lastPage}>Next</button>
            <button 
              onClick={handlePrev} 
              className={currentPage === firstPage ? 'button-disabled' : 'button'} 
              disabled={currentPage === firstPage}>Prev</button>
          </div>
        </>
      }
    </div>
  )
}
  
export default Verses