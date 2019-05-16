import React from 'react';

function Cars(props){
  return (
  
  <div className ="card">
    <div className="card-item">
      <img 
          src={props.car.link}/>
        <h3>
        {props.car.name}
        </h3>
      <p>
      {props.car.price}
      </p>
    </div>
  </div>
  )
}

class Home extends React.Component{
  
  state = {
    car : [
      {name:"BMW", link:"https://www.newsauto.gr/wp-content/uploads/2019/02/190223121959_unspecified21-350x210.jpeg", price: 10000},
      {name:"Mercedes", link:"https://img.drive.ru/i/3/5cb5806cec05c4081d000018", price: 9000},
      {name:"Citroen", link:"https://mosautoshina.ru/i/auto/citroen_berlingo_2019.jpg", price: 7000},
      {name:"Honda", link:"https://www.thinkthelen.com/assets/stock/colormatched_01/white/640/cc_2016hoc080002_01_640/cc_2016hoc080002_01_640_si.jpg?height=400", price:5000}
    ]
  }
  renderCars(){
    return this.state.car.map(car=>{
      return (
        <Cars car={car} key = {car.name + Math.random()}/>
      )
    })
  }
  render(){
     return(
      
      <div className="list">

          {this.renderCars()}
            
            </div>
            )
          }
          }
      
  

export default Home;
