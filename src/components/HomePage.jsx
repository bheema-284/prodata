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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 25%)',
          gap: '10px',
          width: '90%',
          margin: 'auto',
          paddingTop: '50px',
        }}>
        {/* Iterate over products and show links */}
        {mockData.map((el) => {
          //return <Link to={`/`}>{<>el.image</><>el.title</>}</Link>;
          return (
            <div>
              <img
                src={el.image}
                alt=""
                style={{ width: '150px', height: '100px' }}
              />
              <div>
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
