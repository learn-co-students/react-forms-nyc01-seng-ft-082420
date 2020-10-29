import React from 'react';

const DisplayData = props => {
  return(
    <div>
      <h1>{props.formData.firstName}</h1>
      <h1>{props.formData.lastName}</h1>
    </div>
  )
  }

export default DisplayData