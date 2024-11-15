import React from 'react'

function UserForm() {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input type="text" name='text' id='name' placeholder='Digite o seu nome' required />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail:</label>
          <input type="email" text='email' id='email' placeholder='Digite o seu E-mail' required />
        </div>
    </div>
  )
}

export default UserForm