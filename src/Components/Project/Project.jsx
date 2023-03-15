import React from 'react';
import Image1 from './Image1.jsx';
import Image2 from './Image2.jsx';
import Image3 from './Image3.jsx';
import Image4 from './Image4.jsx';

import { useState } from 'react';
import bb1 from '../../Assets/bb1.png';
import bb2 from '../../Assets/bb2.png';
import bb3 from '../../Assets/bb3.png';
import bb4 from '../../Assets/bb4.png';
import bb5 from '../../Assets/bb5.png';
import bb6 from '../../Assets/bb6.png';
import fc1 from '../../Assets/fc1.png';
import fc2 from '../../Assets/fc2.png';
import fc3 from '../../Assets/fc3.png';
import fc4 from '../../Assets/fc4.png';
import fc5 from '../../Assets/fc5.png';
import fc6 from '../../Assets/fc6.png';
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
import './Project.css';

const fcArr = [fc1, fc2, fc3, fc4, fc5, fc6];
const bbArr = [bb1, bb2, bb3, bb4, bb5, bb6];
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

        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image1 imgs={fcArr} />
          </div>

          <div>
            <h3>First Cry</h3>
            <p>FirstCry.com - This project is an e-commerce application for kids' products,
              providing customers with a seamless shopping experience.</p>
            <p className="tech_stack">Tech Stack <span>- HTML, CSS, Javascript, Node JS, Express, MongoDB</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/aljithkj02/FirstCry-Backend" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://first-cry.netlify.app/" target='_blank' rel="noreferrer" > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img src={bb1} alt="Project Img"/> */}
            <Image2 imgs={bbArr} />
          </div>

          <div>

            <h3>Big Basket</h3>
            <p>Bigbasket.com is India’s largest online food and grocery store. Bigbasket created for buying fresh Fruits and Vegetables, Rice and Dals...</p>
            <p className="tech_stack">Tech Stack <span>- HTML, CSS, Javascript</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/adilrana03/BigBasket_Clone" target='_blank' rel="noreferrer" > <button>Github</button> </a>
              <a href="https://big-basket1.netlify.app/" target='_blank' rel="noreferrer" ><button>Demo <i className="bx bx-right-arrow-alt contact_button-icon"></i></button> </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
