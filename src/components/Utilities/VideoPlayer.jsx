"use client"
import React, { useState } from 'react'
import YouTube from 'react-youtube'

function VideoPlayer({ youtubeId }) {

  const [isOpen, setIsOpen] = useState(true)

  const handelVideoPlayer = () => {
    setIsOpen((prevState)=> !prevState)
  }
    const option ={
        width: "300",
        height:"250"
    }

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-2 right-2">
          <button
            className="text-color-primary float-right bg-color-secondary px-3 mb-1"
            onClick={handelVideoPlayer}
          >
            X
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={option}
            onError={() => alert("Video Belum bisa di jalankan")}
          />
        </div>
      ) : (
        <button
          className="rounded bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl fixed bottom-5 right-5 w-32"
          onClick={handelVideoPlayer}
        >
          Tonton Traler
        </button>
      )}
    </>
  );
}

export default VideoPlayer