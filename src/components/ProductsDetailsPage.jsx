// export const ProductsDetailsPage = () => {
//   return (
//     <>
//       <div
//         style={{
//           display: 'flex',
//           paddingTop: '50px',
//           justifyContent: 'center',
//           textAlign: 'left',
//         }}>
//         <img src={''} alt="" />
//         <div className="productDetails" style={{ padding: '20px' }}>
//           <div>
//             <h2 className="productName">{product.name}</h2>
//             <h5 className="productPrice">Price : {product.price}</h5>
//           </div>
//           <h5>Specifications : </h5>
//           <div style={{ width: '700px', paddingLeft: '30px' }}>
//             {/* Show Product specification here */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ProductsDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((er) => {
        setProduct(false);
      });
  }, []);

  return (
    <>
      {product ? (
        <div
          style={{
            display: 'flex',
            paddingTop: '50px',
            justifyContent: 'center',
            textAlign: 'left',
          }}>
          <img src={product.image} alt="" style={{ width: '150px' }} />
          <div className="productDetails" style={{ padding: '20px' }}>
            <div>
              <h2 className="productName">{product.title}</h2>
              <h5 className="productPrice">Price : {product.price}</h5>
            </div>
            <h5>Specifications : </h5>
            <div style={{ width: '700px', paddingLeft: '30px' }}>
              {product.description}
            </div>
          </div>
        </div>
      ) : (
        'Product Does Not Exist'
      )}
    </>
  );
};
