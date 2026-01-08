const VideoPresentation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <iframe
        width="360"
        height="640"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Weighing Service Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default VideoPresentation
