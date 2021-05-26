import React from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';


export default function About(){
	return(
		<React.Fragment>			
			<Container>
				<Row>
					<h2 className="text-center more">READ BEFORE YOU TRAVEL</h2>
				</Row>
				<Row>
					<Col md={6}>
						<div className="img1">
							<h2 className="about1">REASONS TO BOOK WITH US</h2>
							<p className="about5"><div className="about4">Tailor-made trips, local guides, 24/7 accessibility? Don’t worry.</div></p>
							<div className="about4">
								<Link href="/Blog">
								    <a><span><Button variant="light">FIND OUT MORE</Button></span></a>
								</Link>
							</div>
						</div>
					</Col>
					<Col md={6}>
						<div className="img2">
							<h2 className="about1">HOW IT ALL WORKS</h2>
							<p className="about5"><div className="about4">Tailor-made trips, local guides, 24/7 accessibility? Don’t worry.</div></p>
							<div className="about4">
								<Link href="/Blog">
								    <a><span><Button variant="light">FIND OUT MORE</Button></span></a>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	)
}