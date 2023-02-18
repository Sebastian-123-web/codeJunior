import React from 'react'
import './Notification.css'

export default function Notifications(props) {
  return (
    <div className='notification-section'>
      <div className='notification-section-center'>
        <section className='notification_message'>
          <button>+ Nuevo Mensaje</button>
        </section>
        <section className='notification_render'>
          {props.Section}
        </section>
      </div>
    </div>
  )
}
