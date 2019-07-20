import React from 'react';
import logo from './logo.svg';
import './App.css';


class TabStrip extends React.Component {

  render() {
    return (
      
      <div className="TabStrip">
        
        {this.props.titles.map((title, index) => {
          
          const className = "TabStrip-title" +(this.isActive(index) ? " TabStrip-title-active" : "");

          return (
            <div onClick={() => this.setActiveIndex(index)} key={index} className={className}>
              {title}
            </div>
          );
        })}
      </div>
    );
  }

  isActive(index) {
    return index === this.getActiveIndex();
  }
  
  setActiveIndex(activeIndex) {
    /* Write your code here */
    this.Active(activeIndex)
  }
  
  getActiveIndex() {
    /* Write your code here */
    
  
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    formitems:{firstname:'',age:0 }
  };


  }
  handleChange =(e)=> {
    let fitm = this.state.formitems
    fitm[e.target.name] = e.target.value;
    this.setState({formitems: fitm});     
  
  }

  

  render() {
    
        return <div>
          <form action="" method="">
          <div style={{width:"20px"}}>
          <input type="text" onChange={this.handleChange} value={this.state.firstname} name="firstname" />
          </div>
          <div style={{width:"20px"}}>
          <input type="text"  value={this.state.age} onChange={this.handleChange} name="age" />
           </div>
           {(this.state.formitems.age>=14 )&&
           <div style={{width:"20px"}}>
          <input type="text" onChange={this.handleChange}  value={this.state.age} name="age" />
           </div>
           }
           <button onClick={this.submit} >Submit</button>
           </form>
           </div>
         
      }
    
}
export default App;
