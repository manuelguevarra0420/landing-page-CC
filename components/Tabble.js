import React, {useState} from 'react';
import { Container, Row, Col, Tabs, Tab, Image } from 'react-bootstrap';


export default function Tabble(){

	return(
		<React.Fragment>			
			<Container>
				<Row>
					<h1 className="text-center my-5">START YOUR JOURNEY</h1>
				</Row>
				
					<Tabs className="bg-white text-dark" defaultActiveKey="profile" id="uncontrolled-tab-example">
					  <Tab eventKey="home" title="MOST POPULAR">
					    <Row>
					    	<Col md={6}>
					    		<Image src="./images/honeymoons.jpg" className="box" fluid/>
					    		<p className="pi2">HONEYMOONS</p>
					    	</Col>
					    	<Col md={6}>
					    		<Image src="./images/space.jpg" className="box" fluid/>
					    		<p className="pi2">LOOKING FOR SPACE + TIME?</p>
					    	</Col>
					    </Row>
					    <Row>
					    	<Col md={4}>
					    		<Image src="./images/beach.jpg" className="box1" fluid/>
					    		<p className="pi3">BEACH</p>
					    	</Col>
					    	<Col md={4}>
					    		<Image src="./images/family.jpg" className="box1" fluid/>
					    		<p className="pi3">FAMILY</p>
					    	</Col>
					    	<Col md={4}>
					    		<Image src="./images/remote.jpg" className="box1" fluid/>
					    		<p className="pi3">REMOTE</p>
					    	</Col>
					    </Row>
					  </Tab>
					  <Tab eventKey="profile" title="EXPERIENCES">
					    <Row>
					    	<Col md={6}>
					    		<Image src="./images/adventure.jpg" className="box" fluid/>
					    		<p className="pi2">ADVENTURE</p>
					    	</Col>
					    	<Col md={6}>
					    		<Image src="./images/unusual.jpg" className="box" fluid/>
					    		<p className="pi2">UNUSUAL</p>
					    	</Col>
					    </Row>
					    <Row>
					    	<Col md={4}>
					    		<Image src="./images/safari.jpg" className="box1" fluid/>
					    		<p className="pi3">SAFARI</p>
					    	</Col>
					    	<Col md={4}>
					    		<Image src="./images/beach.jpg" className="box1" fluid/>
					    		<p className="pi3">BEACH</p>
					    	</Col>
					    	<Col md={4}>
					    		<Image src="./images/ski.jpg" className="box1" fluid/>
					    		<p className="pi3">ski</p>
					    	</Col>
					    </Row>
					  </Tab>
					</Tabs>
			</Container>
		</React.Fragment>
	)
}
