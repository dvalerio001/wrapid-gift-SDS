import React from 'react';
import './form.css';
import AddFriend from '../Pages/AddFriend'

export const Form = ({ handleSubmit } ,{ displayHandler}, {showName}, state ) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label" htmlFor="name">Name</label>
        <input className="form-control" id="name" onChange={displayHandler} value={state}  />
      </div>

      <div className="form-group">
      <label className="label" htmlFor="gender">Gender</label>
        <select className="form-control" id="gender" name="Gender">
          <option className="form-control" value="female">Female</option>
          <option className="form-control" value="male">Male</option>
          <option className="form-control" value="nonbinary" selected>Non-binary</option>
          <option className="form-control" value="noAnswer">Do not wish to answer</option>
        </select>
      </div>

      <div className="form-group">
        <label className="label" htmlFor="birthday">Birthday</label>
        <input  className="form-control" type="date" id="birthday" name="birthday"/>
      </div>



      <div className="form-group">
        <label className="label" htmlFor="reminder">Date of Reminder</label>
        <input  className="form-control" type="date" id="reminder" name="birthday"/>
      </div>

      <div className="form-group">
        <label className="label" htmlFor="reminderTime">Time of Reminder</label>
        <input  className="form-control" type="time" id="reminderTime" name="birthday"/>
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit"  onClick={handleSubmit}>
          Submit
        </button>
        {state.showName && <p>"FirstName: " {state}</p>}

      </div>
    </form>
  );
};
export default Form;
