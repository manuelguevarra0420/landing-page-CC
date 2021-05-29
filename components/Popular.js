import React from 'react';
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';

export default function Popular(){
	return(
		<React.Fragment>			
			<Container>
				<div className="pop">
					<hr className="myhr"/>
					<Row>
						<Col className="text-center" md={3}>
							<p>STAY IN THE KNOW</p>
							<h2>MOST POPULAR</h2>
						</Col>
						<Col className="text-center" md={6}>Visit our Most Popular page to explore the latest stories, inspiration and news from the world of Republic Experience.</Col>
						<Col className="text-center" md={3}><Button variant="dark">TAKE ME THERE</Button></Col>
					</Row>
					<hr className="myhr"/>
				</div> 
			</Container>
			<div className="jumbotron1">
				<div className="middle1">
					<h1 className="lightx">
						LOREM IPSUM DOLOR SIT AMET
					</h1>
					<h2 className="light2x">
						Neque porro quisquam est qui dolorem ipsum 
					</h2>

					<div className="startx" ><Button variant="dark">START YOUR JOURNEY</Button></div>
				</div>				
			</div>
		</React.Fragment>
	)
}