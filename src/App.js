import React from 'react';
import './App.css';
import Profile from './components/profile';



class App extends React.Component {

  
state = {
  persone:{
    Fullname: "Farouk-el-gharbi",
    Bio: "student",
    imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ny9Z5x5w1i8T5p6L7-eyyNLhVdiXfXC9rw&s" ,
    Profession: "developer",},
  show: false
}

render() {
  return (
    <div>
      <h1>Profile Card</h1>
      <button onClick={() => this.setState({show: !this.state.show})}>Show Profile</button>    
      { this.state.show && <Profile persone={this.state.persone} />}  
    </div>
  );
}
}

export default App;
