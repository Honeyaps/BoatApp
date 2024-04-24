import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Speaker() {
  return (
    <>
      <Container>
        <br></br>
        <b className="card_section_headings">Party Speakers</b>

        <div class="ab">
          <div id="a">
            <center>
              <Link to="Partypal200">
                <img src="Index cards\s1.webp" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Partypal 200</h2>
            <h4>99$</h4>
            <h4 id="old-price">199$</h4>
            <span>26% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>

          <div id="a">
            <center>
              <Link to="Partypal185">
                <img src="Index cards\s2.webp" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Partypal 185</h2>
            <h4>157$</h4>
            <h4 id="old-price">200$</h4>
            <span>30% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>

          <div id="a">
            <center>
              <Link to="Partypal195">
                <img src="Index cards\s3.webp" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Partypal 195</h2>
            <h4>244$</h4>
            <h4 id="old-price">444$</h4>
            <span>49% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>

          <div id="a">
            <center>
              <Link to="Partypal390">
                <img src="Index cards\s4.webp" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Partypal 390</h2>
            <h4>105$</h4>
            <h4 id="old-price">150$</h4>
            <span>50% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>
        </div>
      </Container>

      <Container>
        <br></br>
        <b className="card_section_headings">Speaker Bars</b>
        <div class="ab">
          <div id="a">
            <center>
              <Link to="Avantebar500">
                <img src="Index cards\s5.avif" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Avantebar 500</h2>
            <h4>155$</h4>
            <h4 id="old-price">199$</h4>
            <span>33% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>

          <div id="a">
            <center>
              <Link to="Avanterythem">
                <img src="Index cards\s6.avif" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Avante rythem</h2>
            <h4>129$</h4>
            <h4 id="old-price">199$</h4>
            <span>63% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>

          <div id="a">
            <center>
              <Link to="Avantebar1150">
                <img src="Index cards\s7.avif" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Avantebar 1150</h2>
            <h4>79$</h4>
            <h4 id="old-price">99$</h4>
            <span>50% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>

          <div id="a">
            <center>
              <Link to="Avantebar490">
                <img src="Index cards\s8.avif" id="img"></img>
              </Link>
            </center>
            <h2 id="product_name">Avantebar 490</h2>
            <h4>99$</h4>
            <h4 id="old-price">149$</h4>
            <span>33% off</span>
            <br></br>
            <button id="button">Add to cart</button>
          </div>
        </div>

        <br></br>
      <hr></hr>
      </Container>
    
    </>
  );
}

export default Speaker;
