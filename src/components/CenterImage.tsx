"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { Cart, Facebook, Instagram, Twitter, Yelp } from 'react-bootstrap-icons';

const CenterImage = () => (
      <Container fluid className="centerImage align-items-center position-relative">
        <Row className="align-items-center">
          <h1 className="text-center">OUR JOURNEY</h1>
        </Row>
        <div className="book-now-container">
          <Image src="/booknowbutton.png" alt="Book Now" className="book-now-button" />
        </div>
        <div className="book-now-container">
      <Image src="https://courses.ics.hawaii.edu/ics314s25/morea/react/wod-ko-hana-book-now.png" 
             alt="Book Now" 
             className="book-now-button" />
    </div>
      </Container>
      
    );

    export default CenterImage;