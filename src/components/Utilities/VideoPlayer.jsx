"use client"
import React from 'react'
import YouTube from 'react-youtube'
import { X } from '@phosphor-icons/react'

function VideoPlayer({ youtubeId }) {
    const option ={
        width: "300",
        height:"250"
    }
  return (
    <div className="fixed bottom-0 right-0">
      <button>
        <X size={32} />
      </button>
      <YouTube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
}

export default VideoPlayer