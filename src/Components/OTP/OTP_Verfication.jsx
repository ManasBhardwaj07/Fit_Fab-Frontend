import React, { useState } from 'react';
import axios from 'axios';

const OTP_Verification = ({ onOtpVerified, type }) => {
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [otpSent, setOtpSent] = useState(false); // OTP bheje jaane ka flag

    // Phone number submit karna (OTP bhejna)
    const handlePhoneSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/otp.php', { phone });
            setMessage(response.data.message);
            setOtpSent(true); // OTP bheja gaya, ab OTP input form dikhega
        } catch (error) {
            setMessage('Error sending OTP');
            console.error(error);
        }
    };

    // OTP submit karna (OTP verify karna)
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/validate_otp.php', { otp });
            if (response.data.status === 'success') {
                setMessage(response.data.message);
                onOtpVerified(); // Parent component ko notify karein OTP verify ho gaya
            } else {
                setMessage('Invalid OTP');
            }
        } catch (error) {
            setMessage('Error verifying OTP');
            console.error(error);
        }
    };

    return (
        <div>
            {/* Phone number form (OTP bheje jaane se pehle dikhana) */}
            {!otpSent ? (
                <form onSubmit={handlePhoneSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <button type="submit">Send OTP</button>
                </form>
            ) : (
                // OTP input form (OTP bheje jaane ke baad dikhana)
                <form onSubmit={handleOtpSubmit}>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                    <button type="submit">Verify OTP</button>
                </form>
            )}

            {/* Message display */}
            {message && <p>{message}</p>}
        </div>
    );
};

export default OTP_Verification;
