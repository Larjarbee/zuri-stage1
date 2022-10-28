import React from 'react';
import { Links } from './Links';
import MainList from './MainList';
import image from '../assets/ca.jpg';
import git from '../assets/git.png';
import slack from '../assets/slack.png';
import share from '../assets/share.png';
import dot from '../assets/dot.png';
import Vector from '../assets/Vector.png';
import vec from '../assets/vec.png';

const Main = () => {
  return (
    <main>
      <section>
        <div className='icons'>
          <img className='share' src={share} alt='icon' />
          <img className='dot' src={dot} alt='icon' />
        </div>
        <img src={image} alt='img' width={100} id='profile__img' />
        <h5 id='twitter'>Larjar_bee</h5>
        <h5 id='slack'>Larjar</h5>

        <ul>
          {Links.map((link) => (
            <MainList
              id={link.id}
              key={link.id}
              title={link.title}
              url={link.url}
            />
          ))}
        </ul>
        <div className='icon'>
          <img src={slack} alt='icon' width={25} />
          <img src={git} alt='icon' />
        </div>
      </section>
      <footer className='footer'>
        <img src={Vector} alt='img' height={20} />
        <h5>HNG Internship 9 Frontend Task</h5>
        <img src={vec} alt='img' height={20} />
      </footer>
    </main>
  );
};

export default Main;
