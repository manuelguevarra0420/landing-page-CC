import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


export default function Features(){
	return(
		<React.Fragment>			
			<Container md="fluid">
				<div className="feat">
					<Row>
						<Col md={6}>
							<Image src="./images/feature1.jpg" fluid />
						</Col>
						<Col  md={6}>
							<h1 className="hi1">THE LUXURY TRAVEL EXPERTS.</h1>
							<h2 className="hi2"> YESTERDAY, TODAY, ALWAYS. </h2>

							<p className="pi1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
							<p className="pi1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
							<Button variant="dark" className="aboutbutton p-2">ABOUT US</Button>
						</Col>
					</Row>
				</div>
				<div className="feat">
					<Row>
						<Col  md={6}>
							<h1 className="hi1">STATE OF FLEX</h1>

							<p className="pi1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
							<p className="pi1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
							<Button variant="dark" className="aboutbutton p-2">READ MORE</Button>
							<Button variant="dark" className="aboutbutton1 p-2">COVID FACTS</Button>
						</Col>
						<Col  md={6}>
							<Image src="./images/feature2.jpg" fluid />
						</Col>
					</Row>
				</div>
				<Row className="text-center p-5">
					<Col xs={12}><Image src="./images/vir.jpg" fluid/></Col>
				</Row>
				<hr className="myhr" />
			</Container>				
		</React.Fragment>
	)
}