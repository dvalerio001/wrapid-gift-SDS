import React from 'react';
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import "./bootstrap.min.css";
import "./form.css";


import './AddFriend.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';

class AddFriend extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      age: '',
      birthday: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
      let contact = {
        name: this.state.name,
        age: this.state.age,
        birthday: this.state.birthday
      }
      this.setState({
        name: '',
        age: '',
        birthday: ''
      });
      this.props.createContact(contact);
  }

  handleChange(e){
   this.setState({
     name: e.target.value,
     age: e.target.value,
     birthday: e.target.value
   })
 }


  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <span key={index} className="list-group-item clearfix">
          {'Name: '}{data.name}<br/>
          {'Age: '}{data.age}<br/>
          {'Birthday: '}{data.birthday}
          </span>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div>
    )
  }

  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {

    return(
      <div className="addFriend-container">
      <nav>
         <Header />
     </nav>
        <div className="friend-header">
          <h1>Add a Friend!</h1>
          <hr />
        </div>

        <div className="new-friend-form">
          <h3>Add New Friend Form</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" onChange={e => this.setState({name: e.target.value })} className="form-control" placeholder="Enter name" value={this.state.name}/><br />
            </div>

            <div className="form-group">
              <input type="text" onChange={e => this.setState({age: e.target.value })} className="form-control"  placeholder="Enter age" value={this.state.age}/><br />

            </div>

            <div className="form-group">
              <input type="date" onChange={e => this.setState({birthday: e.target.value })} className="form-control"  placeholder="Enter Birthday" value={this.state.birthday}/><br />
              <input type="submit" className="btn btn-success" value="ADD"/>
            </div>

          </form>
          <hr />
        { <ul className="list-group">

            {this.props.contacts.map((contact, i) => this.listView(contact, i))}


        </ul> }
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);
