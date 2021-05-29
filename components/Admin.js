import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Router from 'next/router';

export default function Admin(){
	
	const [login, setLogin] = useState(true)


	function onPost(){
		setLogin(false)
		Router.push('/Post')
	}
	return(
		<React.Fragment>			
			<div className="adminpanel">
				<div className="postadmin"><Button variant="dark" disabled={login ? false : true } onClick={onPost}>Post A Content</Button></div>
			</div>
		</React.Fragment>
	)
}
