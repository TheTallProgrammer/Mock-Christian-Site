import './App.css';
import crossesImage from './assets/crosses.png';
import RandomBibleVerses from './components/RandomBibleVerses';

function App() {
  return (
    <div className="App">
      <div className="background-wrapper">
        <video
          src={
            'https://res.cloudinary.com/dfbqfdbxw/video/upload/v1734923172/4933875-uhd_4096_2160_30fps_qquhnf.mp4'
          }
          autoPlay
          loop
          muted
        />
      </div>
      <RandomBibleVerses />
      <div className='image-container'>
        <img src={crossesImage} alt="Crosses" />
      </div>
    </div>
  );
}

export default App;