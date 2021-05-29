import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import parse from 'html-react-parser'
import Head from 'next/head'
import { Editor } from '@tinymce/tinymce-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import Navigation from '../../components/Navigation';
export default function index(){

	const [text, setText] = useState('')
	const [image, setImage] = useState('')

	function onChange(e){
	  let files = e.target.files;
	  
	  let reader = new FileReader();

	  reader.readAsDataURL(files[0]);
	  reader.onload = (e) => {
	    //console.log(e.target.result)
	    setImage(e.target.result)
	  }

	}

	const [text1, setText1] = useState('')
	const [textTitle, setTextTitle] = useState('')
	const editorRef = useRef(null);
	

	function onTextHandler(e){
		setTextTitle(e.target.value);
	}

	const log = () => {
	  
	  	if (editorRef.current) {
	  	  console.log(editorRef.current.getContent());
	  	  setText(editorRef.current.getContent())
	  		
	  	  console.log(image);
	  	  const options = {
	  	    method: 'POST',
	  	    headers: {
	  	      'Content-Type': 'application/json'
	  	    },
	  	    body: JSON.stringify({
	  	      fileName: image,
	  	      blogTitle: textTitle,
	  	      blogContent: editorRef.current.getContent(),
	  	      blogDate: new Date()
	  	    })
	  	  }
	  	  fetch('https://manuel-circus.herokuapp.com/api', options)
	  	  .then(res => res.json())
	  	  .then(data => {
	  	    console.log(data)
	  	  })
	  	   Router.push('/Blog');
	  	}	 
	};

	return(
		<React.Fragment>	
		<Navigation />		
			<div className="upload">
			  <h1>Create Post</h1>
			  <InputGroup className="mb-3">
			      <InputGroup.Prepend>
			        <InputGroup.Text id="basic-addon3">
			          You Blog Title:
			        </InputGroup.Text>
			      </InputGroup.Prepend>
			      <FormControl onChange={(e) => onTextHandler(e)} id="basic-url" aria-describedby="basic-addon3" />
			    </InputGroup>

			  <Form>
			    <Form.File 
			    	onChange={(e) => onChange(e)}
			      id="custom-file"
			      label="Add your photo here..."
			      custom
			    />
			  </Form>

			  <img src={image} height="150" width="150" />

			</div>
			<div className="editor">
					<Editor
					  onInit={(evt, editor) => editorRef.current = editor}
					  initialValue={text}
					  init={{
					    height: 500,
					    menubar: false,
					    plugins: [
					      'advlist autolink lists link image charmap print preview anchor',
					      'searchreplace visualblocks code fullscreen',
					      'insertdatetime media table paste code help wordcount'
					    ],
					    toolbar: 'undo redo | formatselect | ' +
					    'bold italic backcolor | alignleft aligncenter ' +
					    'alignright alignjustify | bullist numlist outdent indent | ' +
					    'removeformat | help',
					    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
					  }}
					/>
					<Button className="btnpost" onClick={log}>Post It</Button>

			</div>

		</React.Fragment>
	)
}
