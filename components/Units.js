import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from './Hero';
import Features from './Features';
import Slider from './Slider';
import Tabble from './Tabble';
import Popular from './Popular';
import About from './About';
import Destinations from './Destinations';

export default function Units(){
	return(
		<React.Fragment>			
			<Hero />
			<Features />
			<Slider />
			<Tabble />
			<Popular />
			<About />
			<Destinations />
		</React.Fragment>
	)
}