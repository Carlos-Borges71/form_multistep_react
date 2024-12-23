import React from 'react'

function UserForm({data, updateFieldHandler}) {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name='text' 
            id='name' 
            placeholder='Digite o seu nome' 
            required 
            value={data.name || ""}
            onChange={(e) => updateFieldHandler("name", e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input 
            type="email" 
            text='email' 
            id='email' 
            placeholder='Digite o seu E-mail' 
            required 
            value={data.email || ""}
            onChange={(e) => updateFieldHandler("email", e.target.value)}
          />
        </div>
    </div>
  )
}

export default UserForm