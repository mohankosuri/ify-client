// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Videocomponent = () => {
  const [url, setUrl] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url) {
      await axios.post('http://localhost:5000/api/videos', { url });
      setUrl('');
      fetchVideos();
    }
  };

  const fetchVideos = async () => {
    const response = await axios.get('http://localhost:5000/api/videos');
    setVideos(response.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const getEmbedUrl = (url) => {
    let embedUrl = '';
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1] || url.split('/').pop();
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (url.includes('instagram.com')) {
      const postId = url.split('/p/')[1].split('/')[0];
      embedUrl = `https://www.instagram.com/p/${postId}/embed`;
    } else if (url.includes('facebook.com')) {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}`;
    }
    return embedUrl;
  };

  const getDownloadUrl = (url) => {
    let videoId = '';
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      videoId = url.split('v=')[1] || url.split('/').pop();
    } else if (url.includes('instagram.com')) {
      videoId = url.split('/p/')[1].split('/')[0];
    } else if (url.includes('facebook.com')) {
      videoId = encodeURIComponent(url);
    }
    return `http://localhost:5000/api/videos/download/${videoId}`;
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 mr-2 w-[500px] outline-none"
          placeholder="Enter video URL"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <div key={index}className="flex" >
            <iframe
              width="560"
              height="315"
              src={getEmbedUrl(video.url)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Videocomponent;
