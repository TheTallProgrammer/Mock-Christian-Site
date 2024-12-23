import react, {useState, useEffect} from 'react'
import '../styles/RandomBibleVerses.css'

const RandomBibleVerses = () => {
    
    const [verse, setVerse] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchVerse = async () => {
        setLoading(true);
        const res = await fetch('https://labs.bible.org/api/?passage=random&type=json');
        const data = await res.json();
        setVerse(data[0]);
        setLoading(false);
    }

    // on initial mount call function to fetch the verse
    useEffect( () => {
        fetchVerse();
    }, []);

    return ( 
        <div className="verses-container">
             {loading ? (
                <p>Loading...</p>
             ) : (
                verse && (
                    <p>
                        <strong>
                            {verse.bookname} {verse.chapter}:{verse.verse}
                        </strong>{' '}
                        {verse.text}
                    </p>
                )
             )}
             <button onClick={fetchVerse}>New Verse</button>
        </div>
     );
}
 
export default RandomBibleVerses;