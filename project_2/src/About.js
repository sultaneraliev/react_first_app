import React from 'react';

function Cars(props){

  const classes =['card']

  if(props.car.marked){
      classes.push('marked')
  }

  return (
  <div className={classes.join(' ')} onClick={props.onMark}>
  
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

class About extends React.Component{
  
  state = {
    cars : [
      {marked: false, name:"BMW", link:"https://www.newsauto.gr/wp-content/uploads/2019/02/190223121959_unspecified21-350x210.jpeg", price: 10000},
      {marked: false, name:"Mercedes", link:"https://img.drive.ru/i/3/5cb5806cec05c4081d000018", price: 9000},
      {marked: false, name:"Citroen", link:"https://mosautoshina.ru/i/auto/citroen_berlingo_2019.jpg", price: 7000},
      {marked: false, name:"Honda", link:"https://www.thinkthelen.com/assets/stock/colormatched_01/white/640/cc_2016hoc080002_01_640/cc_2016hoc080002_01_640_si.jpg?height=400", price:5000}
    ]
  }

handleMarked (name){
    const cars = this.state.cars.concat();

    const car =  cars.find(c => c.name===name)
    car.marked = !car.marked;

    this.setState({cars});
    alert(car.name)
}

  renderCars(){
    return this.state.cars.map(car=>{
      return (
        <Cars car={car} key = {car.name + Math.random()}
        onMark={this.handleMarked.bind(this, car.name)}/>
      )
    })
  }
  render(){
     return(
      
      <div className="list">
<h1>About</h1>
          {this.renderCars()}
            
            </div>
            )
          }
          }

export default About;