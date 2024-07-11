/*import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login =() =>{

  const navigate = useNavigate();
  const[formData,setFormData] = useState({
    email:'',
    password:''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData ({
      ...formData,
      [name]: value
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8899/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      })
      const result = response.json();
      localStorage.setItem("token",result.token);
      console.log(result);
      navigate("/admin")
    } catch (error) {
      console.error(error.message);
    }finally{
      setFormData({
        email :"",
        name: "",
        password: ""
      })
    }
  }

  return (
    <div className='center-form'>
        <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="enter password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">
                Login
          </Button>
        </Form></div>
  )
}

export default Login;
// Login.js
*/
// components/Login.js
// Login.js

/*
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
    ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(formData.email, formData.password);
      const user = await getUser(token);

      switch (user.role) {
        case 'admin':
          navigate(`/admin`);
          break;
        case "casasud":
          navigate(`/casasud`);
          break;
        // Add more cases for other roles
        default:
          navigate(`/`); // Default route or error handling
          break;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  //... rest of the component
  return (
    <div className='center-form'>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='Enter Password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant='dark' type='submit' className='w-100'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
*/
/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getUser } from "../../../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(email, password);
      const user = await getUser(token);
      
      switch (user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'casasud':
          navigate('/casasud');
          break;
        // Add more roles as needed
        default:
          navigate('/');
          break;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
*/
/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getUser } from "../../../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const token = await login(email, password);
      const user = await getUser(token);

      switch (user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'casasud':
          navigate('/casasud');
          break;
        // Add more roles as needed
        default:
          navigate('/');
          break;
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
*/
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      const token = await login(email, password);
      const user = await getUser(token);

      switch (user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'casasud':
          navigate('/casasud');
          break;
        // Add more roles as needed
        default:
          navigate('/');
          break;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
*/

//hada te7t 5dam
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      const token = await login(email, password);
      const user = await getUser(token);

      switch (user.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'casasud':
          navigate('/casasud');
          break;
        case 'casanord':
            navigate('/casanord');
            break;
        case 'doukkalaabda':
          navigate('/doukkalaabda');
          break;
        case 'fesmeknes':
          navigate('/fesmeknes');
          break;
        case 'haouz':
          navigate('/casasud');
          break;
        case 'nord':
          navigate('/nord');
          break;
        case 'oriental':
          navigate('/oriental');
          break;
        case 'rabattemara':
          navigate('/rabattemara');
          break;
        case 'salegharb':
          navigate('/salegharb');
          break;
        case 'sud':
          navigate('/sud');
          break;
        case 'tadlaouardigha':
          navigate('/tadlaouardigha');
          break;
        // Add more roles as needed
        default:
          navigate('/');
          break;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
*//*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../services/authService';
import './login.css';
import logoicon from '../../../components/images/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './Popup.js'; // Adjust the import path as per your project structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = await login(email, password); // Obtain token from login service
      localStorage.setItem('token', token); 
      const user = await getUser(token);
      toast.success('Login successful! Redirecting...', { autoClose: 2000 }); // Show success toast
      setTimeout(() => {
        handleLoginSuccess(user.role);
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (err) {
      console.error('Login error:', err); // Log the error to console for debugging
      setError('Invalid email or password');
      toast.error('Invalid email or password'); // Show error toast
      setShowPopup(true); // Show the popup for error message
    }
  };

  const handleLoginSuccess = (role) => {
    const routesMap = {
      admin: '/admin',
      casasud: '/directions',
      casanord: '/directions',
      doukkalaabda: '/directions/doukkalaabda',
      fesmeknes: '/directions/fesmeknes',
      haouz: '/directions/haouz',
      nord: '/directions/nord',
      oriental: '/directions/oriental',
      rabattemara: '/directions/rabattemara',
      salegharb: '/directions/salegharb',
      sud: '/directions/sud',
      tadlaouardigha: '/directions/tadlaouardigha',
      // Add more roles as needed
      default: '/',
    };

    const route = routesMap[role] || routesMap.default;
    console.log('Redirecting to:', route); // Debugging line
    navigate(route);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <ToastContainer />
      {showPopup && <Popup message={error} onClose={closePopup} />}
      <form onSubmit={handleSubmit} className="login-form">
        <img 
          src={logoicon} 
          alt="logo Icon" 
          style={{ width: '244px', height: '50px', marginRight: '8px' }} 
          className="logo-icon" 
        />
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
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/

//test hada ye7t

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../services/authService';
import './login.css'
import logoicon from '../../../components/images/logo.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from './Popup.js'; // Adjust the import path as per your project structure


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = await login(email, password); // Obtain token from login service
      localStorage.setItem('token', token); 
      const user = await getUser(token);
      toast.success('Login successful! Redirecting...', { autoClose: 2000 }); // Show success toast
      setTimeout(() => {
        handleLoginSuccess(user.role);
      }, 2000); // Wait for 2 seconds before redirecting
    } catch (err) {
      console.error('Login error:', err); // Log the error to console for debugging
      setError('Invalid email or password');
      toast.error('Invalid email or password'); // Show error toast
      setShowPopup(true); // Show the popup for error message
    }
  };

  const handleLoginSuccess = (role) => {
    const routesMap = {
      admin: '/admin',
      casasud: '/directions',
      casanord: '/directions',
      doukkalaabda: '/directions',
      fesmeknes: '/directions',
      haouz: '/directions',
      nord: '/directions',
      oriental: '/directions',
      rabattemara: '/directions',
      salegharb: '/directions',
      sud: '/directions',
      tadlaouardigha: '/directions',
      // Add more roles as needed
      default: '/',
    };

    const route = routesMap[role] || routesMap.default;
    console.log(`Role: ${role}, Redirecting to: ${route}`); // Debugging line to check the role and redirection path
    navigate(route, { replace: true }); // Added { replace: true } to ensure navigation replaces the current entry in the history stack;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="login-container">
      <ToastContainer />
      {showPopup && <Popup message={error} onClose={closePopup} />}
      <form onSubmit={handleSubmit} className="login-form">
        <img src={logoicon} alt="logo Icon" style={{width: '244px', height: '50px', marginRight: '8px' // Adjust margin as needed for spacing between icon and name
                                      }} className="logo-icon" /><div className="form-group">
        
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
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {/*error && <div className="error-message">{error}</div>*/}
        <button type="submit" className="login-button">Login</button>
     </form>
    </div>
  );
};

export default Login;

/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, getUser } from '../../../services/authService'; // Adjust the import path
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const token = await login(email, password);
      const user = await getUser(token);
      localStorage.setItem('user', JSON.stringify(user)); // Save user data to local storage
      handleLoginSuccess(user.role);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleLoginSuccess = (role) => {
    const routesMap = {
      admin: '/admin',
      casasud: '/casasud',
      casanord: '/casanord',
      doukkalaabda: '/doukkalaabda',
      fesmeknes: '/fesmeknes',
      haouz: '/casasud',
      nord: '/nord',
      oriental: '/oriental',
      rabattemara: '/rabattemara',
      salegharb: '/salegharb',
      sud: '/sud',
      tadlaouardigha: '/tadlaouardigha',
      default: '/',
    };

    const route = routesMap[role] || routesMap.default;
    navigate(route);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
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
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/