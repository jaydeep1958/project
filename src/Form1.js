import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tvalue: '', vtext: 'xxxxx', flavor: 'coconut' };


    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <input name='tvalue' type="text" value={this.state.tvalue} onChange={this.handleChange} />
        </label>
        <label>
          Essay:
          <textarea name='vtext'flavorvalue={this.state.vtext} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select name='flavor' value={this.state.flavor} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />

        </label>
        <input type="file" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm