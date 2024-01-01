import React, { useState } from 'react';
import ProductsData from '../../../Data/ProductsData';
import SingleView from '../singleview/SingleView';
import SideMenue from '../sidemenue/SideMenue';
import { Col, Row } from 'reactstrap';

const Electronics = () => {
  const [range, setRange] = useState(50000);

  const handleRange = (value) => {
    setRange(value);
    console.log(range);
  };

  const filteredProducts = ProductsData.mobileProducts.filter((product) => parseInt(product.price) <= parseInt(range));

  return (
    <>
      <div className='d-flex'>
        <SideMenue rangeChange={handleRange} />
        <div className="content-container">
          <Row>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Col md='12' key={product.id}>
                  <SingleView
                    image={product.image}
                    name={product.brand}
                    rating={product.rating}
                    storage={product.storage}
                    display={product.display}
                    battery={product.battery}
                    warrenty={product.warrenty}
                    price={product.price}
                  />
                </Col>
              ))
            ) : (
              <div>No product found</div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Electronics;
