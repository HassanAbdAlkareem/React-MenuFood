import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu">
      <div className="row">
        {items.map((item) => {
          const { id, title, img, desc, price } = item;
          return (
            <div className="col-sm-12 col-md-6" key={id}>
              <div className="single-item">
                <img src={img} />
                <span>{title}</span>
                <span>${price}</span>
                <div className="underborder"></div>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
