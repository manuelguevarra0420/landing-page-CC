import React from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { GoCalendar } from 'react-icons/go';
import Link from 'next/link';

export default function Blogs({val}){

	console.log(val);
	const {blogTitle, fileName, blogDate, blogContent} = val
	return( 
		<React.Fragment>
			<div className="blog1">
				<Row>
					<Col md={6}><Image className="imgblog" src={fileName} fluid/></Col>
					<Col md={6}>
						<div className="blogtitle"><h2>{blogTitle}</h2></div>
						<div className="blogdate"><GoCalendar/> {blogDate}</div>
						<div className="blogsnippet">Everyone dreamsof going to Rome at least once in their lives. But unfortunately, not everyone has the budget to do so. But you know what they say: The best things in life are free. And …</div>
						<div className="blogbutton"><Link href="/Blog/news"><a><span><Button variant="primary">READ MORE <BsArrowRight /></Button></span></a></Link></div>
					</Col>
				</Row>
			</div>
		</React.Fragment>
	)
}