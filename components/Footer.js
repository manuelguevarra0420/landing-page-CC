import styles from './Footer.module.css'
import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="footer">
      	<Container>
      		<Row>
      			<div className="abta">
      				<Image className="footerpics" src="./images/svg/abta.svg" fluid/>
      				<Image className="footerpics" src="./images/svg/conde.svg" fluid/>
      				<Image className="footerpics" src="./images/svg/iata.svg" fluid/>
      				<Image className="footerpics" src="./images/svg/the-british.svg" fluid/>
      				<Image className="footerpics" src="./images/svg/travelleisure.svg" fluid/>
      			</div>
      		</Row>
      		<hr className="myhr" />
      		<Row>
      			<Col md={4}>
      				<p className="signup">SIGN UP TO NEWS LETTER</p>
      				<InputGroup className="mb-3">
      				    <FormControl
      				      placeholder="Your email address"
      				      aria-label="Recipient's username"
      				      aria-describedby="basic-addon2"
      				    />
      				    <InputGroup.Append>
      				      <InputGroup.Text id="basic-addon2">Sign Up</InputGroup.Text>
      				    </InputGroup.Append>
      				  </InputGroup>
      				  <p className="signup">SHARE YOUR TRAVELS WITH US</p>
      				  <div className="socials">
      				  	<FaTwitter className="icons"/>
      				  	<FaFacebookF className="icons"/>
      				  	<FaInstagram className="icons"/>
      				  	<FaPinterestP className="icons"/>
      				  	<FaYoutube className="icons"/>
      				  </div>
      				  <h4 className="signup">REPUBLIC EXPERIENCE <italic>inspirations</italic></h4>
      			</Col>
      			<Col md={8}>
      				<div className="colx">
      					<div className="col1">
      						<p className="signup">USEFUL INFORMATION</p>
      						<div className="info">
      							<p className="infox">About Us</p>
      							<p className="infox">Sustainability</p>
      							<p className="infox">Frequently Asked Questions</p>
      							<p className="infox">Get In Touch</p>
      							<p className="infox">Booking Conditions</p>
      						</div>
      					</div>
      					<div className="col1">
      						<p className="signup">POPULAR DESTINATIONS</p>
      						<div className="colx">
      							<div className="info1">
      								<p className="infox">Australia</p>
      								<p className="infox">Brazil</p>
      								<p className="infox">Cambodia</p>
      								<p className="infox">Chile</p>
      								<p className="infox">Iceland</p>
      							</div>
      							<div className="info1">
      								<p className="infox">Morroco</p>
      								<p className="infox">Mozambique</p>
      								<p className="infox">Oman</p>
      								<p className="infox">South Africa</p>
      								<p className="infox">Sri Lanka</p>
      							</div>
      						</div>
      					</div>
      					<div className="col1">
      						<p className="signup">EXPERIENCES</p>
      						<div className="info">
      							<p className="infox">Honeymoon</p>
      							<p className="infox">Family</p>
      							<p className="infox">Beach</p>
      							<p className="infox">Safari</p>
      							<p className="infox">Adventures</p>
      						</div>
      					</div>
      				</div>
      			</Col>

      		</Row>
      	</Container>
      </div>
    </>
  )
}
