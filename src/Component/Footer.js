import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import { IoIosArrowDropright } from "react-icons/io";



export default function Footer(){
    return(
       
         <Container fluid className='footer'>
           <Row className='footer_row'>
             <Col>
             <img src='Footer pic\boat logo.svg' className='boatlogo_pic'></img>
             <h5 className='subscribe_email'>SUBSCRIBE TO OUR EMAIL <br></br> ALERT</h5>
             <input type='email' placeholder='Enter your email address' className='email_bar'></input>
             <button className='email_btn'><IoIosArrowDropright /></button>
             </Col>

             <Col className='footer_col'>
             <br></br>
             <h4 className='footer_headings'>Shop</h4>
             <p className='footer_list'>
                Limited edition Headphones<br></br>
                Smart watches<br></br>
                wired Headphones<br></br>
                Special edition Speakers<br></br>
                Trimmers
             </p>
             </Col>

             <Col className='footer_col'>
             <br></br>
             <h4 className='footer_headings'>Help</h4>
             <p className='footer_list'>
                Track your Order<br></br>
                Warranty & Support<br></br>
                Return Policy<br></br>
                Service center<br></br>
                Bulk Order<br></br>
                FAQs<br></br>
                Why buy Direct
             </p>
             </Col>

             <Col className='footer_col'>
             <br></br>
             <h4 className='footer_headings'>Company</h4>
             <p className='footer_list'>
                About boAt<br></br>
                News<br></br>
                Read Our Blog<br></br>
                Careers<br></br>
                Security investor<br></br>
                Soial responsibility<br></br>
                Warranty policy
             </p>
             </Col>
             
           </Row>
            <br></br>
            <Row className='footer_row2'>
              <p className='copyright'>
                Privacy Policy . Terms & Conditions <br></br>
                2024 Imagne marketing Limited. All Rights Reserves.
              </p>
            </Row>
         </Container>
       
    );
}