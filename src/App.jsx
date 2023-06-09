import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  const[formData, setFormData] = React.useState(
    {
      firstName: '',
      lastName: '',
      comments: '',
      isGraduated: ''
    })

  function handleChange (event) {
    setFormData(prevFormData => {
      const {name, value, checked} = event.target
      return {
        ...prevFormData,
        [name]: value

      }
    })
  }

  console.log(formData)

  return (
    <div className="App">
     <form action="">
        <input 
        type="text"
        placeholder='First Name' 
        onChange={handleChange}
        value={formData.firstName}
        name="firstName"
        />
        <input 
        type="text"
        placeholder='Last Name' 
        onChange={handleChange}
        value={formData.lastName}
        name="lastName"
        />
        <textarea 
        type='text'
        name="comments" 
        value={formData.comments}
        placeholder='comments'
        onChange={handleChange}
        />
        <label className='isGraduated'>
        <input 
        type="checkbox" 
        name='isGraduated'
        onChange={handleChange}
        checked={formData.isGraduated}
        />Check if you've graduated.</label>
     </form>
    </div>
  )
}

export default App
