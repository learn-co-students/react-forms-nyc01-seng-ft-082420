import React from 'react';

class Form extends React.Component {


  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   console.log(dataArray)
  //   console.log(this.state)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  render() {
    return (
      <>
        <form onChange={this.props.handleChange}>
          <input type="text" name="firstName" value={this.props.formData.firstName} />
          <input type="text" name="lastName" value={this.props.formData.lastName} />
          <input type="submit" />
        </form>
      </>
    )
  }
}

export default Form;