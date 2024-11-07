import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function conformotp() {
    const [otp, setOTP] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            otp
        };

        try {
            const response = await fetch('http://localhost:3000/emailVerification/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                navigate('/changePassword', { state: { email: result.email } });
            } else {
                throw new Error('Failed to send OTP');
            }

        } catch (err) {
            console.error('Error sending OTP:', err);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="border m-2 p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center mb-4">Send OTP</h1>

                    <div className="mb-3">
                        <label htmlFor="otp" className="form-label">OTP:</label>
                        <input
                            type="text"
                            id="otp"
                            name="otp"
                            className="form-control"
                            onChange={(e) => setOTP(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Send OTP</button>

                </form>
            </div>
        </div>
    )
}

export default conformotp