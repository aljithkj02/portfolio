import React from 'react'
import fc1 from '../../Assets/fc1.png';
import './Project.css';

const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">works</span>

      <div className="project_container container">
        
        <div className="project_item">
          <div className="project_img-div">
            <img className src={fc1} alt="Project Img"/>
          </div>

          <div>
            <h3>Apple tv+ Clone</h3>
            <p>Apple tv clone is a clone of a Over The Top platform. Apple TV+ is streeming service from the Appple. It features execlusive apple Original Shows and movies from some of the industry talent, with new premiers arriving each month.</p>
            <p>Tech Stack <span>- React, Redux,mongodb,nodejs,expressjs</span></p>

            <div className="project_item-btndiv">
              <button>Github</button>
              <button>Demo <i className="bx bx-right-arrow-alt "></i></button>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            <img src={fc1} alt="Project Img"/>
          </div>

          <div>

            <h3>Apple tv+ Clone</h3>
            <p>Apple tv clone is a clone of a Over The Top platform. Apple TV+ is streeming service from the Appple. It features execlusive apple Original Shows and movies from some of the industry talent, with new premiers arriving each month.</p>
            <p>Tech Stack <span>- React, Redux,mongodb,nodejs,expressjs</span></p>

            <div className="project_item-btndiv">
              <button>Github</button>
              <button>Demo <i className="bx bx-right-arrow-alt contact_button-icon"></i></button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
