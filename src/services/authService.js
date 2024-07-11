// services/authService.js
//import http from "./http-commn";

/*const login = async (email, password) => {
    try {
        const response = await http.post('/login', { email, password });
        return response.data.token;
    } catch (error) {
        throw error.response.data.message;
    }
};

export { login };
*/
// services/authService.js
/*
import http from "./http-commn";
import axios from 'axios';

const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8899/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', result.token);
        return result;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw error;
    }
  };
  */
/* const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        throw new Error('Not authenticated');
      }
  
      const response = await fetch('http://localhost:8899/api/users/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw error;
    }
  };*/
  

  /*
const login = async (email, password) => {
    try {
      const response = await http.post(`/auth/login`, { email, password });
      return response.data.token;
    } catch (error) {
      throw error.response.data.message;
    }
  };
  
  const getUser = async (token) => {
    try {
      const response = await http.get(`api/users/userrs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  };
  export { login,getUser };*/
  // services/authService.js
//import http from "./http-commn";

/*
import http from "./http-commn";

const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    throw error.response.data.message;
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/userrs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export { login, getUser };
*/
//import http from "./http-common";

/*import http from "./http-commn";

const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred during login.');
    }
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/userrs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred while fetching user data.');
    }
  }
};

export { login, getUser };
*/
//import http from "./http-commn";
/*
const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    console.error("Login error:", error);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred during login.");
    }
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/userrs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Get user error:", error);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("An unexpected error occurred while fetching user data.");
    }
  }
};

export { login, getUser };
*/
/*
const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred during login.');
    }
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/userrs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred while fetching user data.');
    }
  }
};

export { login, getUser };*/
/*
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8899',
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred during login.');
    }
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred while fetching user data.');
    }
  }
};

export { login, getUser };
*/
/*
import axios from 'axios';

import { useEffect, useState } from 'react';


const http = axios.create({
  baseURL: 'http://localhost:8899',
  headers: {
    //'Authorization': `Bearer ${eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9}`,
    'Content-Type': 'application/json',
  },
});

const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred during login.');
    }
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred while fetching user data.');
    }
  }
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/*const updateUser = async (data) => {
  const token = localStorage.getItem('token');
  const response = await http.put('/api/user', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};*/

/*hadi l5ra
const updateUser = async (userData) => {
try {
  const token = localStorage.getItem('token');
  const response = await axios.put(`/api/user`, userData, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  });
  return response.data;
} catch (error) {
  console.error('Error updating user:', error);
  throw error;
}
};


/*const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await getUser(token);
          setUser(userData);
        }
      } catch (error) {
        // Handle error, e.g., token invalid or expired
        console.error('Error fetching user:', error.message);
        logout(); // Clear local storage
        setUser(null); // Reset user state
      }
    };

    fetchUser();

    // Cleanup function
    return () => {
      setUser(null); // Reset user state when unmounting
    };
  }, []);

  return { user };
};*/
/*const useAuth = () => {
  const [user, setUser] = useState(null); // Initialize user state to null

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
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
}*/

//export { login, getUser, logout,updateUser };

import axios from 'axios';

const API_URL = 'http://localhost:8899';

const http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const login = async (email, password) => {
  try {
    const response = await http.post(`/api/auth/login`, { email, password });
    return response.data.token;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred during login.');
    }
  }
};

const getUser = async (token) => {
  try {
    const response = await http.get(`/api/users/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('An unexpected error occurred while fetching user data.');
    }
  }
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const updateUser = async (userData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await http.put(`/api/users/user`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export { login, getUser, logout, updateUser };
