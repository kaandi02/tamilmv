import React, { useState, useEffect } from 'react';
import axios from './axios.js';
import './Video.css';
import './Folders.css';

function Folders({title,fetchURL}) {
    const [Folders, setFolders] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setFolders(request.data.result.folders);
            console.log(Folders);
            return request;
        }
        fetchData();
        //eslint-disable-next-line
    }, [fetchURL]);
    return (
        <div className="folders">
            <div className="video__header">
                <h1 style={{color:"white"}}>{title}</h1>
            </div>
            <div className="video__con">
                {Folders.map((folder) => (
                    <>
                        <a href={`https://doodapi.com/api/folder/list?key=54537foxgdvl9j21pplnf&flid_id=${folder.fld_id}`}>
                            <h1>{folder.name}</h1>
                            </a>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Folders
