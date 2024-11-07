import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EmailVerification() {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email
    };


    try {
      const response = await fetch('https://password-back-end.onrender.com/emailVerification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/conformotp');
        // send otp confirmation in mailjet
      } else {
        throw new Error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border m-2 p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <h1 className="text-center mb-4">Send OTP</h1>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Send OTP</button>

        </form>
      </div>
    </div>
  )
}

export default EmailVerification