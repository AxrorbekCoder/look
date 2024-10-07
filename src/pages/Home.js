import React, { useRef } from 'react';
import { Outlet, Link } from "react-router-dom";
import './home.css'
import logv from './imges/logv.png';
import react from './imges/react.png';
import node from './imges/node.png';
import html from './imges/html.png';
import css from './imges/css.png';
import php from './imges/php.png';
import phto from './imges/phto.png';
import hik from './imges/hik.png';
import logo1 from './imges/logo1.png';
import logo2 from './imges/logo2.png';
import blog5 from './imges/blog5.png';
import Footer from './Footer';
const Home = () => {
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { offsetWidth, offsetHeight } = currentTarget;

        // Вычисляем смещение и ограничиваем его
        const moveX = Math.min(Math.max((clientX / offsetWidth) * 40 - 20, -20), 20);
        const moveY = Math.min(Math.max((clientY / offsetHeight) * 40 - 20, -20), 20);

        // Рассчитываем угол поворота по осям X и Y (3D-эффект)
        const rotateX = (clientY / offsetHeight) * 40 - 20; // Поворот по оси X
        const rotateY = (clientX / offsetWidth) * 40 - 20;  // Поворот по оси Y

        // Прямо изменяем стиль изображения через ссылку
        if (imageRef.current) {
            imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
           
        }
    };
    return (
        <>
        <div className='home-section' onMouseMove={handleMouseMove}>
            <div className='home-title'>
               <h1 className='logo_name'>A.SH CODERS</h1>
               <h1>enterprise software development company</h1> 
            </div>
             <img src={blog5} alt='blog' ref={imageRef}/>
        </div>
        <div className='home_twosec'>
            <h1 className='about-title'>ABOUT <strong>ME</strong> </h1>
               <div className='bottom'>
               <div className='sec1'>
                    <div className='img-cub'>
                        <img src={logv} alt=''/>
                    </div> 
               </div>
                   <div className='sec2'>
                        <p>I am Shermatov Axrorbek a passionate software developer with experience in building dynamic, responsive applications. I specialize in technologies like React.js, Node.js, and PHP, with a focus on creating efficient, scalable, and user-friendly solutions. With a strong background in both frontend and backend development, I enjoy working on full-stack projects, optimizing performance, and implementing clean design. I'm always eager to learn new technologies and improve my skills to stay at the forefront of the ever-evolving tech landscape.</p>
                        <button className='btn-shine'>Resume <span>&#8594;</span> </button>
                    </div>
                </div> 
        </div>
        <div className='skills'>
            <h1 className='skills-title'>SKILL<strong>S</strong> </h1>
            <div className='skills-grid'>
                <div className='skill-item'>
                    <div className='skill-img'>
                        <img src={react} alt='react' className='skill_logo'/>
                    </div>
                    <h2>React.js</h2>
                </div>
                <div className='skill-item'>
                    <div className='skill-img'>
                        <img src={node} alt='node' className='skill_logo'/>
                    </div>
                    <h2>Node.js</h2>
                </div>
                <div className='skill-item'>
                    <div className='skill-img'>
                        <img src={html} alt='html' className='skill_logo' />
                        </div>
                        <h2>HTML</h2>
                </div>
                <div className='skill-item'>
                    <div className='skill-img'>
                        <img src={css} alt='css' className='skill_logo' />
                        </div>
                        <h2>CSS</h2>
                </div>
                <div className='skill-item'>
                    <div className='skill-img'>
                        <img src={php} alt='php' className='skill_logo' />
                        </div>
                        <h2>PHP</h2>
                </div>
                <div className='skill-item'>
                    <div className='skill-img'>
                        <img src={phto} alt='hik' className='skill_logo' />
                        </div>
                        <h2>Adobe PS</h2>
                </div>
            </div>
        </div>
        <div className='my_project '>
            <h1 className='project-title'>MY <strong>PROJECTS</strong> </h1>
            <div class="bailey-stripes">
                <div class="stripe-1">
                    <img src={logo1} style={{objectFit: 'contain'}}/>
                    <span class="stripe-label">Website of Kokan locomotive depot</span>
                </div>
                <div class="stripe-2">
                    <img src={logo2} style={{objectFit: 'contain' }}/>
                    <span class="stripe-label">Test Words</span>
                </div>
                <div class="stripe-3">
                    <img src="https://images.unsplash.com/photo-1455243629161-1f993797f78d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <span class="stripe-label">Test Words</span>
                </div>
                <div class="stripe-4">
                    <img src="https://images.unsplash.com/photo-1455243629161-1f993797f78d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <span class="stripe-label">Test Words</span>
                </div>
                <div class="stripe-5">
                    <img src="https://images.unsplash.com/photo-1455243629161-1f993797f78d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <span class="stripe-label">Test Words</span>
                </div>
                <div class="stripe-6">
                    <img src="https://images.unsplash.com/photo-1455243629161-1f993797f78d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <span class="stripe-label">Test Words</span>
                </div>
                </div>
                { /*mobile devices*/}
                <div class="bailey-stripes-mobile" >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        </div>
        <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
        </>
    );
};

export default Home;