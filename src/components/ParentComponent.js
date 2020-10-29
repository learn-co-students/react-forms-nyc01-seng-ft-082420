import React from 'react'
import Form from './Form'

class ParentComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        // submittedData: []
    }

    handleFirstNameChange = event => {
        console.log(event.target.value)
        this.setState({
          firstName: event.target.value
        })
      }
    
      handleLastNameChange = event => {
        this.setState({
          lastName: event.target.value
        })
      }

      render(){
          return(
            <Form 
            formData={this.state}
            handleFirstNameChange={this.handleFirstNameChange}
            handleLastNameChange={
                this.handleLastNameChange
            }
            />
          )
      }
}
export default ParentComponent