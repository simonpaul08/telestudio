import React from 'react'
import TrafficSource from '../components/TrafficSource'
import Upload from "../assets/upload-image.png";
import { useNavigate } from 'react-router-dom';
import MovieTile from '../components/MovieTile';


const Content = () => {
    const navigate = useNavigate();

    const handleClickUpload = () => navigate("upload")
    return (
        <div className='dashboard-layout'>
            <div className="section-container">
                <div className="section-left">
                    <div className="section-left-header">
                        <h3>Content</h3>
                    </div>
                    <div className="section-left-content">
                        <MovieTile />
                    </div>
                </div>
                <div className="section-right">
                    <TrafficSource />
                    <div className='upload-btn' onClick={handleClickUpload}>
                        <img src={Upload} className='upload-image' />
                        <h3 className='upload-btn-text'>Upload</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content