import React from 'react';
import { Navbar, Container, Image, NavDropdown, Nav, Button } from 'react-bootstrap';
import { GoGlobe } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import Head from 'next/head';
import Link from 'next/link';


export default function Navigation(){
	return(
		<React.Fragment>
			<Head>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
			</Head>

			<nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-white bg-gradient">
				<div className="container">
					<ul className="navbar-nav">
						<li className="nav-item">
							<div className="hor">
							  	<div className="horizontal"><GoGlobe /><NavDropdown title={
			        									<span className="menu1 text-secondary my-auto">CURRENCY</span>    									} 
			    									id="nav-dropdown2">
							        <NavDropdown.Item href="#action/3.1">EUR</NavDropdown.Item>
							        <NavDropdown.Item href="#action/3.2">USD</NavDropdown.Item>
							      </NavDropdown>
							    </div>
							    <div className="horizontal"><FiPhone /><NavDropdown title={
			        									<span className="menu1 text-secondary my-auto">+00 092 5436 324</span>    									} 
			    									id="nav-dropdown2">
							        <NavDropdown.Item href="#action/3.1">+00 593 5430</NavDropdown.Item>
							      </NavDropdown>
							    </div>
						  	</div>
						</li>
					</ul>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Button variant="danger" className="p-2">START PLANNING HERE</Button>
						</li>
					</ul>
				</div>
			</nav>
			<hr className="myhr"/>
			<Container md="fluid">
				<Navbar expand="sm">
				  <Navbar.Brand href="#"><Link href="/"><a><span><Image src="./republic.jpg" className="logo" fluid/></span></a></Link></Navbar.Brand>
				  <Navbar.Toggle />
				  <Navbar.Collapse className="justify-content-end">
				  	  <Nav className="mr-55">
				        <Nav.Link href="#home" className="news"><Link href="/"><a><span className="home">HOME</span></a></Link></Nav.Link>
				        <NavDropdown title={
        									<span className="menu1 text-secondary my-auto">ITALY</span>
    									} 
    									id="nav-dropdown">
			            <NavDropdown.Item href="#action/3.1">ROME</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.2">VENICE</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">FLORENCE</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">NAPLES</NavDropdown.Item>
			       		</NavDropdown>
			       		<Nav.Link href="#about" className="contact">ABOUT US</Nav.Link>
				      </Nav>
				  </Navbar.Collapse>
				  <Navbar.Collapse className="justify-content-end">
				  </Navbar.Collapse>
				</Navbar>
			</Container>
		</React.Fragment>
	)
}