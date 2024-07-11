import React, { useState, useEffect } from 'react';

//import { useAuth } from '../../context/AuthProvider'; // Import the useAuth hook
import { useAuth } from '../../services/useAuth';

import { updateUser } from '../../services/authService';
import './profile.css';
import DirectionsLayout from '../../components/component.directions.layout';

const DirectionProfile = () => {
    const { user } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            await updateUser({ name, email, password, newPassword });
            setSuccess('Profile updated successfully');
            setError('');
            setPassword('');
            setNewPassword('');
        } catch (err) {
            setError('Error updating profile: ' + err.message);
            setSuccess('');
        }
    };

    return (
        <div >
            <DirectionsLayout />
            <div className="all">
            <div className="profile-container">
                <h2>Profile</h2>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                <form onSubmit={handleUpdateProfile} className="profile-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Current Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New Password:</label>
                        <input 
                            type="password" 
                            id="newPassword" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="update-button">Update Profile</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default DirectionProfile;

