import React from 'react';
import { Container, Row, Col, Card, Jumbotron, Button } from 'react-bootstrap';

export default function Hero(){
	return(
		<React.Fragment>
			<Jumbotron>
				<div className="middle">
					<h1 className="light">
						LOREM IPSUM DOLOR SIT AMET
					</h1>
					<h2 className="light2">
						Neque porro quisquam est qui dolorem ipsum 
					</h2>

					<Button className="start" variant="dark">START YOUR JOURNEY</Button>
				</div>				
			</Jumbotron>
		</React.Fragment>
	)
}