import React from 'react';
import Image1 from './Image1.jsx';
import Image2 from './Image2.jsx';

import {useState} from 'react';
import fc1 from '../../Assets/fc1.png';
import fc2 from '../../Assets/fc2.png';
import fc3 from '../../Assets/fc3.png';
import fc4 from '../../Assets/fc4.png';
import fc5 from '../../Assets/fc5.png';
import fc6 from '../../Assets/fc6.png';
import bb1 from '../../Assets/bb1.png';
import bb2 from '../../Assets/bb2.png';
import bb3 from '../../Assets/bb3.png';
import bb4 from '../../Assets/bb4.png';
import bb5 from '../../Assets/bb5.png';
import bb6 from '../../Assets/bb6.png';
import './Project.css';

const fcArr = [fc1, fc2, fc3, fc4, fc5, fc6];
const bbArr = [bb1, bb2, bb3, bb4, bb5, bb6];

const Project = () => {


  return (
    <section className="project section" id="project" >
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">works</span>

      <div className="project_container container">
        
        <div className="project_item">
          <div className="project_img-div">
            {/* <img className src={fc} id="fcImg" alt="Project Img"/> */}
            <Image1 imgs={ fcArr }/>
          </div>

          <div>
            <h3>First Cry Clone</h3>
            <p>FirstCry.com - India's Largest Online Store for newborn, baby & kids products. Shop from the best range of Toys, Diapers, Clothes, Footwear, Strollers...</p>
            <p className="tech_stack">Tech Stack <span>- HTML, CSS, Javascript</span></p>

            <div className="project_item-btndiv">
              <a href="https://github.com/adityarajbenn/firstCry" target='_blank' > <button>Github</button> </a>
              <a href="https://firstcry-clone.netlify.app/" target='_blank' > <button>Demo <i className="bx bx-right-arrow-alt "></i></button></a>
            </div>
          </div>
        </div>

        <div className="project_item">
          <div className="project_img-div">
            {/* <img src={bb1} alt="Project Img"/> */}
            <Image2 imgs={ bbArr }/>
          </div>

          <div>

            <h3>Big Basket Clone</h3>
            <p>Bigbasket.com is India’s largest online food and grocery store. Bigbasket created for buying fresh Fruits and Vegetables, Rice and Dals...</p>
            <p className="tech_stack">Tech Stack <span>- HTML, CSS, Javascript</span></p>

            <div className="project_item-btndiv">
            <a href="https://github.com/adilrana03/BigBasket_Clone" target='_blank' > <button>Github</button> </a>
              <a href="https://strong-kangaroo-b6ed10.netlify.app/" target='_blank' ><button>Demo <i className="bx bx-right-arrow-alt contact_button-icon"></i></button> </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
