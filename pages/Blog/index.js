import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Navigation from '../../components/Navigation';
import { BsArrowRight } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';

export default function index(){
	return(
		<React.Fragment>
			<Navigation />
			<div className="blog">
				<h1 className="blogs">The Blog</h1>
			</div>
			<Container>
				<div className="blog1">
					<Row>
						<Col md={6}><Image className="imgblog" src="./images/blog/blog1.jpg" fluid/></Col>
						<Col md={6}>
							<div className="blogtitle"><h2>Top 50 Free Things To Do in Rome</h2></div>
							<div className="blogdate"><GoCalendar/> April 4, 2021, 3:16 pm</div>
							<div className="blogsnippet">Everyone dreamsof going to Rome at least once in their lives. But unfortunately, not everyone has the budget to do so. But you know what they say: The best things in life are free. And …</div>
							<div className="blogbutton"><Button variant="primary">READ MORE <BsArrowRight /></Button></div>
						</Col>
					</Row>
				</div>
				<div className="blog1">
					<Row>
						<Col md={6}><Image src="./images/blog/blog2.jpg" fluid/></Col>
						<Col md={6}>
							<div className="blogtitle"><h2>Top 10 Budget Hotels in Rome</h2></div>
							<div className="blogdate"><GoCalendar/> April 4, 2021, 3:16 pm</div>
							<div className="blogsnippet">Everyone dreamsof going to Rome at least once in their lives. But unfortunately, not everyone has the budget to do so. But you know what they say: The best things in life are free. And …</div>
							<div className="blogbutton"><Button variant="primary">READ MORE <BsArrowRight /></Button></div>
						</Col>
					</Row>
				</div>
			</Container>
		</React.Fragment>
	)
}