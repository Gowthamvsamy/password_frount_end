import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ChangePassword() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setconformPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password === conformPassword) {

            const formData = {
                email,
                password
            };

            try {
                // Change password logic here
                const response = await fetch('http://localhost:3000/changepassword', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    console.log('Password changed successfully');
                    navigate('/');
                } else {
                    const error = await response.json();
                    console.error('Error:', error.error);
                }
            }
            catch (error) {
                console.error('Error:', error);
            }

            alert('Password changed successfully');
        } else {
            alert('Passwords do not match');
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border m-2 p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Change Password</h1>

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
                        <label htmlFor="Password" className="form-label">Change Password:</label>
                        <input
                            type="Password"
                            id="changePassword"
                            name="Password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Conform Password:</label>
                        <input
                            type="password"
                            id="conformpassword"
                            name="password"
                            className="form-control"
                            onChange={(e) => setconformPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">submit</button>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword