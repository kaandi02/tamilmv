import React, { useState, useEffect } from 'react';
import axios from './axios.js';
import './Video.css';

function Video({ title,fetchURL }) {
    const [Videos, setVideos] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setVideos(request.data.result.files);
            console.log(Videos);
            return request;
        }
        fetchData();
        //eslint-disable-next-line
    }, [fetchURL]);
    function truncate(str, n) {
        return str?.length > n ? str.substr(0,n-1)+'...': str;
    }
    return (
        <div className="video">
            <div className="video__header">
                <h1>{title}</h1> 
            </div>
            <div className="video__con">
                {Videos.map((video,key) => (
                    <div className="video__conmain">
                        <div className="video__title">
                            <h4>{truncate(video.title,40)}</h4>
                        </div>
                        <div className="video_main">
                            <a href={video.download_url} rel="noreferrer" target="_blank"><img className="thumbnail_img" key={video.file_code}
                            src={video.single_img}
                            alt={video.title} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Video
