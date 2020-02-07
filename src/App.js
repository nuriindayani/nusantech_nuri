import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nil1: null,
      nil2: null,
      nil3: null,
      hasil: null,
      counter: 0,
      disabled1: 'disable',
      disabled2: 'disable',
      disabled3: 'disable',
      checked1: false,
      checked2: false,
      checked3: false,
      message: 0


    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckbox1 = (e) => {
    if (this.state.checked1 === false) {
      this.setState({ counter: this.state.counter + 1, disabled1: false, checked1: true })
    } else {
      this.setState({ counter: this.state.counter - 1, disabled1: 'disable', checked1: false, nil1: null })
    }

  }

  handleCheckbox2 = (e) => {
    if (this.state.checked2 === false) {
      this.setState({ counter: this.state.counter + 1, disabled2: false, checked2: true })

    } else {
      this.setState({ counter: this.state.counter - 1, disabled2: 'disable', checked2: false, nil2: null })
    }
  }

  handleCheckbox3 = (e) => {
    if (this.state.checked3 === false) {
      this.setState({ counter: this.state.counter + 1, disabled3: false, checked3: true })

    } else {
      this.setState({ counter: this.state.counter - 1, disabled3: 'disable', checked3: false, nil3: null })
    }

  }

  handlePlus = (e) => {
    e.preventDefault();
    try {
      if (this.state.nil1 === null) {
        this.setState({ hasil: parseInt(this.state.nil2) + parseInt(this.state.nil3) });
      } else if (this.state.nil2 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) + parseInt(this.state.nil3) });
      } else if (this.state.nil3 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) + parseInt(this.state.nil2) });
      } else {
        this.setState({ hasil: parseInt(this.state.nil1) + parseInt(this.state.nil2) + parseInt(this.state.nil3) });
      }
    } catch (err) {
      alert(err)
    }
  }

  handleMin = (e) => {
    e.preventDefault();
    try {
      if (this.state.nil1 === null) {
        this.setState({ hasil: parseInt(this.state.nil2) - parseInt(this.state.nil3) });
      } else if (this.state.nil2 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) - parseInt(this.state.nil3) });
      } else if (this.state.nil3 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) - parseInt(this.state.nil2) });
      } else {
        this.setState({ hasil: parseInt(this.state.nil1) - parseInt(this.state.nil2) - parseInt(this.state.nil3) });
      }
    } catch (err) {
      alert(err)
    }
  }
  handleDiv = (e) => {
    e.preventDefault();
    try {
      if (this.state.nil1 === null) {
        this.setState({ hasil: parseInt(this.state.nil2) / parseInt(this.state.nil3) });
      } else if (this.state.nil2 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) / parseInt(this.state.nil3) });
      } else if (this.state.nil3 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) / parseInt(this.state.nil2) });
      } else {
        this.setState({ hasil: parseInt(this.state.nil1) / parseInt(this.state.nil2) / parseInt(this.state.nil3) });
      }
    } catch (err) {
      alert(err)
    }
  }

  handleTim = (e) => {
    e.preventDefault();
    try {
      if (this.state.nil1 === null) {
        this.setState({ hasil: parseInt(this.state.nil2) * parseInt(this.state.nil3) });
      } else if (this.state.nil2 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) * parseInt(this.state.nil3) });
      } else if (this.state.nil3 === null) {
        this.setState({ hasil: parseInt(this.state.nil1) * parseInt(this.state.nil2) });
      } else {
        this.setState({ hasil: parseInt(this.state.nil1) * parseInt(this.state.nil2) * parseInt(this.state.nil3) });
      }
    } catch (err) {
      alert(err)
    }
  }

  renderHasil() {
    const { hasil } = this.state;
    if (2) {
      return (
        <div>
          <p className="alert alert-success" id="">
            Hasil : {hasil}
          </p>
        </div>
      )
    }

  }

  render() {
    console.log(this.state.message)
    return (
      <div>
        <div style={{ border: "1px solid", width: "30%" }}>
          <div style={{ width: "60%", margin: "relative", marginLeft: "30px" }}>
            <form>
              <label style={{ textAlign: "center" }}>Nilai</label>
              <div style={{
                display: 'flex', flexDirection: "column", width: '30%'
              }}>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <input type='number' ref='nil1' className="form-control" name='nil1' disabled={this.state.disabled1} value={this.state.nil1} onChange={this.handleChange} />
                  <input mbsc-checkbox type="checkbox" id="myCheck" onClick={this.handleCheckbox1} />
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <input type='number' ref='nil2' className="form-control" name='nil2' disabled={this.state.disabled2} value={this.state.nil2} onChange={this.handleChange} />
                  <input mbsc-checkbox type="checkbox" id="myCheck" onClick={this.handleCheckbox2} />
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <input type='number' ref='nil3' className="form-control" name='nil3' disabled={this.state.disabled3} value={this.state.nil3} onChange={this.handleChange} />
                  <input mbsc-checkbox type="checkbox" id="myCheck" onClick={this.handleCheckbox3} />
                </div>
              </div>

            </form>
            <div style={{ display: "flex", justifyContent: "space-around", width: "90%" }}>
              <button onClick={this.handlePlus}>+</button>
              <button onClick={this.handleMin}>-</button>
              <button onClick={this.handleDiv}>/</button>
              <button onClick={this.handleTim}>*</button>
            </div>
            <div>
              <hr />
            </div>
            {this.renderHasil()}
          </div>
        </div>
      </div>
    )
  }

}
