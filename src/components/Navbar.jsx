import { Link } from 'react-router-dom';

const links = [
  //Fix this links array, it's an array of objects {to: "", title: ""}
  { to: '/', title: 'HomePage' },
  { to: 'products', title: 'Products Page' },
  { to: 'products/id', title: 'ProductsDetails Page' },
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' ,background:"blue"}}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: '10px',color:"white",textDecoration:"none",zIndex:"1" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
