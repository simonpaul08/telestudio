import React, { useRef } from 'react';
import upload from "../assets/upload-black.png";

const Upload = () => {

  const thumbnailRef = useRef(null)
  const handleOpenThumbnail = () => {
    thumbnailRef.current.click()
  }
  return (
    <div className='upload-layout'>
      <div className="upload-section">
        <div className="upload-section-header">
          <img src={upload} alt="upload image" />
          <h3>Upload</h3>
        </div>
        <form className='upload-form'>
          <div className="upload-form-grid">
            <div className="upload-form-item">
              <label htmlFor="thumbnail">Thumbnail</label>
              <input type="file" className='upload-form-thumbnail' name='thumbnail' id='thumbnail' ref={thumbnailRef}/>
              <div className='upload-form-btn' onClick={handleOpenThumbnail}>
                <p>Upload Thumbnail</p>
              </div>
            </div>
            <div className="upload-form-item">
              <label htmlFor="language">Language</label>
              <input type="text" className='upload-form-language form-input' name='language' id='language' placeholder='video language' />
            </div>
          </div>
          <div className="upload-form-item">
            <label htmlFor="title">Title</label>
            <input type="text" className='upload-form-title form-input' name='title' id='title' placeholder='Enter title' />
          </div>
          <div className="upload-form-item">
            <label htmlFor="link">Input Link</label>
            <input type="text" className='upload-form-link form-input' name='link' id='link' placeholder='Enter link' />
          </div>
          <div className="upload-form-item">
            <button className='submit-btn'>Upload</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload