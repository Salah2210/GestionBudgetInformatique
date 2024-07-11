/*import React from 'react'
import AdminLayout from '../../components/admin/component.admin.layout';
import { Doughnut } from 'react-chartjs-2';
import Navbar from '../../components/Navbar';

import { getAllProjects } from "../../services/project_service";


const Dashboard = () => {
  const chartData = {
    labels: ["Initial Budget", "Remaining Budget"],
    datasets: [
        {
            label: "Budget",
            data: ["10", "20"],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};
  return (
    <div>
      <AdminLayout/>
      
      dashboar
      d
      
      <div style={{ flex: 2 }}>
                        <Doughnut data={chartData} options={chartOptions} />
      </div>
            statiqtique
      
      </div>
  )
}

export default Dashboard;*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Doughnut } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ["Initial Budget", "Remaining Budget"],
    datasets: [
      {
        label: "Budget",
        data: [0, 0],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getAllProjects();

        if (projects && projects.length > 0) {
          const initialBudgetTotal = projects.reduce((total, project) => total + project.initialBudget, 0);
          const remainingBudgetTotal = projects.reduce((total, project) => total + project.remainingBudget, 0);

          setChartData({
          ...chartData,
            datasets: [
              {
              ...chartData.datasets[0],
                data: [initialBudgetTotal, remainingBudgetTotal],
              },
            ],
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.error('Error response:', error.response);
      }
    };

    fetchData();
  }, [chartData]);

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <AdminLayout/>
      
      {isLoading? (
        <div>Loading...</div>
      ) : (
        <div style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Budget Comparison</h2>
          <div style={{ width: '500px', height: '500px' }}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
      
      {/* Add more charts here *//*}
      
    </div>
  );
}

export default Dashboard;

*/

/*import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";

const Dashboard = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetchTotals();
    }, []);

    const fetchTotals = async () => {
        const data = await getAllProjects();
        setProjects(data);
    };
    const calculateTotal = (field) => {
        return projects.reduce((sum, total) => sum + total[field], 0);
     };
     const totalRow = {
        initialBudget: calculateTotal("initialBudgetTotal"),
        remainingBudget: calculateTotal("remainingBudgetTotal"),
    };
     
  /*const [chartData, setChartData] = useState({
    labels: ["Initial Budget", "Remaining Budget"],
    datasets: [
      {
        label: "Budget",
        data: [0, 0], // Initial and remaining budget values
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });*/

  /*const [isLoading, setIsLoading] = useState(true);
  const [initialBudgetTotal, setInitialBudgetTotal] = useState(0);
  const [remainingBudgetTotal, setRemainingBudgetTotal] = useState(0);
*/
  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getAllProjects();

        if (projects && projects.length > 0) {
          let initialBudget = 0;
          let remainingBudget = 0;

          projects.forEach((project) => {
            initialBudget += project.initialBudget;
            remainingBudget += project.remainingBudget;
          });

          setInitialBudgetTotal(initialBudget);
          setRemainingBudgetTotal(remainingBudget);

          setChartData({
            labels: ["Initial Budget", "Remaining Budget"],
            datasets: [
              {
                label: "Budget",
                data: [initialBudget, remainingBudget],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                ],
                borderWidth: 1,
              },
            ],
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);*/

  /*const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };*/
/*
  return (
    <div>
      <AdminLayout/>
      
      
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Budget Comparison </h2>
          <div style={{ display: 'flex', justifyContent: 'pace-between', marginBottom: '20px' }}>
          <div>{calculateTotal("initialBudget")} DH</div>
          <div>{calculateTotal("remainingBudget")} DH</div>
            
          </div>
          
        </div>
      
    </div>
  );
}

export default Dashboard;*/
/*last one
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout/>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison </h2>
        <div style={{ display: 'flex', justifyContent: 'pace-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { getAllProjects } from "../../services/project_service";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();

    // Set up WebSocket connection
    const socket = new WebSocket('ws://localhost:8080'); // Update the port if necessary

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setNotifications(prev => [...prev, message]);
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout/>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>

        <div style={{ position: 'fixed', top: '10px', right: '10px', width: '300px' }}>
          <h3>Notifications</h3>
          <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff' }}>
            {notifications.length === 0 ? (
              <p>No notifications</p>
            ) : (
              notifications.map((notification, index) => (
                <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <p><strong>Type:</strong> {notification.type}</p>
                  <p><strong>Data:</strong> {JSON.stringify(notification.data)}</p>
                  <p><strong>Time:</strong> {new Date(notification.timestamp).toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { getAllProjects } from "../../services/project_service";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();

    // Set up WebSocket connection
    const socket = new WebSocket('ws://localhost:8080'); // Update the port if necessary

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setNotifications(prev => [...prev, message]);
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return isNaN(date.getTime()) ? "Invalid Time" : date.toLocaleString();
  };

  const filterData = (data) => {
    const { comment, v_, ...filteredData } = data;
    return filteredData;
  };

  return (
    <div>
      <AdminLayout/>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>

        <div style={{ position: 'fixed', top: '10px', right: '10px', width: '300px' }}>
          <h3>Notifications</h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', backgroundColor: '#fff' }}>
            {notifications.length === 0 ? (
              <p>No notifications</p>
            ) : (
              notifications.map((notification, index) => (
                <div key={index} style={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                  <p><strong>Type:</strong> {notification.type}</p>
                  <p><strong>Data:</strong> {JSON.stringify(filterData(notification.data), null, 2)}</p>
                  <p><strong>Time:</strong> {formatDate(notification.timestamp)}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setNotifications((prev) => [...prev, message]);
    };

    return () => {
      ws.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setNotifications((prev) => [...prev, message]);
      // Store notifications in LocalStorage
      localStorage.setItem('notifications', JSON.stringify([...notifications, message]));
    };

    // Retrieve notifications from LocalStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (storedNotifications) {
      setNotifications(storedNotifications);
    }

    return () => {
      ws.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
*//*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setNotifications((prev) => [...prev, message]);
      // Store notifications in LocalStorage with an expiration time
      const updatedNotifications = [...notifications, message];
      setAndStoreNotifications(updatedNotifications);
      setTimeout(() => {
        // Remove the notification from state and LocalStorage after 1 minute
        const filteredNotifications = updatedNotifications.filter(item => item !== message);
        setAndStoreNotifications(filteredNotifications);
      }, 60000); // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from LocalStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (storedNotifications) {
      setNotifications(storedNotifications);
    }

    return () => {
      ws.close();
    };
  }, []);

  const setAndStoreNotifications = (updatedNotifications) => {
    setNotifications(updatedNotifications);
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setNotifications((prev) => [...prev, message]);

      // Store notifications in LocalStorage with an expiration time
      const updatedNotifications = [...notifications, message];
      setAndStoreNotifications(updatedNotifications);

      // Set timeout to remove notification after 1 minute
      setTimeout(() => {
        const filteredNotifications = updatedNotifications.filter(item => item !== message);
        setAndStoreNotifications(filteredNotifications);
      }, 60000); // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from LocalStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications'));
    if (storedNotifications) {
      setNotifications(storedNotifications);

      // Set timeouts for existing notifications
      storedNotifications.forEach(notification => {
        const expirationTime = new Date(notification.timestamp).getTime() + 60000; // Add 1 minute to each notification's timestamp
        const currentTime = new Date().getTime();
        const timeRemaining = expirationTime - currentTime;

        if (timeRemaining > 0) {
          setTimeout(() => {
            const filteredNotifications = notifications.filter(item => item !== notification);
            setAndStoreNotifications(filteredNotifications);
          }, timeRemaining);
        }
      });
    }

    return () => {
      ws.close();
    };
  }, []);

  const setAndStoreNotifications = (updatedNotifications) => {
    setNotifications(updatedNotifications);
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
*/
/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const notification = { ...message, expiry: new Date().getTime() + 60000 }; // Set expiry time 1 minute from now
      setNotifications(prevNotifications => [...prevNotifications, notification]);

      // Store notifications in localStorage with an expiry time
      const updatedNotifications = [...notifications, notification];
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));

      // Set timeout to remove this specific notification after 1 minute
      setTimeout(() => {
        const filteredNotifications = notifications.filter(item => item.timestamp !== notification.timestamp);
        setNotifications(filteredNotifications);
        localStorage.setItem('notifications', JSON.stringify(filteredNotifications));
      }, 60000); // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const currentTimestamp = new Date().getTime();
    const validNotifications = storedNotifications.filter(notification => notification.expiry > currentTimestamp);
    setNotifications(validNotifications);

    // Set timeouts for existing notifications
    validNotifications.forEach(notification => {
      const timeRemaining = notification.expiry - currentTimestamp;
      if (timeRemaining > 0) {
        setTimeout(() => {
          const filteredNotifications = notifications.filter(item => item.timestamp !== notification.timestamp);
          setNotifications(filteredNotifications);
          localStorage.setItem('notifications', JSON.stringify(filteredNotifications));
        }, timeRemaining);
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
*/
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from '../../components/admin/component.admin.layout';
import { getAllProjects } from "../../services/project_service";
import { getAllBudgetfonctionnels } from "../../services/budgetfonctionnel_service";
import { getTotalQuantity } from "../../services/totalService";
import { getSiegeTotalQuantity } from "../../services/siegetotalService";

import { getAllCasaNords } from "../../services/directions/casanord_service";
import { getAllCasaSuds } from "../../services/directions/casasud_service";
import { getAllDoukkalaAbdas } from "../../services/directions/doukkalaabda_service";
import { getAllFesMekness } from "../../services/directions/fesmeknes_service";
import { getAllHaouzs } from "../../services/directions/haouz_service";
import { getAllNords } from "../../services/directions/nord_service";
import { getAllOrientals } from "../../services/directions/oriental_service";
import { getAllRabatTemaras } from "../../services/directions/rabattemara_service";
import { getAllSaleGharbs } from "../../services/directions/salegharb_service";
import { getAllSuds } from "../../services/directions/sud_service";
import { getAllTadlaOuardighas } from "../../services/directions/tadlaouardigha_service";

import { getAllEstimations } from '../../services/estimation_service';

import './Dashboard.css';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';

import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {  ArcElement } from 'chart.js';


Chart.register(ArcElement);
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [budgetfonctionnels, setBudgetfonctionnels] = useState([]);
  const [totals, setTotals] = useState([]);
  const [siegetotals, setSiegeTotals] = useState([]);
  const [casasuds, setCasasuds] = useState([]);
  const [casanords, setCasanords] = useState([]);
  const [doukkalaabdas, setDoukkalaabdas] = useState([]);
  const [fesmekness, setFesmekness] = useState([]);
  const [haouzs, setHaouzs] = useState([]);
  const [nords, setNords] = useState([]);
  const [orientals, setOrientals] = useState([]);
  const [rabattemaras, setRabattemaras] = useState([]);
  const [salegharbs, setSalegharbs] = useState([]);
  const [suds, setSuds] = useState([]);
  const [tadlaouardighas, setTadlaouardighas] = useState([]);

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const [selectedChart, setSelectedChart] = useState('chart3');

  const [estimatedBudget, setEstimatedBudget] = useState(null);
  const [estimatedBudget1, setEstimatedBudget1] = useState(null);
  const [estimatedBudget2, setEstimatedBudget2] = useState(null);

  const [estimations,setEstimations] = useState([]);
  const [gesinv, setGesinv] = useState(null);
  const [gesfonc, setGesfonc] = useState(null);
  const [gesproj, setGesproj] = useState(null);

  useEffect(() => {
    fetchProjects();
    fetchEstimations();
    fetchBudgetfonctionnels();
    fetchTotals();
    fetchSiegeTotals();
    fetchCasaNords();
    fetchCasaSuds();
    fetchDoukkalaAbdas();
    fetchFesMekness();
    fetchHaouzs();
    fetchNords();
    fetchOrientals();
    fetchRabatTemaras();
    fetchSaleGharbs();
    fetchSuds();
    fetchTadlaOuardighas();    

    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const notification = { ...message, expiry: new Date().getTime() + 60000 }; // Set expiry time 1 minute from now
      setNotifications(prevNotifications => [...prevNotifications, notification]);

      // Store notifications in localStorage with an expiry time
      const updatedNotifications = [...notifications, notification];
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));

      // Set timeout to remove this specific notification after its expiry time
      /*setTimeout(() => {
        removeNotification(notification.timestamp);
      }, 60000);*/ // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const currentTimestamp = new Date().getTime();
    const validNotifications = storedNotifications.filter(notification => notification.expiry > currentTimestamp);
    setNotifications(validNotifications);

    // Set timeouts for existing notifications
    /*validNotifications.forEach(notification => {
      const timeRemaining = notification.expiry - currentTimestamp;
      if (timeRemaining > 0) {
        setTimeout(() => {
          removeNotification(notification.timestamp);
        }, timeRemaining);
      }
    });*/

    return () => {
      ws.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getAllProjects();
      const data = response.data; // Assuming response.data contains the array of projects
      console.log('Fetched projects:', data);
      console.log('Formatted project:', JSON.stringify(data[0].initialBudget, null, 2));

      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchEstimations = async () => {
    try {
      const responsee = await getAllEstimations();
      const dataa = responsee.data; // Assuming response.data contains the array of projects
      console.log('Fetched estimations:', dataa);
      console.log('Formatted estimation:', JSON.stringify(dataa[0].Per, null, 2));
      const gesinv = dataa[0].Per;
      console.log('Formatted estimation:', JSON.stringify(dataa[1].Per, null, 2));
      const gesfonc = dataa[1].Per;
      console.log('Formatted estimation:', JSON.stringify(dataa[2].Per, null, 2));
      const gesproj = dataa[2].Per;
      if (dataa.length >= 3) {
        setGesinv(dataa[0].Per);
        setGesfonc(dataa[1].Per);
        setGesproj(dataa[2].Per);
      }
      setEstimations(dataa);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchBudgetfonctionnels = async () => {
    try {
      const response1 = await getAllBudgetfonctionnels();
      const data1 = response1.data; // Assuming response.data contains the array of projects
      console.log('Fetched budgetfonctionnels:', data1);
      setBudgetfonctionnels(data1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchTotals = async () => {
    const data2 = await getTotalQuantity();
    setTotals(data2);
};

const fetchSiegeTotals = async () => {
    const data3 = await getSiegeTotalQuantity();
    setSiegeTotals(data3);
}

const fetchCasaNords = async () => {
  try {
    const response = await getAllCasaNords();
    const data = response.data; // Verify the data structure
    console.log('Fetched CasaNords:', data);
    setCasanords(data);
  } catch (error) {
    console.error('Error fetching CasaNords:', error);
  }
};
const fetchCasaSuds = async () => {
  try {
    const response = await getAllCasaSuds();
    const data = response.data; // Verify the data structure
    console.log('Fetched CasaSuds:', data);
    setCasasuds(data);
  } catch (error) {
    console.error('Error fetching CasaSuds:', error);
  }
};const fetchDoukkalaAbdas = async () => {
  try {
    const response = await getAllDoukkalaAbdas();
    const data = response.data; // Verify the data structure
    console.log('Fetched DoukkalaAbdas:', data);
    setDoukkalaabdas(data);
  } catch (error) {
    console.error('Error fetching DoukkalaAbdas:', error);
  }
};const fetchFesMekness = async () => {
  try {
    const response = await getAllFesMekness();
    const data = response.data; // Verify the data structure
    console.log('Fetched FesMekness:', data);
    setFesmekness(data);
  } catch (error) {
    console.error('Error fetching FesMekness:', error);
  }
};const fetchHaouzs = async () => {
  try {
    const response = await getAllHaouzs();
    const data = response.data; // Verify the data structure
    console.log('Fetched Haouzs:', data);
    setHaouzs(data);
  } catch (error) {
    console.error('Error fetching Haouzs:', error);
  }
};const fetchNords = async () => {
  try {
    const response = await getAllNords();
    const data = response.data; // Verify the data structure
    console.log('Fetched Nords:', data);
    setNords(data);
  } catch (error) {
    console.error('Error fetching Nords:', error);
  }
};const fetchOrientals = async () => {
  try {
    const response = await getAllOrientals();
    const data = response.data; // Verify the data structure
    console.log('Fetched Orientals:', data);
    setOrientals(data);
  } catch (error) {
    console.error('Error fetching Orientals:', error);
  }
};const fetchRabatTemaras = async () => {
  try {
    const response = await getAllRabatTemaras();
    const data = response.data; // Verify the data structure
    console.log('Fetched RabatTemaras:', data);
    setRabattemaras(data);
  } catch (error) {
    console.error('Error fetching RabatTemaras:', error);
  }
};const fetchSaleGharbs = async () => {
  try {
    const response = await getAllSaleGharbs();
    const data = response.data; // Verify the data structure
    console.log('Fetched SaleGharbs:', data);
    setSalegharbs(data);
  } catch (error) {
    console.error('Error fetching SaleGharbs:', error);
  }
};const fetchSuds = async () => {
  try {
    const response = await getAllSuds();
    const data = response.data; // Verify the data structure
    console.log('Fetched Suds:', data);
    setSuds(data);
  } catch (error) {
    console.error('Error fetching Suds:', error);
  }
};const fetchTadlaOuardighas = async () => {
  try {
    const response = await getAllTadlaOuardighas();
    const data = response.data; // Verify the data structure
    console.log('Fetched TadlaOuardighas:', data);
    setTadlaouardighas(data);
  } catch (error) {
    console.error('Error fetching TadlaOuardighas:', error);
  }
};


//////////////
  const calculateTotalProject = (field) => {
    if (!Array.isArray(projects) || projects.length === 0) {
      return 0;
    }
    return projects.reduce((sum, project) => sum + project[field], 0);
  };
  const calculateTotalBudgetfonctionnel = (field) => {
    if (!Array.isArray(budgetfonctionnels) || budgetfonctionnels.length === 0) {
      return 0;
    }
    return budgetfonctionnels.reduce((sum, budgetfonctionnel) => sum + budgetfonctionnel[field], 0);
  };

  const calculateTotalReseau = (field) => {
    if (!Array.isArray(totals) || totals.length === 0) {
      return 0;
    }
    return totals.reduce((sum, total) => sum + total[field], 0);
  };
  const calculateTotalSiege= (field) => {
    if (!Array.isArray(siegetotals) || siegetotals.length === 0) {
      return 0;
    }
    return siegetotals.reduce((sum, siegetotal) => sum + siegetotal[field], 0);
  };
  const calculateTotalCasanord = (field) => {
    if (!Array.isArray(casanords) || casanords.length === 0) {
      return 0;
    }
    return casanords.reduce((sum, casanord) => sum + casanord[field], 0);
  };
  const calculateTotalCasasud = (field) => {
    if (!Array.isArray(casasuds) || casasuds.length === 0) {
      return 0;
    }
    return casasuds.reduce((sum, casasud) => sum + casasud[field], 0);
  };
  const calculateTotalDoukkala = (field) => {
    if (!Array.isArray(doukkalaabdas) || doukkalaabdas.length === 0) {
      return 0;
    }
    return doukkalaabdas.reduce((sum, doukkalaabda) => sum + doukkalaabda[field], 0);
  };
  const calculateTotalFesmek = (field) => {
    if (!Array.isArray(fesmekness) || fesmekness.length === 0) {
      return 0;
    }
    return fesmekness.reduce((sum, fesmek) => sum + fesmek[field], 0);
  };
  const calculateTotalHaouz = (field) => {
    if (!Array.isArray(haouzs) || haouzs.length === 0) {
      return 0;
    }
    return haouzs.reduce((sum, haouz) => sum + haouz[field], 0);
  };
  const calculateTotalNord = (field) => {
    if (!Array.isArray(nords) || nords.length === 0) {
      return 0;
    }
    return nords.reduce((sum, nord) => sum + nord[field], 0);
  };
  const calculateTotalOriental = (field) => {
    if (!Array.isArray(orientals) || orientals.length === 0) {
      return 0;
    }
    return orientals.reduce((sum, oriental) => sum + oriental[field], 0);
  };
  const calculateTotalRabat = (field) => {
    if (!Array.isArray(rabattemaras) || rabattemaras.length === 0) {
      return 0;
    }
    return rabattemaras.reduce((sum, rabattemaras) => sum + rabattemaras[field], 0);
  };
  const calculateTotalSale = (field) => {
    if (!Array.isArray(salegharbs) || salegharbs.length === 0) {
      return 0;
    }
    return salegharbs.reduce((sum, salegharbs) => sum + salegharbs[field], 0);
  };
  const calculateTotalSud = (field) => {
    if (!Array.isArray(suds) || suds.length === 0) {
      return 0;
    }
    return suds.reduce((sum, sud) => sum + sud[field], 0);
  };
  const calculateTotalTadla = (field) => {
    if (!Array.isArray(tadlaouardighas) || tadlaouardighas.length === 0) {
      return 0;
    }
    return tadlaouardighas.reduce((sum, tadlaouardigha) => sum + tadlaouardigha[field], 0);
  };

  useEffect(() => {
    // Calculate totals when projects change
    const initialBudgetTotal = calculateTotalProject('initialBudget');
    const remainingBudgetTotal = calculateTotalProject('remainingBudget');
    console.log('Initial Budget Total:', initialBudgetTotal);
    console.log('Remaining Budget Total:', remainingBudgetTotal);
  }, [projects]);
  useEffect(() => {
    // Calculate totals when budgetfonctionnels change
    const initialBudgetTotal1 = calculateTotalBudgetfonctionnel('budget');
    const remainingBudgetTotal1 = calculateTotalBudgetfonctionnel('rbudget');
    console.log('Initial Budget Total:', initialBudgetTotal1);
    console.log('Remaining Budget Total:', remainingBudgetTotal1);
  }, [budgetfonctionnels]);

  useEffect(() => {
    // Calculate totals when totals change
    const initialBudgetTotal2 = calculateTotalReseau('Montant');
    console.log('Montant:', initialBudgetTotal2);
  }, [totals]);
  useEffect(() => {
    // Calculate totals when budgetfonctionnels change
    const initialBudgetTotal3 = calculateTotalSiege('montant');
    console.log('montant:', initialBudgetTotal3);
  }, [siegetotals]);
  useEffect(() => {
    // Calculate casanords when budgetfonctionnels change
    const postetravail = calculateTotalCasanord('bpt');
    const pcportable = calculateTotalCasanord('bpp');
    const imprimanteMFP = calculateTotalCasanord('bimfp');
    const imprimanteindividuelle = calculateTotalCasanord('biind');
    const imprimantecouleur = calculateTotalCasanord('bic');
    const scanner = calculateTotalCasanord('bsc');
    const pabx = calculateTotalCasanord('bpabx');
    const postetelefonique = calculateTotalCasanord('bptel');
    const cablageinformatique = calculateTotalCasanord('bci');
    console.log('postetravail:', postetravail);
    console.log('pcportable:', pcportable);
    console.log('imprimanteMFP:', imprimanteMFP);
    console.log('imprimanteindividuelle:', imprimanteindividuelle);
    console.log('imprimantecouleur:', imprimantecouleur);
    console.log('scanner:', scanner);
    console.log('pabx:', pabx);
    console.log('postetelefonique:', postetelefonique);
    console.log('cablageinformatique:', cablageinformatique);

  }, [casanords]);
  useEffect(() => {
    // Calculate casasuds when budgetfonctionnels change
    const postetravail1 = calculateTotalCasasud('bpt');
    const pcportable1 = calculateTotalCasasud('bpp');
    const imprimanteMFP1 = calculateTotalCasasud('bimfp');
    const imprimanteindividuelle1 = calculateTotalCasasud('biind');
    const imprimantecouleur1 = calculateTotalCasasud('bic');
    const scanner1 = calculateTotalCasasud('bsc');
    const pabx1 = calculateTotalCasasud('bpabx');
    const postetelefonique1 = calculateTotalCasasud('bptel');
    const cablageinformatique1 = calculateTotalCasasud('bci');
    console.log('postetravail:', postetravail1);
    console.log('pcportable:', pcportable1);
    console.log('imprimanteMFP:', imprimanteMFP1);
    console.log('imprimanteindividuelle:', imprimanteindividuelle1);
    console.log('imprimantecouleur:', imprimantecouleur1);
    console.log('scanner:', scanner1);
    console.log('pabx:', pabx1);
    console.log('postetelefonique:', postetelefonique1);
    console.log('cablageinformatique:', cablageinformatique1);

  }, [casasuds]);
  useEffect(() => {
    // Calculate doukkalaabdas when budgetfonctionnels change
    const postetravail2 = calculateTotalDoukkala('bpt');
    const pcportable2 = calculateTotalDoukkala('bpp');
    const imprimanteMFP2 = calculateTotalDoukkala('bimfp');
    const imprimanteindividuelle2 = calculateTotalDoukkala('biind');
    const imprimantecouleur2 = calculateTotalDoukkala('bic');
    const scanner2 = calculateTotalDoukkala('bsc');
    const pabx2 = calculateTotalDoukkala('bpabx');
    const postetelefonique2 = calculateTotalDoukkala('bptel');
    const cablageinformatique2 = calculateTotalDoukkala('bci');
    console.log('postetravail:', postetravail2);
    console.log('pcportable:', pcportable2);
    console.log('imprimanteMFP:', imprimanteMFP2);
    console.log('imprimanteindividuelle:', imprimanteindividuelle2);
    console.log('imprimantecouleur:', imprimantecouleur2);
    console.log('scanner:', scanner2);
    console.log('pabx:', pabx2);
    console.log('postetelefonique:', postetelefonique2);
    console.log('cablageinformatique:', cablageinformatique2);

  }, [doukkalaabdas]);useEffect(() => {
    // Calculate fesmekness when budgetfonctionnels change
    const postetravail3 = calculateTotalFesmek('bpt');
    const pcportable3 = calculateTotalFesmek('bpp');
    const imprimanteMFP3 = calculateTotalFesmek('bimfp');
    const imprimanteindividuelle3 = calculateTotalFesmek('biind');
    const imprimantecouleur3 = calculateTotalFesmek('bic');
    const scanner3 = calculateTotalFesmek('bsc');
    const pabx3 = calculateTotalFesmek('bpabx');
    const postetelefonique3 = calculateTotalFesmek('bptel');
    const cablageinformatique3 = calculateTotalFesmek('bci');
    console.log('postetravail:', postetravail3);
    console.log('pcportable:', pcportable3);
    console.log('imprimanteMFP:', imprimanteMFP3);
    console.log('imprimanteindividuelle:', imprimanteindividuelle3);
    console.log('imprimantecouleur:', imprimantecouleur3);
    console.log('scanner:', scanner3);
    console.log('pabx:', pabx3);
    console.log('postetelefonique:', postetelefonique3);
    console.log('cablageinformatique:', cablageinformatique3);

  }, [fesmekness]);useEffect(() => {
    // Calculate haouzs when budgetfonctionnels change
    const postetravail4 = calculateTotalHaouz('bpt');
    const pcportable4 = calculateTotalHaouz('bpp');
    const imprimanteMFP4 = calculateTotalHaouz('bimfp');
    const imprimanteindividuelle4 = calculateTotalHaouz('biind');
    const imprimantecouleur4 = calculateTotalHaouz('bic');
    const scanner4 = calculateTotalHaouz('bsc');
    const pabx4 = calculateTotalHaouz('bpabx');
    const postetelefonique4 = calculateTotalHaouz('bptel');
    const cablageinformatique4 = calculateTotalHaouz('bci');
    console.log('postetravail:', postetravail4);
    console.log('pcportable:', pcportable4);
    console.log('imprimanteMFP:', imprimanteMFP4);
    console.log('imprimanteindividuelle:', imprimanteindividuelle4);
    console.log('imprimantecouleur:', imprimantecouleur4);
    console.log('scanner:', scanner4);
    console.log('pabx:', pabx4);
    console.log('postetelefonique:', postetelefonique4);
    console.log('cablageinformatique:', cablageinformatique4);

  }, [haouzs]);useEffect(() => {
    // Calculate nords when budgetfonctionnels change
    const postetravail5 = calculateTotalNord('bpt');
    const pcportable5 = calculateTotalNord('bpp');
    const imprimanteMFP5 = calculateTotalNord('bimfp');
    const imprimanteindividuelle5 = calculateTotalNord('biind');
    const imprimantecouleur5 = calculateTotalNord('bic');
    const scanner5 = calculateTotalNord('bsc');
    const pabx5 = calculateTotalNord('bpabx');
    const postetelefonique5 = calculateTotalNord('bptel');
    const cablageinformatique5 = calculateTotalNord('bci');
    console.log('postetravail:', postetravail5);
    console.log('pcportable:', pcportable5);
    console.log('imprimanteMFP:', imprimanteMFP5);
    console.log('imprimanteindividuelle:', imprimanteindividuelle5);
    console.log('imprimantecouleur:', imprimantecouleur5);
    console.log('scanner:', scanner5);
    console.log('pabx:', pabx5);
    console.log('postetelefonique:', postetelefonique5);
    console.log('cablageinformatique:', cablageinformatique5);

  }, [nords]);useEffect(() => {
    // Calculate orientals when budgetfonctionnels change
    const postetravail6 = calculateTotalOriental('bpt');
    const pcportable6 = calculateTotalOriental('bpp');
    const imprimanteMFP6 = calculateTotalOriental('bimfp');
    const imprimanteindividuelle6 = calculateTotalOriental('biind');
    const imprimantecouleur6 = calculateTotalOriental('bic');
    const scanner6 = calculateTotalOriental('bsc');
    const pabx6 = calculateTotalOriental('bpabx');
    const postetelefonique6 = calculateTotalOriental('bptel');
    const cablageinformatique6 = calculateTotalOriental('bci');
    console.log('postetravail:', postetravail6);
    console.log('pcportable:', pcportable6);
    console.log('imprimanteMFP:', imprimanteMFP6);
    console.log('imprimanteindividuelle:', imprimanteindividuelle6);
    console.log('imprimantecouleur:', imprimantecouleur6);
    console.log('scanner:', scanner6);
    console.log('pabx:', pabx6);
    console.log('postetelefonique:', postetelefonique6);
    console.log('cablageinformatique:', cablageinformatique6);

  }, [orientals]);
    useEffect(() => {
    // Calculate rabattemaras when budgetfonctionnels change
    const postetravail7 = calculateTotalRabat('bpt');
    const pcportable7 = calculateTotalRabat('bpp');
    const imprimanteMFP7 = calculateTotalRabat('bimfp');
    const imprimanteindividuelle7 = calculateTotalRabat('biind');
    const imprimantecouleur7 = calculateTotalRabat('bic');
    const scanner7 = calculateTotalRabat('bsc');
    const pabx7 = calculateTotalRabat('bpabx');
    const postetelefonique7 = calculateTotalRabat('bptel');
    const cablageinformatique7 = calculateTotalRabat('bci');
    console.log('postetravail:', postetravail7);
    console.log('pcportable:', pcportable7);
    console.log('imprimanteMFP:', imprimanteMFP7);
    console.log('imprimanteindividuelle:', imprimanteindividuelle7);
    console.log('imprimantecouleur:', imprimantecouleur7);
    console.log('scanner:', scanner7);
    console.log('pabx:', pabx7);
    console.log('postetelefonique:', postetelefonique7);
    console.log('cablageinformatique:', cablageinformatique7);

  }, [rabattemaras]);
  useEffect(() => {
    // Calculate salegharbs when budgetfonctionnels change
    const postetravail8 = calculateTotalSale('bpt');
    const pcportable8 = calculateTotalSale('bpp');
    const imprimanteMFP8 = calculateTotalSale('bimfp');
    const imprimanteindividuelle8 = calculateTotalSale('biind');
    const imprimantecouleur8 = calculateTotalSale('bic');
    const scanner8 = calculateTotalSale('bsc');
    const pabx8 = calculateTotalSale('bpabx');
    const postetelefonique8 = calculateTotalSale('bptel');
    const cablageinformatique8 = calculateTotalSale('bci');
    console.log('postetravail:', postetravail8);
    console.log('pcportable:', pcportable8);
    console.log('imprimanteMFP:', imprimanteMFP8);
    console.log('imprimanteindividuelle:', imprimanteindividuelle8);
    console.log('imprimantecouleur:', imprimantecouleur8);
    console.log('scanner:', scanner8);
    console.log('pabx:', pabx8);
    console.log('postetelefonique:', postetelefonique8);
    console.log('cablageinformatique:', cablageinformatique8);

  }, [salegharbs]);
  useEffect(() => {
    // Calculate suds when budgetfonctionnels change
    const postetravail9 = calculateTotalSud('bpt');
    const pcportable9 = calculateTotalSud('bpp');
    const imprimanteMFP9 = calculateTotalSud('bimfp');
    const imprimanteindividuelle9 = calculateTotalSud('biind');
    const imprimantecouleur9 = calculateTotalSud('bic');
    const scanner9 = calculateTotalSud('bsc');
    const pabx9 = calculateTotalSud('bpabx');
    const postetelefonique9 = calculateTotalSud('bptel');
    const cablageinformatique9 = calculateTotalSud('bci');
    console.log('postetravail:', postetravail9);
    console.log('pcportable:', pcportable9);
    console.log('imprimanteMFP:', imprimanteMFP9);
    console.log('imprimanteindividuelle:', imprimanteindividuelle9);
    console.log('imprimantecouleur:', imprimantecouleur9);
    console.log('scanner:', scanner9);
    console.log('pabx:', pabx9);
    console.log('postetelefonique:', postetelefonique9);
    console.log('cablageinformatique:', cablageinformatique9);

  }, [suds]);
  useEffect(() => {
    // Calculate tadlaouardighas when budgetfonctionnels change
    const postetravail10 = calculateTotalTadla('bpt');
    const pcportable10 = calculateTotalTadla('bpp');
    const imprimanteMFP10 = calculateTotalTadla('bimfp');
    const imprimanteindividuelle10 = calculateTotalTadla('biind');
    const imprimantecouleur10 = calculateTotalTadla('bic');
    const scanner10 = calculateTotalTadla('bsc');
    const pabx10 = calculateTotalTadla('bpabx');
    const postetelefonique10 = calculateTotalTadla('bptel');
    const cablageinformatique10 = calculateTotalTadla('bci');
    console.log('postetravail:', postetravail10);
    console.log('pcportable:', pcportable10);
    console.log('imprimanteMFP:', imprimanteMFP10);
    console.log('imprimanteindividuelle:', imprimanteindividuelle10);
    console.log('imprimantecouleur:', imprimantecouleur10);
    console.log('scanner:', scanner10);
    console.log('pabx:', pabx10);
    console.log('postetelefonique:', postetelefonique10);
    console.log('cablageinformatique:', cablageinformatique10);

  }, [tadlaouardighas]);
  
/////////
  const removeNotification = (timestamp) => {
    const filteredNotifications = notifications.filter(notification => notification.timestamp !== timestamp);
    setNotifications(filteredNotifications);
    localStorage.setItem('notifications', JSON.stringify(filteredNotifications));
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const initialBudgetTotal = calculateTotalProject('initialBudget');
  const remainingBudgetTotal = calculateTotalProject('remainingBudget');
  const initialBudgetTotal1 = calculateTotalBudgetfonctionnel('budget');
  const remainingBudgetTotal1 = calculateTotalBudgetfonctionnel('rbudget');
  const initialBudgetTotal2 = calculateTotalReseau('Montant');
  const initialBudgetTotal3 = calculateTotalSiege('montant');
////
const postetravail = calculateTotalCasanord('bpt');
    const pcportable = calculateTotalCasanord('bpp');
    const imprimanteMFP = calculateTotalCasanord('bimfp');
    const imprimanteindividuelle = calculateTotalCasanord('biind');
    const imprimantecouleur = calculateTotalCasanord('bic');
    const scanner = calculateTotalCasanord('bsc');
    const pabx = calculateTotalCasanord('bpabx');
    const postetelefonique = calculateTotalCasanord('bptel');
    const cablageinformatique = calculateTotalCasanord('bci');

const postetravail1 = calculateTotalCasasud('bpt');
    const pcportable1 = calculateTotalCasasud('bpp');
    const imprimanteMFP1 = calculateTotalCasasud('bimfp');
    const imprimanteindividuelle1 = calculateTotalCasasud('biind');
    const imprimantecouleur1 = calculateTotalCasasud('bic');
    const scanner1 = calculateTotalCasasud('bsc');
    const pabx1 = calculateTotalCasasud('bpabx');
    const postetelefonique1 = calculateTotalCasasud('bptel');
    const cablageinformatique1 = calculateTotalCasasud('bci');

const postetravail2 = calculateTotalDoukkala('bpt');
    const pcportable2 = calculateTotalDoukkala('bpp');
    const imprimanteMFP2 = calculateTotalDoukkala('bimfp');
    const imprimanteindividuelle2 = calculateTotalDoukkala('biind');
    const imprimantecouleur2 = calculateTotalDoukkala('bic');
    const scanner2 = calculateTotalDoukkala('bsc');
    const pabx2 = calculateTotalDoukkala('bpabx');
    const postetelefonique2 = calculateTotalDoukkala('bptel');
    const cablageinformatique2 = calculateTotalDoukkala('bci');

const postetravail3 = calculateTotalFesmek('bpt');
    const pcportable3 = calculateTotalFesmek('bpp');
    const imprimanteMFP3 = calculateTotalFesmek('bimfp');
    const imprimanteindividuelle3 = calculateTotalFesmek('biind');
    const imprimantecouleur3 = calculateTotalFesmek('bic');
    const scanner3 = calculateTotalFesmek('bsc');
    const pabx3 = calculateTotalFesmek('bpabx');
    const postetelefonique3 = calculateTotalFesmek('bptel');
    const cablageinformatique3 = calculateTotalFesmek('bci');

const postetravail4 = calculateTotalHaouz('bpt');
const pcportable4 = calculateTotalHaouz('bpp');
const imprimanteMFP4 = calculateTotalHaouz('bimfp');
const imprimanteindividuelle4 = calculateTotalHaouz('biind');
const imprimantecouleur4 = calculateTotalHaouz('bic');
const scanner4 = calculateTotalHaouz('bsc');
const pabx4 = calculateTotalHaouz('bpabx');
const postetelefonique4 = calculateTotalHaouz('bptel');
const cablageinformatique4 = calculateTotalHaouz('bci');

const postetravail5 = calculateTotalNord('bpt');
    const pcportable5 = calculateTotalNord('bpp');
    const imprimanteMFP5 = calculateTotalNord('bimfp');
    const imprimanteindividuelle5 = calculateTotalNord('biind');
    const imprimantecouleur5 = calculateTotalNord('bic');
    const scanner5 = calculateTotalNord('bsc');
    const pabx5 = calculateTotalNord('bpabx');
    const postetelefonique5 = calculateTotalNord('bptel');
    const cablageinformatique5 = calculateTotalNord('bci');

const postetravail6 = calculateTotalOriental('bpt');
    const pcportable6 = calculateTotalOriental('bpp');
    const imprimanteMFP6 = calculateTotalOriental('bimfp');
    const imprimanteindividuelle6 = calculateTotalOriental('biind');
    const imprimantecouleur6 = calculateTotalOriental('bic');
    const scanner6 = calculateTotalOriental('bsc');
    const pabx6 = calculateTotalOriental('bpabx');
    const postetelefonique6 = calculateTotalOriental('bptel');
    const cablageinformatique6 = calculateTotalOriental('bci');

const postetravail7 = calculateTotalRabat('bpt');
    const pcportable7 = calculateTotalRabat('bpp');
    const imprimanteMFP7 = calculateTotalRabat('bimfp');
    const imprimanteindividuelle7 = calculateTotalRabat('biind');
    const imprimantecouleur7 = calculateTotalRabat('bic');
    const scanner7 = calculateTotalRabat('bsc');
    const pabx7 = calculateTotalRabat('bpabx');
    const postetelefonique7 = calculateTotalRabat('bptel');
    const cablageinformatique7 = calculateTotalRabat('bci');

const postetravail8 = calculateTotalSale('bpt');
    const pcportable8 = calculateTotalSale('bpp');
    const imprimanteMFP8 = calculateTotalSale('bimfp');
    const imprimanteindividuelle8 = calculateTotalSale('biind');
    const imprimantecouleur8 = calculateTotalSale('bic');
    const scanner8 = calculateTotalSale('bsc');
    const pabx8 = calculateTotalSale('bpabx');
    const postetelefonique8 = calculateTotalSale('bptel');
    const cablageinformatique8 = calculateTotalSale('bci');

const postetravail9 = calculateTotalSud('bpt');
    const pcportable9 = calculateTotalSud('bpp');
    const imprimanteMFP9 = calculateTotalSud('bimfp');
    const imprimanteindividuelle9 = calculateTotalSud('biind');
    const imprimantecouleur9 = calculateTotalSud('bic');
    const scanner9 = calculateTotalSud('bsc');
    const pabx9 = calculateTotalSud('bpabx');
    const postetelefonique9 = calculateTotalSud('bptel');
    const cablageinformatique9 = calculateTotalSud('bci');

const postetravail10 = calculateTotalTadla('bpt');
    const pcportable10 = calculateTotalTadla('bpp');
    const imprimanteMFP10 = calculateTotalTadla('bimfp');
    const imprimanteindividuelle10 = calculateTotalTadla('biind');
    const imprimantecouleur10 = calculateTotalTadla('bic');
    const scanner10 = calculateTotalTadla('bsc');
    const pabx10 = calculateTotalTadla('bpabx');
    const postetelefonique10 = calculateTotalTadla('bptel');
    const cablageinformatique10 = calculateTotalTadla('bci');
////
  const chartData = {
    labels: ['Total Initial Budget', 'Total Remaining Budget'],
    datasets: [
      {
        label: 'Budget (DH)',
        data: [initialBudgetTotal, remainingBudgetTotal],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle = {
    width: '400px', // Adjust the width as per your requirement
    height: '500px', // Adjust the height as per your requirement
    margin: '50px', 
    

   /* display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '400px', // Adjust the width as needed
    margin: '0 auto',*/
  };

  const buttonStyle = {
    position: 'absolute',
    top: '720px',
    right: '950px', // Adjust this value to position the button correctly
  };
  const buttonStyle1 = {
    position: 'absolute',
    top: '1180px',
    right: '950px', // Adjust this value to position the button correctly
  };const buttonStyle2 = {
    position: 'absolute',
    top: '1140px',
    right: '450px', // Adjust this value to position the button correctly
  };

  const chartData1 = {
    labels: ['Total Initial Budget', 'Total Remaining Budget'],
    datasets: [
      {
        label: 'Budget (DH)',
        data: [initialBudgetTotal1, remainingBudgetTotal1],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions1 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle1 = {
    width: '400px', // Adjust the width as per your requirement
    height: '340px', // Adjust the height as per your requirement
    margin: '50px', 

  };

  const chartData2 = {
    labels: ['Total Montant Reseau', 'Total Montant Siege'],
    datasets: [
      {
        label: 'Budget (DH)',
        data: [initialBudgetTotal2, initialBudgetTotal3],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions2 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle2 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
    margin: '50px',
    marginRight: '350px', 

  };
  /////////
  const chartData3 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail, pcportable ,imprimanteMFP,imprimanteindividuelle,
          imprimantecouleur,scanner,pabx,postetelefonique,cablageinformatique ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions3 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle3 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData4 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail1, pcportable1 ,imprimanteMFP1,imprimanteindividuelle1,
          imprimantecouleur1,scanner1,pabx1,postetelefonique1,cablageinformatique1 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions4 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle4 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData5 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail2, pcportable2 ,imprimanteMFP2,imprimanteindividuelle2,
          imprimantecouleur2,scanner2,pabx2,postetelefonique2,cablageinformatique2 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions5 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle5 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData6 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels ',
        data: [postetravail3, pcportable3 ,imprimanteMFP3,imprimanteindividuelle3,
          imprimantecouleur3,scanner3,pabx3,postetelefonique3,cablageinformatique3 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions6 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle6 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData7 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels ',
        data: [postetravail4, pcportable4 ,imprimanteMFP4,imprimanteindividuelle4,
          imprimantecouleur4,scanner4,pabx4,postetelefonique4,cablageinformatique4 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions7 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle7 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData8 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail5, pcportable5 ,imprimanteMFP5,imprimanteindividuelle5,
          imprimantecouleur5,scanner5,pabx5,postetelefonique5,cablageinformatique5 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions8 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle8 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData9 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail6, pcportable6 ,imprimanteMFP6,imprimanteindividuelle6,
          imprimantecouleur6,scanner6,pabx6,postetelefonique6,cablageinformatique6 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions9 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle9 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData10 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail7, pcportable7 ,imprimanteMFP7,imprimanteindividuelle7,
          imprimantecouleur7,scanner7,pabx7,postetelefonique7,cablageinformatique7 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions10 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle10 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData11 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail8, pcportable8 ,imprimanteMFP8,imprimanteindividuelle8,
          imprimantecouleur8,scanner8,pabx8,postetelefonique8,cablageinformatique8 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions11 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle11 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData12 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels ',
        data: [postetravail9, pcportable9 ,imprimanteMFP9,imprimanteindividuelle9,
          imprimantecouleur9,scanner9,pabx9,postetelefonique9,cablageinformatique9 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions12 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle12 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  const chartData13 = {
    labels: ['Total Poste Travail', 'Pc Portable','Imprimante MFP','Imprimante individuelle',
      'Imprimante Couleur','Scanner','Pabx','Poste Telephonique','Cablage Informatique'],
    datasets: [ 
      {
        label: 'Materiels',
        data: [postetravail10, pcportable10 ,imprimanteMFP10,imprimanteindividuelle10,
          imprimantecouleur10,scanner10,pabx10,postetelefonique10,cablageinformatique10 ],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions13 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const chartContainerStyle13 = {
    width: '400px', // Adjust the width as per your requirement
    height: '300px', // Adjust the height as per your requirement
  };
  ///////
  const chartContainerStyle14 = { width: '600px', height: '400px', marginTop: '20px',marginRight:'180px' };

  const chartData14 = {
    chart3: { data: chartData3, options: chartOptions3 },
    chart4: { data: chartData4, options: chartOptions4 },
    chart5: { data: chartData5, options: chartOptions5 },
    chart6: { data: chartData6, options: chartOptions6 },
    chart7: { data: chartData7, options: chartOptions7 },
    chart8: { data: chartData8, options: chartOptions8 },
    chart9: { data: chartData9, options: chartOptions9 },
    chart10: { data: chartData10, options: chartOptions10 },
    chart11: { data: chartData11, options: chartOptions11 },
    chart12: { data: chartData12, options: chartOptions12 },
    chart13: { data: chartData13, options: chartOptions13 },
  };

  const handleChange = (e) => {
    setSelectedChart(e.target.value);
  };

  const calculateEstimatedBudget = () => {
    if (gesinv !== null && initialBudgetTotal2 !== null && initialBudgetTotal3 !== null) {
      const estimatedBudget = (initialBudgetTotal2 + initialBudgetTotal3)+(((initialBudgetTotal2 + initialBudgetTotal3) * gesinv)/100);
      setEstimatedBudget(estimatedBudget);
    }
  };
  const calculateEstimatedBudget2 = () => {
    if (gesfonc !== null && initialBudgetTotal1 !== null) {
      const estimatedBudget1 = (initialBudgetTotal1)+ ((initialBudgetTotal1 * gesfonc)/100);
      setEstimatedBudget1(estimatedBudget1);
    }
  };
  const calculateEstimatedBudget3 = () => {
    if (gesproj !== null && initialBudgetTotal !== null) {
      const estimatedBudget2 = (initialBudgetTotal) + ((initialBudgetTotal * gesproj)/100);
      setEstimatedBudget2(estimatedBudget2);
    }
  };

  return (
    <div>
      <AdminLayout />
     {/* */}
     {/*<div>
      <div className="top-section">
        <div>
         <h2 className='mt-2'> Budget S.I :<i>{initialBudgetTotal2 + initialBudgetTotal3+initialBudgetTotal1+initialBudgetTotal}
         Dh</i></h2>
        </div>
        <div>
        <Link style={{marginLeft:''}} className="mt-1 btn btn-info" to={"/admin/estimations"}>Estimation</Link>
        </div>
        <div className="chart-container" style={chartContainerStyle}>
              <h2>Budget Investissement</h2>
            <h6>Budget Actuel: {initialBudgetTotal2 + initialBudgetTotal3}Dh</h6>
            <Doughnut data={chartData2} options={chartOptions2} />
            <button className='btn btn-warning' style={buttonStyle} onClick={calculateEstimatedBudget}>
              Calculate Estimated Budget : {gesinv}%
            </button>
            {estimatedBudget && (
              <h6 style={{position: 'absolute',
                top: '780px',
                right: '880px',}}><strong>Estimated Budget Investissement: </strong>{estimatedBudget.toFixed(2)}Dh</h6>
            )}
            
          </div>
        {/**//*}
        <div className="materiels-container">
          <div className="dropdown-container">
            <select value={selectedChart} onChange={handleChange}>
              <option value="chart3">Casanord</option>
              <option value="chart4">Casasud</option>
              <option value="chart5">Doukkalaabda</option>
              <option value="chart6">Fesmeknes</option>
              <option value="chart7">Haouz</option>
              <option value="chart8">Nord</option>
              <option value="chart9">Oriental</option>
              <option value="chart10">Rabat Temara</option>
              <option value="chart11">Sale Gharb</option>
              <option value="chart12">Sud</option>
              <option value="chart13">Tadla Ouardigha</option>
            </select>
          </div>
          <div className="chart-container" style={chartContainerStyle14}>
            <h2>Materiels</h2>
            <Bar data={chartData14[selectedChart].data} options={chartData14[selectedChart].options} />
          </div>
        </div>
      </div>

      <div className="middle-section">
        <div className="chart-container" style={chartContainerStyle1}>
          <h2>Budget de Fonctionnement</h2>
          <h6>Budget Actuel: {initialBudgetTotal1}Dh</h6>
          <Bar data={chartData1} options={chartOptions1} />
          <button className='btn btn-warning' style={buttonStyle1} onClick={calculateEstimatedBudget2}>
              Calculate Estimated Budget : {gesfonc}%
            </button>
            {estimatedBudget1 && (
              <h6 style={{position: 'absolute',
                top: '1340px',
                right: '450px',}}><strong>Estimated Budget de Fonctionnement: </strong>{estimatedBudget1.toFixed(2)}Dh</h6>
            )}
        </div>
      </div>

      <div className="bottom-section">
        <div className="chart-container" style={chartContainerStyle2}>
          <h2>Budget Projects</h2>
          <h6>Budget Actuel: {initialBudgetTotal}Dh</h6>
          <Bar data={chartData} options={chartOptions} />
          <button className='btn btn-warning' style={buttonStyle2} onClick={calculateEstimatedBudget3}>
              Calculate Estimated Budget : {gesproj}%
            </button>
            {estimatedBudget2 && (
              <h6 style={{position: 'absolute',
                top: '1740px',
                right: '500px',}}><strong>Estimated Budget Projects: </strong>{estimatedBudget2.toFixed(2)}Dh</h6>
            )}
        </div>
      </div>
    </div> */}
      {/*
      */}
<div className="top-section">
        <div>
         <h2 className='mt-2'> Budget S.I :<i>{initialBudgetTotal2 + initialBudgetTotal3+initialBudgetTotal1+initialBudgetTotal}
         Dh</i></h2>
        </div>
        <div>
        <Link style={{marginLeft:''}} className="mt-1 btn btn-info" to={"/admin/estimations"}>Estimation</Link>
        </div>
      <div className="top-section-graphs" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="chart-container" style={chartContainerStyle}>
            <h2>Budget Investissement</h2>
            <h6>Budget Actuel: {initialBudgetTotal2 + initialBudgetTotal3} Dh</h6>
            <Doughnut data={chartData2} options={chartOptions2} />
            <button className='btn btn-warning' style={buttonStyle} onClick={calculateEstimatedBudget}>
              Calculate Estimated Budget: {gesinv}%
            </button>
            {estimatedBudget && (
              <h6 style={{ position: 'absolute', top: '780px', right: '880px' }}>
                <strong>Estimated Budget Investissement: </strong>{estimatedBudget.toFixed(2)} Dh
              </h6>
            )}
          </div>
          <div className="materiels-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="dropdown-container">
              <select value={selectedChart} onChange={handleChange}>
                <option value="chart3">Casanord</option>
                <option value="chart4">Casasud</option>
                <option value="chart5">Doukkalaabda</option>
                <option value="chart6">Fesmeknes</option>
                <option value="chart7">Haouz</option>
                <option value="chart8">Nord</option>
                <option value="chart9">Oriental</option>
                <option value="chart10">Rabat Temara</option>
                <option value="chart11">Sale Gharb</option>
                <option value="chart12">Sud</option>
                <option value="chart13">Tadla Ouardigha</option>
              </select>
            </div>
            <div className="chart-container" style={chartContainerStyle14}>
              <h2>Materiels</h2>
              <Bar data={chartData14[selectedChart].data} options={chartData14[selectedChart].options} />
            </div>
          </div>
        </div>
      
      <div className="middle-bottom-section" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div className="chart-container" style={chartContainerStyle1}>
          <h2>Budget de Fonctionnement</h2>
          <h6>Budget Actuel: {initialBudgetTotal1} Dh</h6>
          <Bar data={chartData1} options={chartOptions1} />
          <button className='btn btn-warning' style={buttonStyle1} onClick={calculateEstimatedBudget2}>
            Calculate Estimated Budget: {gesfonc}%
          </button>
          {estimatedBudget1 && (
            <h6 style={{ position: 'absolute', top: '1230px', right: '870px' }}>
              <strong>Estimated Budget de Fonctionnement: </strong>{estimatedBudget1.toFixed(2)} Dh
            </h6>
          )}
        </div>
        <div className="chart-container" style={chartContainerStyle2}>
          <h2>Budget Projects</h2>
          <h6>Budget Actuel: {initialBudgetTotal} Dh</h6>
          <Bar data={chartData} options={chartOptions} />
          <button className='btn btn-warning' style={buttonStyle2} onClick={calculateEstimatedBudget3}>
            Calculate Estimated Budget: {gesproj}%
          </button>
          {estimatedBudget2 && (
            <h6 style={{ position: 'absolute', top: '1200px', right: '420px' }}>
              <strong>Estimated Budget Projects: </strong>{estimatedBudget2.toFixed(2)} Dh
            </h6>
          )}
        </div>
      </div>
  </div>

      {/* */}
{/*<div className="top-section">
        <div>
          <h2 className='mt-2'> Budget S.I :<i>{initialBudgetTotal2 + initialBudgetTotal3 + initialBudgetTotal1 + initialBudgetTotal}Dh</i></h2>
        </div>
        <div>
          <Link style={{ marginTop: '10px' }} className="mt-4 btn btn-info" to={"/admin/estimations"}>Estimation</Link>
        </div>
        <div className="top-section-graphs">
          <div className="chart-container" style={chartContainerStyle}>
            <h2>Budget Investissement</h2>
            <h6>Budget Actuel: {initialBudgetTotal2 + initialBudgetTotal3}Dh</h6>
            <Doughnut data={chartData2} options={chartOptions2} />
            <button className='btn btn-warning' style={buttonStyle} onClick={calculateEstimatedBudget}>
              Calculate Estimated Budget : {gesinv}%
            </button>
            {estimatedBudget && (
              <h6 style={{
                position: 'absolute',
                top: '780px',
                right: '880px',
              }}><strong>Estimated Budget Investissement: </strong>{estimatedBudget.toFixed(2)}Dh</h6>
            )}
          </div>
          <div className="materiels-container">
            <div className="dropdown-container">
              <select value={selectedChart} onChange={handleChange}>
                <option value="chart3">Casanord</option>
                <option value="chart4">Casasud</option>
                <option value="chart5">Doukkalaabda</option>
                <option value="chart6">Fesmeknes</option>
                <option value="chart7">Haouz</option>
                <option value="chart8">Nord</option>
                <option value="chart9">Oriental</option>
                <option value="chart10">Rabat Temara</option>
                <option value="chart11">Sale Gharb</option>
                <option value="chart12">Sud</option>
                <option value="chart13">Tadla Ouardigha</option>
              </select>
            </div>
            <div className="chart-container" style={chartContainerStyle14}>
              <h2>Materiels</h2>
              <Bar data={chartData14[selectedChart].data} options={chartData14[selectedChart].options} />
            </div>
          </div>
        </div>
      </div>

      <div className="middle-section">
        <div className="chart-container" style={chartContainerStyle1}>
          <h2>Budget de Fonctionnement</h2>
          <h6>Budget Actuel: {initialBudgetTotal1}Dh</h6>
          <Bar data={chartData1} options={chartOptions1} />
          <button className='btn btn-warning' style={buttonStyle1} onClick={calculateEstimatedBudget2}>
            Calculate Estimated Budget : {gesfonc}%
          </button>
          {estimatedBudget1 && (
            <h6 style={{
              position: 'absolute',
              top: '1340px',
              right: '450px',
            }}><strong>Estimated Budget de Fonctionnement: </strong>{estimatedBudget1.toFixed(2)}Dh</h6>
          )}
        </div>
      </div>

      <div className="bottom-section">
        <div className="chart-container" style={chartContainerStyle2}>
          <h2>Budget Projects</h2>
          <h6>Budget Actuel: {initialBudgetTotal}Dh</h6>
          <Bar data={chartData} options={chartOptions} />
          <button className='btn btn-warning' style={buttonStyle2} onClick={calculateEstimatedBudget3}>
            Calculate Estimated Budget : {gesproj}%
          </button>
          {estimatedBudget2 && (
            <h6 style={{
              position: 'absolute',
              top: '1740px',
              right: '500px',
            }}><strong>Estimated Budget Projects: </strong>{estimatedBudget2.toFixed(2)}Dh</h6>
          )}
        </div>
      </div>*/}
      {/* */}

          {/**/}
           <div className="notifications">
        <div className="button-container">
          <button className="notifications-button" onClick={toggleNotifications}>
            Notifications : {notifications.length}
          </button>
        </div>
        {showNotifications && notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Informations:
              <ul>
              <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: <strong>{notification.data.bpt}</strong></li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: <strong>{notification.data.bpp}</strong></li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: <strong>{notification.data.bimfp}</strong></li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: <strong>{notification.data.biindl}</strong></li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: <strong>{notification.data.bic}</strong></li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: <strong>{notification.data.bsc}</strong></li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: <strong>{notification.data.bpabx}</strong></li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: <strong>{notification.data.bptel}</strong></li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: <strong>{notification.data.bci}</strong></li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;





/*import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const notification = { ...message, expiry: new Date().getTime() + 60000 }; // Set expiry time 1 minute from now
      setNotifications(prevNotifications => [...prevNotifications, notification]);

      // Store notifications in localStorage with an expiry time
      const updatedNotifications = [...notifications, notification];
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));

      // Set timeout to remove this specific notification after its expiry time
      setTimeout(() => {
        removeNotification(notification.timestamp);
      }, 60000); // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const currentTimestamp = new Date().getTime();
    const validNotifications = storedNotifications.filter(notification => notification.expiry > currentTimestamp);
    setNotifications(validNotifications);

    // Set timeouts for existing notifications
    validNotifications.forEach(notification => {
      const timeRemaining = notification.expiry - currentTimestamp;
      if (timeRemaining > 0) {
        setTimeout(() => {
          removeNotification(notification.timestamp);
        }, timeRemaining);
      }
    });

    return () => {
      ws.close();
    };
  }, []);
  

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      console.log('Fetched projects:', data); // Log fetched projects data
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const calculateTotal = (field) => {
    console.log('Projects:', projects); // Log projects to verify its contents
    return projects.reduce((sum, project) => {
      console.log('Project:', project); // Log each project to verify its structure
      return sum + project[field];
    }, 0);
  };
  
useEffect(() => {
  const initialBudgetTotal = calculateTotal('initialBudget');
  const remainingBudgetTotal = calculateTotal('remainingBudget');
  console.log('Initial Budget Total:', initialBudgetTotal);
  console.log('Remaining Budget Total:', remainingBudgetTotal);
}, [projects]); // Calculate totals when projects change
  
  
  const removeNotification = (timestamp) => {
    const filteredNotifications = notifications.filter(notification => notification.timestamp !== timestamp);
    setNotifications(filteredNotifications);
    localStorage.setItem('notifications', JSON.stringify(filteredNotifications));
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  ////
  const initialBudgetTotal = projects.length > 0 ? calculateTotal('initialBudget') : 0;
const remainingBudgetTotal = projects.length > 0 ? calculateTotal('remainingBudget') : 0;


  console.log('Initial Budget Total:', initialBudgetTotal);
  console.log('Remaining Budget Total:', remainingBudgetTotal);

  const chartData = {
    labels: ['Initial Budget', 'Remaining Budget'],
    datasets: [
      {
        label: 'Budget (DH)',
        data: [initialBudgetTotal, remainingBudgetTotal],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  //////

  return (
    <div>
      <AdminLayout />
      <div className="chart-container">
        <h2>Budget Comparison</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
      {/*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>*//*}

      <div className="notifications">
      <div className="button-container">
          <button className="notifications-button" onClick={toggleNotifications}>
            Notifications : {notifications.length}
          </button>
        </div>
        {showNotifications && notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;*/////hna kisali li 5dam mn hna fo9

/*
import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const notification = { ...message, expiry: new Date().getTime() + 60000 }; // Set expiry time 1 minute from now
      setNotifications(prevNotifications => [...prevNotifications, notification]);

      // Store notifications in localStorage with an expiry time
      const updatedNotifications = [...notifications, notification];
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));

      // Set timeout to remove this specific notification after its expiry time
      setTimeout(() => {
        removeNotification(notification.timestamp);
      }, 60000); // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const currentTimestamp = new Date().getTime();
    const validNotifications = storedNotifications.filter(notification => notification.expiry > currentTimestamp);
    setNotifications(validNotifications);

    // Set timeouts for existing notifications
    validNotifications.forEach(notification => {
      const timeRemaining = notification.expiry - currentTimestamp;
      if (timeRemaining > 0) {
        setTimeout(() => {
          removeNotification(notification.timestamp);
        }, timeRemaining);
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  const removeNotification = (timestamp) => {
    const filteredNotifications = notifications.filter(notification => notification.timestamp !== timestamp);
    setNotifications(filteredNotifications);
    localStorage.setItem('notifications', JSON.stringify(filteredNotifications));
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>

      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={index} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
               <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;
*/


/*import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/component.admin.layout';
import { Pie } from 'react-chartjs-2';
import { getAllProjects } from "../../services/project_service";
import './Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchProjects();
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const notification = {
        ...message,
        expiry: new Date().getTime() + 60000, // Set expiry time 1 minute from now
        timestamp: new Date().getTime(), // Add timestamp to identify each notification uniquely
      };

      setNotifications(prevNotifications => [...prevNotifications, notification]);

      // Set timeout to remove this specific notification after its expiry time
      setTimeout(() => {
        removeNotification(notification.timestamp);
      }, 60000); // 60000 milliseconds = 1 minute
    };

    // Retrieve notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    const currentTimestamp = new Date().getTime();
    const validNotifications = storedNotifications.filter(notification => notification.expiry > currentTimestamp);
    setNotifications(validNotifications);

    // Set timeouts for existing notifications
    validNotifications.forEach(notification => {
      const timeRemaining = notification.expiry - currentTimestamp;
      if (timeRemaining > 0) {
        setTimeout(() => {
          removeNotification(notification.timestamp);
        }, timeRemaining);
      }
    });

    return () => {
      ws.close();
    };
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const calculateTotal = (field) => {
    if (projects && projects.length > 0) {
      return projects.reduce((sum, project) => sum + project[field], 0);
    }
    return 0;
  };

  const removeNotification = (timestamp) => {
    const filteredNotifications = notifications.filter(notification => notification.timestamp !== timestamp);
    setNotifications(filteredNotifications);
    localStorage.setItem('notifications', JSON.stringify(filteredNotifications));
  };

  return (
    <div>
      <AdminLayout />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Budget Comparison</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <p>Initial Budget:</p>
            <p>{calculateTotal("initialBudget")} DH</p>
          </div>
          <div>
            <p>Remaining Budget:</p>
            <p>{calculateTotal("remainingBudget")} DH</p>
          </div>
        </div>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        {notifications.map((notification, index) => (
          <div key={notification.timestamp} className="notification">
            <p>Type: {notification.type}</p>
            <p>Time: {new Date(notification.timestamp).toLocaleString()}</p>
            <div>Data:
              <ul>
                <li>Code: {notification.data.code}</li>
                <li><strong>Branche: {notification.data.branche}</strong></li>
                <li><strong>Direction Régionale: {notification.data.direg}</strong></li>
                <li><strong>Type: {notification.data.type}</strong></li>
                <li>Classification: {notification.data.classf}</li>
                <li>Besoin Poste de Travail: {notification.data.bpt}</li>
                <li>Explication Poste de Travail: {notification.data.ept}</li>
                <li>Besoin Pc Portable: {notification.data.bpp}</li>
                <li>Explication Pc Portable: {notification.data.epp}</li>
                <li>Besoin Imprimante MFP: {notification.data.bimfp}</li>
                <li>Explication Imprimante MFP: {notification.data.eimfp}</li>
                <li>Besoin Imprimante Individuelle: {notification.data.biindl}</li>
                <li>Explication Imprimante Individuelle: {notification.data.eiind}</li>
                <li>Besoin Imprimante Couleur: {notification.data.bic}</li>
                <li>Explication Imprimante Couleur: {notification.data.eic}</li>
                <li>Besoin Scanner: {notification.data.bsc}</li>
                <li>Explication Scanner: {notification.data.esc}</li>
                <li>Besoin PABX: {notification.data.bpabx}</li>
                <li>Explication PABX: {notification.data.epabx}</li>
                <li>Besoin Poste Téléphonique: {notification.data.bptel}</li>
                <li>Explication Poste Téléphonique: {notification.data.eptel}</li>
                <li>Besoin Câblage Informatique: {notification.data.bci}</li>
                <li>Explication Câblage Informatique: {notification.data.eci}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

*/