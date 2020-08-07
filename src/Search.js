import React from 'react'
import {Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import SearchResults from './SearchResults'

class Search extends React.Component {
  state = {
    startDate: new Date(),
    search: false
  };
  
  handleChange = date => {
    this.setState({
      startDate: date,
      search:false
    });
  };
 
  handleClick = ()=>{
    this.setState({
      search:true
    })
    this.props.changeState();
  }

  render() {
    return (
      <div>
      <div className="Container">
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />  <Button size="sm" onClick={this.handleClick}>Search</Button>
      </div>
      <br/>
       {
         this.state.search ? (<SearchResults 
          data={this.props.user_data}
          day={this.state.startDate.getDate()}
          month={this.state.startDate.getMonth()}
          year={this.state.startDate.getFullYear()}
          option={false}
         />) : (<p> </p>)
       }
      </div>
    );
  }
}

export default Search;