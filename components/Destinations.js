import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Destinations(){
	return(
		<React.Fragment>			
			<div className="destination">
				<Container>
					<h2 className="text-center p-5">MOST POPULAR DESTINATIONS</h2>
				</Container>
				<Container>
					<Row>
						<Col md={6}><div className="dest1"><h2 className="costa">COSTA RICA</h2></div></Col>
						<Col md={6}>
							<div className="dest2">
								<div className="destA"><h2 className="scot">SCOTTISH HIGHLANDS</h2></div>
								<div className="destB"><h2 className="scot">GREECE</h2></div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	)
}