import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from './Cards';
import Speaker from './Speaker';
import Reviews from './Reviews';



function DarkVariantExample() {
  return (
    <div>
      <br></br>
    <Container fluid style={{marginTop:"-41px"}}>

    <Row  className='crousel_row'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Crousel pics\crousel3.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Crousel pics\crousel2.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Crousel pics\crousel1.webp"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    
    </Row>
    </Container>
    
   

    <Container>
    <Row>
      <BasicExample/>
    </Row>

    <Row>
      <Speaker/>
    </Row>

    <Row>
      {/* <Reviews/> */}
    </Row>

    </Container>

</div>
  );
}

export default DarkVariantExample;