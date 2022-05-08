import React from 'react';

const Menu = ({items}) => {
  return ( 
  <div className='section-center'>
    {items.map((menuItem)=> {
      const {id,title,price,img} = menuItem;
      return (
        <article key={id} className='menu-item'>
          <img src={img} alt={title} className='photo'></img>
        </article>
      );
    })}
  </div>
  );
};

export default Menu;
