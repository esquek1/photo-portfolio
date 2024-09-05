import React from 'react'
import "../css/contact.css"

function Contact() {
	return (
		<div className='contact-container'>
			<div className='contact-item container-title'>

			</div>

			<div className='contact-item'>
				For general questions and inquries
				please fill out the contact form
			</div>
			<div className='contact-item contact-content'>
				<label> 
					Full Name 
					<input type='' placeholder='First Name' />
					<input type='' placeholder='Last Name' />
				</label>

				<br />
				<label>
					E-mail
					<input type='email' placeholder='Email' />
					<br />
					example@example.com
				</label>
				<br/>
				
				<label>
					Message
					<input type='' placeholder='Message' />
				</label>
				<br/>
				<button>
					Send
				</button>
			</div>
		</div>
  	)
}

export default Contact
