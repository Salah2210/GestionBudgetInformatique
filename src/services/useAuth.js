/*import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Mock function to fetch user data from local storage or API
        const fetchUser = () => {
            const userData = localStorage.getItem('user');
            if (userData) {
                return JSON.parse(userData);
            }
            return null;
        };

        const user = fetchUser();
        if (user) {
            setUser(user);
        } else {
            navigate('/');
        }
    }, [navigate]);

    return { 
        role: user ? user.role : null,
        user,
        setUser
    };
};

export default useAuth;
*/// useAuth.js
// useAuth.js
/*import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserFromStorage = () => {
      const userData = localStorage.getItem('user');
      if (userData) {
        return JSON.parse(userData);
      }
      return null;
    };

    const user = fetchUserFromStorage();
    if (user) {
      setUser(user);
    } else {
      navigate('/'); // Redirect to login if user data is not found
    }
  }, [navigate]);

  return { 
    user,
    setUser
  };
};

export default useAuth;
*/

/*
import { useEffect, useState } from 'react';
import { getUser } from './authService'; // Assuming authService.js is in the same directory

const useAuth = () => {
  const [user, setUser] = useState(null); // Initialize user state to null

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        if (token) {
          // Fetch user data using token
          const userData = await getUser(token);
          // Update user state with retrieved user data
          setUser(userData);
        }
      } catch (error) {
        // Handle error, e.g., token invalid or expired
        console.error('Error fetching user:', error.message);
        setUser(null); // Reset user state to null
      }
    };

    // Call fetchUser function when component mounts
    fetchUser();

    // Cleanup function (optional)
    return () => {
      // Perform cleanup tasks if needed
    };
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return { user };
};

export {useAuth} ;
*/
/*
import { createContext, useContext, useState, useEffect } from 'react';

// Assuming you have an authService with login functionality
import { login as authServiceLogin, logout as authServiceLogout, getUser } from './authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = async (credentials) => {
    const user = await authServiceLogin(credentials);
    setUser(user);
  };

  const logout = () => {
    authServiceLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
*/

///hada t7t 5dam

import { useEffect, useState } from 'react';
import { getUser } from './authService';


const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);

        if (token) {
          const userData = await getUser(token);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error fetching user:', error.message);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return { user };
};

export { useAuth };
