import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameOnChange = (event) => setName(event.target.value);
  const emailOnChange = (event) => setEmail(event.target.value);
  const subjectOnChange = (event) => setSubject(event.target.value);
  const messageOnChange = (event) => setMessage(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Submit!!! 🚀 ")
  }

  return (
    <div className='form'>
      <form name='form' onSubmit={onSubmit}>
      <div className="form__name">
				<label htmlFor='name'>Your Name</label>
				<input
          type="text"
          name='name'
          placeholder="Peter Gabriel"
          value={name}
          onChange={nameOnChange}
        />
      </div>

      <div className="form__email">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name='email'
          placeholder="peter-gabriel@gmail.com"
          value={email}
          onChange={emailOnChange}
        />
      </div>

      <div className="form__subject">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name='subject'
          placeholder='New Song'
          value={subject}
          onChange={subjectOnChange}
        />
      </div>

      <div className="form__message">
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name='message'
          placeholder='My early ages...'
          value={message}
          onChange={messageOnChange}
        />
      </div>

      <button>Submit</button>
			</form>
    </div>
  )
}
