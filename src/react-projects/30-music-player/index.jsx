import { useEffect, useRef, useState } from "react";
import './music.css';

const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
    // Add more tracks as needed
];

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);

    const handlePauseAndPlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  
    const handleSkipTrack = (getDirection) => {
      if (getDirection === "forward") {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
      } else if (getDirection === "backward") {
        setCurrentTrack(
          (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
        );
      }
      setIsPlaying(false);
      setTrackProgress(0);
    }
  

    useEffect(() => {
      if (isPlaying) {
        const interval = setInterval(() => {
          setTrackProgress(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          );
        }, 1000);
  
        return () => clearInterval(interval);
      }
    }, [isPlaying]);

    console.log('audioRef.current.currentTime', audioRef?.current?.currentTime);
    console.log('audioRef.current.duration', audioRef?.current?.duration);

    return (
      <div className="music-player">
        <h1>Music Player</h1>
        <h2>{tracks[currentTrack].title}</h2>
        <img 
          src={tracks[currentTrack].image}
          alt={tracks[currentTrack].title}
        />
        <audio ref={audioRef} src={tracks[currentTrack].source} />
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ 
              width: `${trackProgress}%`, 
              background: isPlaying ? '#3498db' : '#a43636',
              height: '15px'
            }}
          >
          </div>
        </div>
        <div className="track-controls">
          <button onClick={() => handleSkipTrack('backward')}>Backward</button>
          <button onClick={handlePauseAndPlay}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={() => handleSkipTrack('forward')}>Forward</button>
        </div>
    </div>
    )
};

export default MusicPlayer;