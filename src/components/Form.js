import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
    //this.SendDataSomehwere() --->sim of an API call
    /* In controlled components, we explicitly set the value of a component using state, and update that value in response to any changes the user makes. While it takes a little bit of set up to implement, it makes some other parts of our code easier. For instance, in a basic controlled form, our handleSubmit() function can be relatively simple:*/

  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
        <input type="submit"/>
      </form>
      {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;