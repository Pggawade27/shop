import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import { Star } from 'react-feather';
import { Image } from 'react-bootstrap';

const SingleView = ({ image, name, rating, storage, display, battery, warrenty, price }) => {
    return (
        <div>
            <style>
                {`
                .content-container {
                margin-left: 0;
                width: 100%;
                }
            
                .product-card {
                margin-bottom: 20px;
                }

                @media (min-width: 1000px) {
                    .content-container {
                        margin-left: 12%;
                    }
                }
            
                `}
            </style>
            <div className="content-container">
                <Row>
                    <div className="product-card d-md-flex justify-content-between align-items-center p-5" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                        <Col xs='12' md='4'>
                            <Image src={image} fluid />
                        </Col>
                        <Col xs='12' md='4' className='d-flex flex-column align-items-start m-auto '>
                            <div><h5>{name}</h5></div>
                            <div className='d-flex justify-content-between align-items-center'><Badge color="success">{rating}<Star className='ms-1' size='15px' fill='white' /></Badge></div>
                            <ul className='mt-2'>
                                <li>{storage}</li>
                                <li>{display}</li>
                                <li>{battery}</li>
                                <li>{warrenty}</li>
                            </ul>
                        </Col>
                        <Col xs='12' md='4' className='m-auto w-100'>
                        <h5 className='text-center'>{price}</h5>
                        </Col>
                    </div>
                </Row>
            </div>
        </div>
    );
};

export default SingleView;
