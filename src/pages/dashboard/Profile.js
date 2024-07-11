/*import React, { useState, useEffect } from 'react';
import { useAuth } from '../../services/useAuth';
import { updateUser } from '../../services/authService';
import './profile.css';
import AdminLayout from '../../components/admin/component.admin.layout';

const Profile = () => {
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
        <div>
        <AdminLayout/>
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
                        required 
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

    );
};

export default Profile;*/
import React, { useState, useEffect } from 'react';

//import { useAuth } from '../../context/AuthProvider'; // Import the useAuth hook
import { useAuth } from '../../services/useAuth';

import { updateUser } from '../../services/authService';
import './profile.css';
import AdminLayout from '../../components/admin/component.admin.layout';

const Profile = () => {
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
        <div className="all">
            <AdminLayout />
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
    );
};

export default Profile;


/*
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../../services/authService';
import { useAuth } from '../../services/useAuth';

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [profile, setProfile] = useState({ name: '', email: '', password: '', newPassword: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setProfile({ name: user.name, email: user.email });
        }
    }, [user]);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUser(profile);
            setMessage('Profile updated successfully');
            // Optionally redirect or update the UI to reflect changes
        } catch (error) {
            console.error('Error updating profile:', error);
            setMessage('Error updating profile');
        }
    };

    return (
        <div className="profile-container">
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Current Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={profile.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password:</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={profile.newPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="update-button">Update Profile</button>
            </form>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Profile;
*/