import './App.css';


function App() {
  const main = [
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key01.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key03.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key05.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key07.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key08.mp3',
    'https://ia600106.us.archive.org/13/items/24-piano-keys/key10.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key12.mp3',
  ]
  const b = [
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key02.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key04.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key06.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key09.mp3',
    'https://ia800106.us.archive.org/13/items/24-piano-keys/key11.mp3',
  ]

  const playAudio = url => {
    const audio = new Audio(url);
    audio.play();
  }

  window.onkeypress = e => {
    // console.log(e.keyCode)
    // pretty weak logic, but meh, who cares
    playAudio(main[e.keyCode-49])
  }

  return (
    <div>
      <ul className="set">
        <li className="white b" onClick={() => playAudio(main[0])}></li>
        <li className="black as" onClick={() => playAudio(b[0])}></li>
        <li className="white a" onClick={() => playAudio(main[1])}></li>
        <li className="black gs" onClick={() => playAudio(b[1])}></li>
        <li className="white g" onClick={() => playAudio(main[2])}></li>
        <li className="black fs" onClick={() => playAudio(b[2])}></li>
        <li className="white f" onClick={() => playAudio(main[3])}></li>
        <li className="white e" onClick={() => playAudio(main[4])}></li>
        <li className="black ds" onClick={() => playAudio(b[3])}></li>
        <li className="white d" onClick={() => playAudio(main[5])}></li>
        <li className="black cs" onClick={() => playAudio(b[4])}></li>
        <li className="white c" onClick={() => playAudio(main[6])}></li>
      </ul>
    </div>
  );
}

export default App;
