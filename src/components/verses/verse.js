import './verses.css'
import Word from './word';

const Verse = ({verse}) => {
    const HtmlRenderer = ({ htmlString }) => {
        return (
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        );
    };
    return (
        <div className='verse-container'>
            <div className='wbw-order-container'>
                <p className='order'>{verse.verse_number}</p>
                <div className='wbw-container'>
                    {verse.words.length && verse.words.map((word)=><Word key={word.id} word={word}/>)}
                </div>
            </div>
            <div className="translation-text">
                <HtmlRenderer htmlString={verse.translations[0].text} />
            </div>
        </div>
  )
}

export default Verse