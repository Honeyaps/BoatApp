import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Container>
      <br></br>
      <b className="card_section_headings">BEST SELLERS</b>
      <div class="ab">
        <div id="a">
          <center>
            <Link to="Airpode161">
              <img src="Index cards\cd1.webp" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Airpode161</h2>
          <h4>155$</h4>
          <h4 id="old-price">205$</h4>
          <span>34% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>

        <div id="a">
          <center>
            <Link to="Airpode131">
              <img src="Index cards\cd2.webp" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Airpode131</h2>
          <h4>139$</h4>
          <h4 id="old-price">199$</h4>
          <span>60% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>

        <div id="a">
          <center>
            <Link to="Lunnar">
              <img src="Index cards\cd3.webp" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Lunnar</h2>
          <h4>99$</h4>
          <h4 id="old-price">149$</h4>
          <span>33% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>

        <div id="a">
          <center>
            <Link to="Immortal">
              <img src="Index cards\cd4.gif" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Immortal</h2>
          <h4>199$</h4>
          <h4 id="old-price">299$</h4>
          <span>35% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>
      </div>
      <div class="ab">
        <div id="a">
          <center>
            <Link to="Rockerz">
              <img src="Index cards\cd5.webp" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Rockerz</h2>
          <h4>155$</h4>
          <h4 id="old-price">199$</h4>
          <span>44% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>

        <div id="a">
          <center>
            <Link to="Avantebar">
              <img src="Index cards\cd7.jpg" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Avantebar</h2>
          <h4>105$</h4>
          <h4 id="old-price">144$</h4>
          <span>50% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>

        <div id="a">
          <center>
            <Link to="Stone52">
              <img src="Index cards\cd8.webp" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Stone52</h2>
          <h4>45$</h4>
          <h4 id="old-price">99$</h4>
          <span>63% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>

        <div id="a">
          <center>
            <Link to="Stone105">
              <img src="Index cards\cd9.webp" id="img"></img>
            </Link>
          </center>
          <h2 id="product_name">Stone105</h2>
          <h4>155$</h4>
          <h4 id="old-price">99$</h4>
          <span>43% off</span>
          <br></br>
          <button id="button">Add to cart</button>
        </div>
      </div>
      <br></br> <br></br>
      <hr></hr>
      <b className="card_section_headings">HEADPHONES</b>
      <br></br>
      <h1 className="mainpic_price">Starting from 170$</h1>
      <img src="Main pics\main pic.jpg" className="img"></img>
      <br></br>
      <hr></hr>
    </Container>
  );
}

export default BasicExample;
