import React, { Component } from 'react';
import { Dialog, RaisedButton, DatePicker } from 'material-ui';
//import './AddDate.css';

class AddDate extends Component {
  constructor(props){
    super(props)
    this.state={
      serviceDate:'',
    }
  }

  handleSubmit=()=>{
    if(this.state.serviceDate==''){
      alert('Please choose a date')
    } else {
      // console.log(this.props)
      // console.log(this.state)
      // axios.post('/SHOULDFAIL', {
      //   "uid": this.props.uid,
      //   carName: this.props.currCar,
      //   serviceName:this.props.objectItem
      //   priorDate: this.state.serviceDate,
      // }).then(function (response) {
      // }).catch(function (error) {
      //   console.log(error);
      // });
      this.props.closeAdd()
    }
  }

  changeDate = (event, date) => {
    let stringDate=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    // console.log(stringDate)
    this.setState({ serviceDate: stringDate })
  }

  render() {
    return (
      <Dialog
        modal
        title={`Add new service date to ${this.props.objectItem}`}
        open={this.props.addOpen}
        actions={[
          <RaisedButton
            label='Add Service Date'
            onClick={this.handleSubmit}
          />,
          <RaisedButton
            label='Cancel'
            onClick={this.props.closeAdd}
          />
        ]}
      >
      <DatePicker
        hintText='Add date of service'
        mode='landscape'
        onChange={this.changeDate}
      />
      </Dialog>
    );
  }
}

export default AddDate;
