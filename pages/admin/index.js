import React, { useState } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from '../../components/Admin'
import Navigation from '../../components/Navigation';

export default function index(){

	const [login, setLogin] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('')

	let pass = 'birdrelax';
	let user = 'admin@mail.com';
	
	function onSubmit(){
		if(password === pass && user === email){
			setLogin(false)
		}else{
			setLogin(true)
		}
	}

	function onPassword(e){
		setPassword(e.target.value);
	}

	function onEmail(e){
		setEmail(e.target.value);
	}

	return(
		<React.Fragment>
		<Navigation /> 
		<Container md="fluid">
			<Row>
				<Col>
					{login 
						? 
							<React.Fragment>
								<div className="form1">
									<Form>
									  <Form.Group controlId="formBasicEmail">
									    <Form.Label>Email address</Form.Label>
									    <Form.Control type="email" placeholder="Enter email" onChange={(e) => onEmail(e)} />
									    <Form.Text className="text-muted">
									      We'll never share your email with anyone else.
									    </Form.Text>
									  </Form.Group>

									  <Form.Group controlId="formBasicPassword">
									    <Form.Label>Password</Form.Label>
									    <Form.Control type="password" placeholder="Password" onChange={(e) => onPassword(e)} />
									  </Form.Group>
									  <Form.Group controlId="formBasicCheckbox">
									    <Form.Check type="checkbox" label="Check me out" />
									  </Form.Group>
									  <Button variant="primary" type="submit" onClick={onSubmit}>
									    Submit
									  </Button>
									</Form>
								</div>
							</React.Fragment>
						:
							<Admin />
					}
				</Col>
			</Row>
		</Container>
		</React.Fragment>
	)
}