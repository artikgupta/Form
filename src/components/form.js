import React, { Component } from "react";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      address: "",
      country: "",
      city: "",
      zipcode: "",
    };
  }
  handleChange = (event) => {
    let { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      firstname,
      lastname,
      email,
      company,
      address,
      country,
      city,
      zipcode,
    } = this.state;
    return (
      <div className="main-container">
        <div className="container">
          <div className="info">
            <p>Shipping</p>
            <p>Payment</p>
            <p>Confirmation</p>
          </div>
          <form>
            {/* about */}
            <div className="about flex ">
              <div className="column">
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  value={firstname}
                  onChange={this.handleChange}
                  name="firstname"
                ></input>
              </div>
              <div className="column">
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  value={lastname}
                  onChange={this.handleChange}
                  name="lastname"
                ></input>
              </div>
              <div className="column">
                <label>Email</label>
                <input
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                ></input>
              </div>
            </div>
            {/* address-info */}
            <div className="address-info flex ">
              <div className="column">
                <label>Company</label>
                <input
                  placeholder="Company"
                  type="text"
                  value={company}
                  onChange={this.handleChange}
                  name="company"
                ></input>
              </div>
              <div className="column">
                <label>Address</label>
                <input
                  placeholder="Address"
                  type="text"
                  value={address}
                  onChange={this.handleChange}
                  name="address"
                ></input>
              </div>
            </div>
            {/* country-info */}
            <div className="country-info flex ">
              <div className="column">
                <label>Country</label>
                <input
                  placeholder="Country"
                  type="text"
                  value={country}
                  onChange={this.handleChange}
                  name="country"
                ></input>
              </div>
              <div className="column">
                <label>City</label>
                <input
                  placeholder="City"
                  type="text"
                  value={city}
                  onChange={this.handleChange}
                  name="city"
                ></input>
              </div>
              <div className="column">
                <label>ZIP Code</label>
                <input
                  placeholder="ZIP Code"
                  type="text"
                  value={zipcode}
                  onChange={this.handleChange}
                  name="zipcode"
                ></input>
              </div>
            </div>
            {/* shipping info */}
            <div className="shipping-info flex">
              <input type="checkbox"></input>
              <p>My shipping and billing information is here</p>
            </div>
            {/* password-info */}
            <div className="password-info flex">
              <input type="checkbox"></input>
              <p>Create a password for easy account access</p>
            </div>
            {/* button class */}
            <div className="buttons">
              <button className="btn btn-1">RETURN TO STORE</button>
              <button className="btn btn-2">CONTINUE</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
