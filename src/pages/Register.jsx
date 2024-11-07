import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Form data to send to the backend
        const formData = {
            username,
            email,
            password
        };

        try {
            const response = await fetch('https://password-back-end.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success
                console.log('User registered successfully');
            } else {
                // Handle error
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // using onClick to show alert
    const showAlert = () => {
        alert('Form submitted successfully!');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border m-2 p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Register</h1>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" onClick={showAlert}><Link to="/register" className='text-decoration-none text-white'>Register</Link></button>
                    <p className='text-center pt-3 fs-6'>Already have an account? <Link to="/" className='text-decoration-none'>Login now</Link></p>
                </form>
            </div>
        </div>
    );

}

export default Register