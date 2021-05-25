import React from 'react';
import { Navbar, Container, Image, NavDropdown, Nav, Button } from 'react-bootstrap';
import { GoGlobe } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';
import Head from 'next/head';

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
				  <Navbar.Brand href="#home"><Image src="./republic.jpg" fluid/></Navbar.Brand>
				  <Navbar.Toggle />
				  <Navbar.Collapse className="justify-content-end">
				    <NavDropdown title={
        									<span className="menu1 text-secondary my-auto">DESTINATIONS</span>
    									} 
    									id="nav-dropdown">
			            <NavDropdown.Item href="#action/3.1">THE AMALFI COAST</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.2">SORENTO</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">CAPRI</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">SICILY</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">SARDINIA</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">REST OF ITALY</NavDropdown.Item>
			        </NavDropdown>
			        <NavDropdown title={
        									<span className="menu1 text-secondary my-auto">EXPERIENCES</span>
    									} 
    									id="nav-dropdown">
			            <NavDropdown.Item href="#action/3.1">BESPOKE HOLIDAY EXPERIENCES</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.2">ITALY'S ISLAND BY SEA</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">THE FOOD AND WINE GURU</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">THE LUXURY FAMILY EXPERIENCE</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">THE CUSTOM CULTURAL EXPERIENCE</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">THE SUPREME ADVENTURER</NavDropdown.Item>
			        </NavDropdown>
			        <NavDropdown title={
        									<span className="menu1 text-secondary my-auto">EVENTS</span>
    									} 
    									id="nav-dropdown">
			            <NavDropdown.Item href="#action/3.1">WEDDINGS AND HONEYMOONS</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.2">EVENT MANAGEMENT</NavDropdown.Item>
			        </NavDropdown>
			        <NavDropdown title={
        									<span className="menu1 text-secondary my-auto">SERVICES</span>
    									} 
    									id="nav-dropdown">
			            <NavDropdown.Item href="#action/3.1">TRANSFERS AND PRIVATE DRIVERS</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.2">HOTELS AND PRIVATE VILLAS</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">LUXURY AND PRESTIGE CAR HIRE</NavDropdown.Item>
			            <NavDropdown.Item href="#action/3.3">PRIVATTE YACHT AND BOAT HIRE</NavDropdown.Item>
			        </NavDropdown>
			        <NavDropdown title={
        									<span className="menu1 text-secondary my-auto">ABOUT</span>
    									} 
    									id="nav-dropdown">
			            <NavDropdown.Item href="#action/3.1">ABOUT REPUBLIC</NavDropdown.Item>
			        </NavDropdown>
			        <Nav.Link className="news" href="#">NEWS</Nav.Link>
			        <Nav.Link className="contact" href="#">CONTACT</Nav.Link>
				  </Navbar.Collapse>
				  <Navbar.Collapse className="justify-content-end">
				  </Navbar.Collapse>
				</Navbar>
			</Container>
		</React.Fragment>
	)
}