import React from 'react';
import img from '../images/image-equilibrium.jpg'
import img1 from '../images/icon-view.svg'
import img2 from '../images/icon-ethereum.svg'
import img3 from '../images/icon-clock.svg'
import img4 from '../images/image-avatar.png'

const EquilibriumCard = () => (
  <div className="container">
    <article className="main-image">
      <img src={img} alt="" />
      <div>
        <img src={img1}alt="" />
      </div>
    </article>

    <article>
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>

      <ul>
        <li>
          <img src={img2} alt="" /> 0.041 ETH
        </li>
        <li>
          <img src={img3} alt="" /> 3 days left
        </li>
      </ul>
    </article>

    <article className="avatar">
      <img src={img4} alt="" />
      <p>
        Creation of <span>Jules Wyvern</span>
      </p>
    </article>
  </div>
);

const Attribution = () => (
  <div className="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
      Frontend Mentor
    </a>
    . Coded by <a href="https://kevorklepedjian.vercel.app/">Kevork Lepedjian</a>.
  </div>
);

const App = () => (
  <>
    <EquilibriumCard />
    <Attribution />
  </>
);

export default App;
