import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Head from 'next/head';

export default function Slider(){
	return(   
		<React.Fragment>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
			</Head>			
				<Container>
					<Row>
						<Col lg={2}>
							<h3 className="hi3">REGIONS</h3>
						</Col>
						<Col xl={9}>
							<div className="wrapper1">
								<div className="item1">
									<h4 className="hi4">21 Tours</h4>
									<h2 className="hi2a">FLORENCE</h2>
								</div>
								<div className="item2">
									<h4 className="hi4">22 Tours</h4>
									<h2 className="hi2a">NAPLES</h2>
								</div>
								<div className="item3">
									<h4 className="hi4">7 Tours</h4>
									<h2 className="hi2a">ROME</h2>
								</div>
								<div className="item4">
									<h4 className="hi4">21 Tours</h4>
									<h2 className="hi2a">VENICE</h2>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
		</React.Fragment>
	)
}