// import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'
import MeccanIcon from '../../assets/chapters/Makiyyah.png'
import BookIcon from '../../assets/chapters/Book.png'

const Card = ({chapter}) => {
    const navigate = useNavigate()
  return (
    <div className='card' onClick={()=>{navigate('/chapters/verses', { replace: false, state: { chapter } });}}>
        <p className='order'>{chapter.id}</p>
        <div className='info-container'>
            <div className='title-row'>
                <p className='title-simple'>{chapter.name_simple}</p>
                <p className='title-arabic'>{chapter.name_arabic}</p>
            </div>
            <div className='details-row'>
                <div className='details'>   
                    <img src={MeccanIcon} alt="Icon" width="15" height="15"/>
                    <p className='details-text'>{chapter.revelation_place === 'makkah' ? 'MECCAN' : 'MEDINAN'}</p>
                </div>
                <div className='dot'/>
                <div className='details'>
                    <img src={BookIcon} alt="Icon" width="15" height="15"/>
                    <p className='details-text'>{chapter.verses_count} VERSES</p>
                </div>    
            </div>    
        </div>
    </div>
  )
}

export default Card