import React from 'react';
import Image3 from './Image3.jsx';
import Image4 from './Image4.jsx';

import px1 from '../../Assets/px1.png';
import px2 from '../../Assets/px2.png';
import px3 from '../../Assets/px3.png';
import px4 from '../../Assets/px4.png';
import px5 from '../../Assets/px5.png';
import px6 from '../../Assets/px6.png';
import vi1 from '../../Assets/vi1.png';
import vi2 from '../../Assets/vi2.png';
import vi3 from '../../Assets/vi3.png';
import vi4 from '../../Assets/vi4.png';
import vi5 from '../../Assets/vi5.png';
import vi6 from '../../Assets/vi6.png';
import lw from '../../Assets/lw.png'
import './Project.css';

const pxArr = [px1, px2, px3, px4, px5, px6];
const viArr = [vi1, vi2, vi3, vi4, vi5, vi6];

const Project = () => {


  return (
    <section className="project section" id="project" >
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">works</span>

      <div className="project_container container">

      <div className="project_item">
        <div className="project_img-div">
          <img className src={lw} id="fcImg" alt="Project Img"/>
          {/* <Image3 imgs={pxArr} /> */}
        </div>

        <div>
          <h3>Linework</h3>
          <p>
            Linework is a multifunctional app that serves as a marketplace for products, services, and art, while also providing social networking and crypto-based banking features. Divided into E-commerce, Social Media, and Web3 components, Linework aims to streamline daily life into one user-friendly platform.
          </p>
          <p className="tech_stack">Tech Stack <span>- React JS, Express JS, Nest JS, MySQL, Prisma, Material-UI</span></p>

          <div className="project_item-btndiv">
            {/* <a href="https://github.com/aljithkj02/pixhub-client" target='_blank' rel="noreferrer" > <button>Github</button> </a> */}
            <a href="https://linework.app/" target='_blank' rel="noreferrer" > <button>Website <i className="bx bx-right-arrow-alt "></i></button></a>
          </div>
        </div>
      </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image3 imgs={pxArr} />
          </div>

          <div>
            <h3>Pixhub</h3>
            <p>Pixhub is a social media app. It allows users to share updates, connect with others, and engage with content. Pixhub is accessible on various devices and is designed with scalability and maintainability in mind.</p>
            <p className="tech_stack">Tech Stack <span>- React, Node JS, Express, MongoDB, Chakra-UI</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/aljithkj02/pixhub-client" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://pix-hub.netlify.app/" target='_blank' rel="noreferrer" > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image4 imgs={viArr} />
          </div>

          <div>
            <h3>VisualizeAI</h3>
            <p>VisualizeAI is a web application that allows users to generate images based on their imagination or unrealistic thoughts, with the help of OpenAI. It's a platform for users to share their generated images with the community.</p>
            <p className="tech_stack">Tech Stack <span>- React, Node JS, Express, MongoDB</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/aljithkj02/VisualizeAI-CLIENT" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://visualize-ai.netlify.app/" target='_blank' rel="noreferrer" > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
