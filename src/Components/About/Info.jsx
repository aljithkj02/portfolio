import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">

      <div className="about_box">
        <box-icon name='award' className="about_icon"></box-icon>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">2 Years working</span>
      </div>

      <div className="about_box">
        <box-icon name='briefcase-alt' className="about_icon"></box-icon>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">20+ Projects</span>
      </div>

      <div className="about_box">
        <box-icon name='support' className="about_icon"></box-icon>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>

    </div>
  )
}

export default Info
