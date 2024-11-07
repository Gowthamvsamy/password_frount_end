import React, { useState } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();


        // Form data to send to the backend
        const formData = {
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:3000/login', { // Replace with your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                // Store the token in localStorage (optional)
                localStorage.setItem('token', result.token);

                // Navigate to the dashboard
                navigate('/dashboard');
            } else {
                // Show error message
                setError(result.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border m-2 p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Login</h1>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Email:</label>
                        <input
                            type="text"
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
                    <p className='text-end fs-6'><Link to="/emailVerification" className='text-decoration-none text-secondary'>Forgot Password?</Link></p>

                    <button type="submit" className="btn btn-primary w-100">Login</button>
                    <p className='text-center pt-3 fs-6'>Don't have an account yet? <Link to="/register" className='text-decoration-none'>Sign up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login