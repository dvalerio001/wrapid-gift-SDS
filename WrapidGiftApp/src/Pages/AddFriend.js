import React from 'react';
import ReactDOM from "react-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import "./bootstrap.min.css";


import './AddFriend.css';



class AddFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      birthday: "",
      modalInputBirthday: ""
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const birthday = target.birthday;
    const value = target.value;
    const value1 = target.value;

    this.setState({
      [name]: value,
      [birthday]: value1
    });
  }

  handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.setState({ birthday: this.state.modalInputBirthday });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modalInputBirthday: "",
      modal: false
    });
  }

  render() {
    return (
      <div className="addFriend-container">
      <nav>
          <Header />
      </nav>
        <h1>Hello!! {this.state.name}</h1>
        <h2 className="displayInput">Birthday: {this.state.birthday}</h2>
        <a href="javascript:;" onClick={e => this.modalOpen(e)}>
          Open Modal
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>

          <div className="form-group">
            <label className="label">Enter Name:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="label">Birthday</label>
            <input className="form-control"
              type="date"
              value={this.state.modalInputBirthday}
              name="birthday"
              onChange={e => this.handleChange(e)}
              className="form-control"
              />
          </div>


          <div className="form-group">
            <button onClick={e => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

//export default AddFriend;
//const rootElement = document.getElementById("root");
//ReactDOM.render(<AddFriend />, rootElement);

export default AddFriend;
