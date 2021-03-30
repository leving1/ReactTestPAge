import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeItem(props) {
  return (
  <>
  <ul className="Welcome_item">
    <Link className="Welcome__item__link" to={props.path}>
      <figure className="Welcome__item__pic-wrap" data-category={props.label}>
        <img 
        src={props.src} 
        alt="Error" 
        className="Welcome__item__img"
        />
      </figure>
      <div className="Welcome__item__info">
        <h5 className="Welcome__item__text">{props.text}</h5>
      </div>
    </Link>
  </ul>
  </>
  );
  }
  export default WelcomeItem;