// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// export const ProductsPage = () => {
//   return (
//     <>
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 35%)',
//           justifyContent: 'space-evenly',
//           width: '500px',
//           margin: 'auto',
//           paddingTop: '50px',
//         }}>
//         <h4>Product Name</h4>
//         <h4>Price</h4>
//         <h4>Details</h4>
//       </div>
//       {[].map((el) => {
//         return (
//           <div
//             className="container"
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(4, 35%)',
//               justifyContent: 'space-evenly',
//               width: '500px',
//               margin: 'auto',
//               paddingTop: '10px',
//             }}>
//             <div className="name">{el.name}</div>
//             <div className="price">{el.price}</div>
//             <Link to={`/products/${el.id}`}>more details</Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductsPage = () => {
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
          gridTemplateColumns: 'repeat(3, 33%)',
          justifyContent: 'space-evenly',
          width: '80%',
          margin: 'auto',
          paddingTop: '50px',
        }}>
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {mockData.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 33%)',
              justifyContent: 'space-evenly',
              width: '80%',
              margin: 'auto',
              paddingTop: '10px',
            }}>
            <div className="name">{el.title}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          </div>
        );
      })}
    </>
  );
};
