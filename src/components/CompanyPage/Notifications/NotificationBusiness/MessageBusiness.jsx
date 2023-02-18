import React, { useState } from 'react'
import './MessageBusiness.css'

export const Chat = () => {
  const [chat, setChat] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setChat(e.target.value)} />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export const Jorge = () => {
  return (
    <section className='section-message'>
      <div className='message-sends'>
        <h1>mensajes</h1>
      </div>
      <div className='message-chats'>
        {<Chat/>}
      </div>
    </section>
  )
}

export const Fernando = () => {
  return (
    <section>
      <div>
        <h1>mensajes1</h1>
      </div>
      <div>
        {<Chat/>}
      </div>
    </section>
  )
}

export const Sebastian = () => {
  return (
    <section>
      <div>
        <h1>mensajes2</h1>
      </div>
      <div>
        {<Chat/>}
      </div>
    </section>
  )
}