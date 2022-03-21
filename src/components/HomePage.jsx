import './styles.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
export const HomePage = () => {
  const [mockData, setMockdata] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setMockdata(res.data);
    });
  }, []);
  return (
    <>
      <div className="data">
        {/* Iterate over products and show links */}
        {mockData.map((el) => {
          //return <Link to={`/`}>{<>el.image</><>el.title</>}</Link>;
          return (
            <div className="data1">
              <img className="img" src={el.image} alt="" />
              <div className="data2">
                <h2 className="productName">
                  <Link
                    to={`/products/${el.id}`}
                    className="productName"
                    style={{ textDecoration: 'none' }}>
                    {el.title}
                  </Link>
                </h2>
                <h5 className="productPrice">Price : {el.price}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
