import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
import Features from './Features';
import Slider from './Slider';
import Tabble from './Tabble';
import Popular from './Popular';
import About from './About';
import Footer from './Footer';

export default function Units(){
	return(
		<React.Fragment>			
			<Hero />
			<Slider />
			<Features />			
			<Tabble />
			<Popular />
			<About />
			<Footer />
		</React.Fragment>
	)
}
