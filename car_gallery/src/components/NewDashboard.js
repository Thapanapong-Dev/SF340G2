import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Image, Dropdown, DropdownButton, Card, CardGroup, Row } from "react-bootstrap";
import { Button } from "bootstrap";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://127.0.0.1:4000/cars", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        this.setState({
          cars: res.data,
        });
        console.log(this.state.cars);
      })
      .catch((error) => {
        console.log(error);
        console.log("Invalid data");
      });
  }

  getSort(e) {
    console.log(e);
  }


  data = () => {
    return this.state.cars.map((res) => {
      return (
        // <Image
        //   src={res.images.split(",")[0]}
        //   style={{
        //     width: "300px",
        //     height: "200px",
        //     margin: "30px"
        //   }}
        // ></Image>

        <Card className="text-center" style={{width:'20vw', margin:'1vw', backgroundColor:'#DCDCDC'}}>
          <Card.Img variant="top" src={res.images.split(",")[0]} style={{height:"25vh", paddingTop:'0.5vw'}}/>
          <Card.Body>
            <Card.Title style={{textDecoration: "none"}}>
              {res.model}
              </Card.Title>
            <Card.Footer className="text-muted" >
              {res.price.toLocaleString('en-US')} บาท
            </Card.Footer>
          </Card.Body>
        </Card>
        // <Card style={{ width: "30vw" }}>
        // <Card.Img variant="top" src={res.images.split(",")[0]} />
        // <Card.Body>
        //   <Card.Title>{res.model}</Card.Title>
        //   <Card.Text>
        //     Some quick example text to build on the card title and make up the
        //     bulk of the card's content.
        //   </Card.Text>
        //   <Button variant="primary">Go somewhere</Button>
        // </Card.Body>
      // </Card>
        // <span>{res.model}</span>
      );
    });
  };

  render() {
    return (
      <div style={{ display: "flex" , width:"100%"}} >
        
        <Link
          to={{
            pathname: "/brand/car/details",
            state: { 
            //   model: this.props.cars.model, 
            //   price: data.price,
            //   type: data.type,
            //   engine: data.engine,
            //   engineDetails: data.engineDetails,
            //   drivertrain: data.drivertrain,
            //   transmission: data.transmission,
            //   fuel: data.fuel,
            //   fuelSupplySystem: data.fuelSupplySystem,
            //   upholsteryMat: data.upholsteryMat,
            //   elecSeat: data.elecSeat,
            //   sound: data.sound,
            //   absBreak: data.absBreak,
            //   airBags: data.airBags,
            //   elecGlass: data.elecGlass,
            //   equipOut: data.equipOut,
            //   equipIn: data.equipIn,
            //   equipSec: data.equipSec,
            //   equipLivable: data.equipLivable,
            //   note: data.note,
            //   advice: data.advice,
            //   update: data.update
            },
          }} className="container">
          <Row>

          {this.data()}
          </Row>
        </Link>
        <div >
        <div style={{ width: "20vw" , height:'100vh',padding:"20px" ,paddingTop:"10vh", backgroundColor: "pink", position:'-webkit-sticky', position:'sticky' , top:'0'}} >

          <DropdownButton id="sorting" title="sort by" onSelect={(e)=>console.log(e.target.value)}>
            <Dropdown.Item value="1">A - Z</Dropdown.Item>
            <Dropdown.Item value="2">Z - A</Dropdown.Item>
            <Dropdown.Item value="3">ราคาต่ำ - สูง</Dropdown.Item>
            <Dropdown.Item value="4">ราคาสูง - ต่ำ</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="brand-filter" title="Brand">
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="">Another action</Dropdown.Item>
            <Dropdown.Item href="">Something else</Dropdown.Item>
          </DropdownButton>
          <p>filter</p>
          </div>
        </div>
      </div>
    );
  }
}