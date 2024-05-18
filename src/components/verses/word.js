import './word.css'

const Word = ({word}) => {
  return (
    <div className="word-container">
        <p className='arabic-word'>{word.text_uthmani}</p>
        <p className='simple-word'>{word.transliteration.text}</p>
        <p className='simple-word'>{word.translation.text}</p>
    </div>
  )
}

export default Word