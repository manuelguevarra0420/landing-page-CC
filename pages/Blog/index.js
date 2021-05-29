import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Navigation from '../../components/Navigation';
import Head from 'next/head';
import Blogs from '../../components/Blogs';

export default function index(){

	const [data, setData] = useState('')

	useEffect(() => {
		const options = {
		  headers: {
		    'Content-Type': 'application/json'
		  }
		}

		fetch('https://manuel-circus.herokuapp.com/api', options)
		.then(res => res.json())
		.then(data => {
			console.log(data)
			if(data.length > 0){
				const blogs = data.map((value, key) => {
					return <Blogs key={key} val={value} />
				})
				setData(blogs)
			}
		})
	},[])

	

	return(
		<React.Fragment>
			<Head>
				<title>Blog</title>
			</Head>
			<Navigation />
			<div className="blog">
				<h1 className="blogs">The Blog</h1>
			</div>
			<Container>
			{data}
			</Container>
		</React.Fragment>
	)
}