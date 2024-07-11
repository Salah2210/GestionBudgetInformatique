/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCasaSud, getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../components/admin/gestionInvestissement/CasaSudAdmin.css'; // Import the CSS fileimport DirectionsLayout from "../../component.directions.layout";

import DirectionsLayout from "../../component.directions.layout";

import '../../../pages/dashboard/Dashboard.css'; // Assuming you have a CSS file for styling

function CasaSudDir(){
   const [casasuds,setCasaSuds]=useState([])

   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   useEffect(()=>{
    getCasaSuds()

///
   },[])
   
///////

  async function getCasaSuds(){
    const result=await getAllCasaSuds()
    setCasaSuds(result.data)
  }
const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === '' ||
        elem.branche.toLowerCase().includes(search.toLowerCase());
  });
 // Paginate the filtered results
 const startIndex = (page - 1) * perPage;
 const endIndex = startIndex + perPage;
 const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);
    return(
        
        <div >
            <DirectionsLayout/>
          

<p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique</b></p>
          <p><b>Direction Régionale Casa SUD</b></p>
          <Form>
              <InputGroup className='my-3'>
                  <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='search by name'
                  />
              </InputGroup>
          </Form>
          <div className="table-responsive">
              <table className="table table-bordered align-middle custom-table">
                  <thead className="bg-light">
                  <tr>
                    <th colSpan={8}></th>
                    <th colSpan={22}>CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE</th>
                  </tr>
                  <tr className="table-dark">
                    <th colSpan={2}>Branche</th>
                    <th colSpan={3}>Poste de travail</th>
                    <th colSpan={3}>Pc Portable</th>
                    <th colSpan={3}>Imprimante MFP</th>
                    <th colSpan={3}>Imprimante Individuelle</th>
                    <th colSpan={3}>Imprimante Couleur</th>
                    <th colSpan={3}>Scanner</th>
                    <th colSpan={3}>PABX</th>
                    <th colSpan={3}>Poste téléphonique</th>
                    <th colSpan={3}>Câblage Informatique</th>
                    <th colSpan={2}>Comment</th>
                  </tr>
                  <tr>                
                      <th colSpan={2}></th>
                      <th><i>besoin</i></th>
                      <th colSpan={2}><i>explication</i></th>                
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th>besoin</th>
                      <th colSpan={2}>explication</th>
                      <th colSpan={2}></th>
                  </tr>
                  </thead>
                  <tbody>
                  {paginatedCasasuds.filter((elem) => {
                      return search.toLowerCase() === ''
                          ? elem
                          : elem.branche.toLowerCase().includes(search);
                  }).map((elem, index) => {
                      return (
                          <tr key={index}>
                              <td colSpan={2} className="truncate"><Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
                              <td className="truncate">{elem.bpt}</td>
                              <td colSpan={2} className="truncate">{elem.ept}</td>
                              <td className="truncate">{elem.bpp}</td>
                              <td colSpan={2} className="truncate">{elem.epp}</td>
                              <td className="truncate">{elem.bimfp}</td>
                              <td colSpan={2} className="truncate">{elem.eimfp}</td>
                              <td className="truncate">{elem.biind}</td>
                              <td colSpan={2} className="truncate">{elem.eiind}</td>
                              <td className="truncate">{elem.bic}</td>
                              <td colSpan={2} className="truncate">{elem.eic}</td>
                              <td className="truncate">{elem.bsc}</td>
                              <td colSpan={2} className="truncate">{elem.esc}</td>
                              <td className="truncate">{elem.bpabx}</td>
                              <td colSpan={2} className="truncate">{elem.epabx}</td>
                              <td className="truncate">{elem.bptel}</td>
                              <td colSpan={2} className="truncate">{elem.eptel}</td>
                              <td className="truncate">{elem.bci}</td>
                              <td colSpan={2} className="truncate">{elem.eci}</td>
                              <td colSpan={2} className="truncate">{elem.coment}</td>
                          </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>
          <div className="d-flex justify-content-center">
              {Array.from({ length: Math.ceil(casasuds.length / perPage) }, (_, i) => (
                  <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
                      {i + 1}
                  </button>
              ))}
          </div>
        </div>
        

    )
 
}

export default CasaSudDir*/

/*
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCasaSud, getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../components/admin/gestionInvestissement/CasaSudAdmin.css'; // Import the CSS file
import DirectionsLayout from "../../component.directions.layout";
import '../../../pages/dashboard/Dashboard.css'; // Assuming you have a CSS file for styling

function CasaSudDir(){
  const [casasuds, setCasaSuds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6); // Number of factures per page
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getCasaSuds();

    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update_casasud') {
        setNotifications(prevNotifications => [...prevNotifications, message]);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  async function getCasaSuds(){
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
  }

  const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === '' ||
        elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />

      <p><b>Attawfiq Microfinance</b></p>
      <p><b>Direction Systèmes D'information</b></p>
      <p><b>Prévision Budget d’investissement informatique</b></p>
      <p><b>Direction Régionale Casa SUD</b></p>
      <Form>
        <InputGroup className='my-3'>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder='search by name'
          />
        </InputGroup>
      </Form>
      <div className="table-responsive">
        <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
            <tr>
              <th colSpan={8}></th>
              <th colSpan={22}>CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE</th>
            </tr>
            <tr className="table-dark">
              <th colSpan={2}>Branche</th>
              <th colSpan={3}>Poste de travail</th>
              <th colSpan={3}>Pc Portable</th>
              <th colSpan={3}>Imprimante MFP</th>
              <th colSpan={3}>Imprimante Individuelle</th>
              <th colSpan={3}>Imprimante Couleur</th>
              <th colSpan={3}>Scanner</th>
              <th colSpan={3}>PABX</th>
              <th colSpan={3}>Poste téléphonique</th>
              <th colSpan={3}>Câblage Informatique</th>
              <th colSpan={2}>Comment</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th><i>besoin</i></th>
              <th colSpan={2}><i>explication</i></th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCasasuds.filter((elem) => {
              return search.toLowerCase() === '' ? elem : elem.branche.toLowerCase().includes(search);
            }).map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate">
                    <Link to={`/casasud/edit/${elem._id}`}>{elem.branche}</Link>
                  </td>
                  <td className="truncate">{elem.bpt}</td>
                  <td colSpan={2} className="truncate">{elem.ept}</td>
                  <td className="truncate">{elem.bpp}</td>
                  <td colSpan={2} className="truncate">{elem.epp}</td>
                  <td className="truncate">{elem.bimfp}</td>
                  <td colSpan={2} className="truncate">{elem.eimfp}</td>
                  <td className="truncate">{elem.biind}</td>
                  <td colSpan={2} className="truncate">{elem.eiind}</td>
                  <td className="truncate">{elem.bic}</td>
                  <td colSpan={2} className="truncate">{elem.eic}</td>
                  <td className="truncate">{elem.bsc}</td>
                  <td colSpan={2} className="truncate">{elem.esc}</td>
                  <td className="truncate">{elem.bpabx}</td>
                  <td colSpan={2} className="truncate">{elem.epabx}</td>
                  <td className="truncate">{elem.bptel}</td>
                  <td colSpan={2} className="truncate">{elem.eptel}</td>
                  <td className="truncate">{elem.bci}</td>
                  <td colSpan={2} className="truncate">{elem.eci}</td>
                  <td colSpan={2} className="truncate">{elem.coment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
      {Array.from({ length: Math.ceil(casasuds.length / perPage) }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
            {i + 1}
          </button>
        ))}
      </div>
      <div className="notifications">
        {notifications.map((notification, index) => (
          <div key={index} className="alert alert-info">
            {notification.data.branche} updated at {new Date(notification.timestamp).toLocaleString()}
            ,Comment: {notification.data.coment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CasaSudDir;
*/


/*import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../components/admin/gestionInvestissement/CasaSudAdmin.css';
import DirectionsLayout from "../../component.directions.layout";
import '../../../pages/dashboard/Dashboard.css';

function CasaSudDir() {
  const [casasuds, setCasaSuds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const ws = useRef(null);
  const timers = useRef({});

  useEffect(() => {
    // Open WebSocket connection
    ws.current = new WebSocket('ws://localhost:8080');

    // Message event handler
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update_casasud') {
        // Add or update notification
        const newNotification = { ...message, timestamp: Date.now() };
        setNotifications(prevNotifications => [
          newNotification,
          ...prevNotifications.filter(n => n.timestamp + 20000 > Date.now())
        ]);

        // Set a timeout to remove the notification after 10 seconds
        const timeoutId = setTimeout(() => {
          setNotifications(prevNotifications => prevNotifications.filter(n => n !== newNotification));
        }, 20000); // 10 seconds

        // Save the timeoutId in the timers object
        timers.current[newNotification.id] = timeoutId;
      }
    };

    // Fetch initial data
    getCasaSuds();

    // Cleanup function
    return () => {
      // Close WebSocket connection
      if (ws.current) {
        ws.current.close();
      }
      // Clear all timers
      Object.values(timers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    // Cleanup timeouts on component unmount
    return () => {
      Object.values(timers.current).forEach(timer => clearTimeout(timer));
    };
  }, []);

  async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
  }

  const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === '' ||
      elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />
      <div className="notificationn-header">
        <div className="notificationns-button">
          <button
            className="btn btn-danger"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            Notifications: {notifications.length}
          </button>
        </div>
      </div>
      <p><b>Attawfiq Microfinance</b></p>
      <p><b>Direction Systèmes D'information</b></p>
      <p><b>Prévision Budget d’investissement informatique</b></p>
      <p><b>Direction Régionale Casa SUD</b></p>
      <div className="notificationn-header">
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='search by name'
            />
          </InputGroup>
        </Form>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
            <tr>
              <th colSpan={8}></th>
              <th colSpan={22}>CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE</th>
            </tr>
            <tr className="table-dark">
              <th colSpan={2}>Branche</th>
              <th colSpan={3}>Poste de travail</th>
              <th colSpan={3}>Pc Portable</th>
              <th colSpan={3}>Imprimante MFP</th>
              <th colSpan={3}>Imprimante Individuelle</th>
              <th colSpan={3}>Imprimante Couleur</th>
              <th colSpan={3}>Scanner</th>
              <th colSpan={3}>PABX</th>
              <th colSpan={3}>Poste téléphonique</th>
              <th colSpan={3}>Câblage Informatique</th>
              <th colSpan={2}>Comment</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th><i>besoin</i></th>
              <th colSpan={2}><i>explication</i></th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCasasuds.map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate"><Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
                  <td className="truncate">{elem.bpt}</td>
                  <td colSpan={2} className="truncate">{elem.ept}</td>
                  <td className="truncate">{elem.bpp}</td>
                  <td colSpan={2} className="truncate">{elem.epp}</td>
                  <td className="truncate">{elem.bimfp}</td>
                  <td colSpan={2} className="truncate">{elem.eimfp}</td>
                  <td className="truncate">{elem.biind}</td>
                  <td colSpan={2} className="truncate">{elem.eiind}</td>
                  <td className="truncate">{elem.bic}</td>
                  <td colSpan={2} className="truncate">{elem.eic}</td>
                  <td className="truncate">{elem.bsc}</td>
                  <td colSpan={2} className="truncate">{elem.esc}</td>
                  <td className="truncate">{elem.bpabx}</td>
                  <td colSpan={2} className="truncate">{elem.epabx}</td>
                  <td className="truncate">{elem.bptel}</td>
                  <td colSpan={2} className="truncate">{elem.eptel}</td>
                  <td className="truncate">{elem.bci}</td>
                  <td colSpan={2} className="truncate">{elem.eci}</td>
                  <td colSpan={2} className="truncate">{elem.coment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(filteredCasasuds.length / perPage) }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
            {i + 1}
          </button>
        ))}
      </div>
      {showNotifications && (
        <div className="notificationns-panel">
          {notifications.map((notification, index) => (
            <div key={index} className="alert alert-info">
              {notification.data.branche} updated at {new Date(notification.timestamp).toLocaleString()}, Commentaire: {notification.data.coment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CasaSudDir;
*/
//hada fo9 5dam
/*import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../../components/admin/gestionInvestissement/CasaSudAdmin.css";
import DirectionsLayout from "../../component.directions.layout";
import "../../../pages/dashboard/Dashboard.css";
import bell from '../../images/bell.png';

function CasaSudDir() {
  const [casasuds, setCasaSuds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const ws = useRef(null);
  const timers = useRef({});

  useEffect(() => {
    // Open WebSocket connection
    ws.current = new WebSocket("ws://localhost:8080");

    // Restore notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(storedNotifications);

    // Message event handler
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "update_casasud") {
        // Add or update notification
        const newNotification = { ...message, timestamp: Date.now() };
        setNotifications((prevNotifications) => [
          newNotification,
          ...prevNotifications.filter((n) => n.timestamp + 20000 > Date.now()),
        ]);

        // Set a timeout to remove the notification after 20 seconds
        const timeoutId = setTimeout(() => {
          setNotifications((prevNotifications) =>
            prevNotifications.filter((n) => n !== newNotification)
          );
        }, 20000); // 20 seconds

        // Save the timeoutId in the timers object
        timers.current[newNotification.id] = timeoutId;

        // Store updated notifications in localStorage
        localStorage.setItem("notifications", JSON.stringify([...notifications, newNotification]));
      }
    };

    // Fetch initial data
    getCasaSuds();

    // Cleanup function
    return () => {
      // Close WebSocket connection
      if (ws.current) {
        ws.current.close();
      }
      // Clear all timers
      Object.values(timers.current).forEach((timer) => clearTimeout(timer));
    };
  }, []); // Only run once on component mount

  useEffect(() => {
    // Cleanup timeouts on component unmount
    return () => {
      Object.values(timers.current).forEach((timer) => clearTimeout(timer));
    };
  }, []);

  async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
  }

  const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === "" || elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />
      <div className="notificationn-header">
        <div className="notificationns-button">
          <button
            className="btn btn-warning "
            onClick={() => setShowNotifications(!showNotifications)}
          ><i class="fi fi-bs-bell">

            <img src={bell} alt="bell Icon" style={{width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' // Adjust margin as needed for spacing between icon and name
                                      }} className="user-icon" /> 
            Notifications: {notifications.length}
          </i></button>
        </div>
      </div>
      <p>
        <b>Attawfiq Microfinance</b>
      </p>
      <p>
        <b>Direction Systèmes D'information</b>
      </p>
      <p>
        <b>Prévision Budget d’investissement informatique</b>
      </p>
      <p>
        <b>Direction Régionale Casa SUD</b>
      </p>
      <div className="notificationn-header">
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search by name"
            />
          </InputGroup>
        </Form>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
            <tr>
              <th colSpan={8}></th>
              <th colSpan={22}>
                CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE
              </th>
            </tr>
            <tr className="table-dark">
              <th colSpan={2}>Branche</th>
              <th colSpan={3}>Poste de travail</th>
              <th colSpan={3}>Pc Portable</th>
              <th colSpan={3}>Imprimante MFP</th>
              <th colSpan={3}>Imprimante Individuelle</th>
              <th colSpan={3}>Imprimante Couleur</th>
              <th colSpan={3}>Scanner</th>
              <th colSpan={3}>PABX</th>
              <th colSpan={3}>Poste téléphonique</th>
              <th colSpan={3}>Câblage Informatique</th>
              <th colSpan={2}>Comment</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th>
                <i>besoin</i>
              </th>
              <th colSpan={2}>
                <i>explication</i>
              </th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCasasuds.map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate">
                    <Link
                      to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}
                    >
                      {elem.branche}
                    </Link>
                  </td>
                  <td className="truncate">{elem.bpt}</td>
                  <td colSpan={2} className="truncate">
                    {elem.ept}
                  </td>
                  <td className="truncate">{elem.bpp}</td>
                  <td colSpan={2} className="truncate">
                    {elem.epp}
                  </td>
                  <td className="truncate">{elem.bimfp}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eimfp}
                  </td>
                  <td className="truncate">{elem.biind}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eiind}
                  </td>
                  <td className="truncate">{elem.bic}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eic}
                  </td>
                  <td className="truncate">{elem.bsc}</td>
                  <td colSpan={2} className="truncate">
                    {elem.esc}
                  </td>
                  <td className="truncate">{elem.bpabx}</td>
                  <td colSpan={2} className="truncate">
                    {elem.epabx}
                  </td>
                  <td className="truncate">{elem.bptel}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eptel}
                  </td>
                  <td className="truncate">{elem.bci}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eci}
                  </td>
                  <td colSpan={2} className="truncate">
                    {elem.coment}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(filteredCasasuds.length / perPage) }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
            {i + 1}
          </button>
        ))}
      </div>
      {showNotifications && (
        <div className="notificationns-panel">
          {notifications.map((notification, index) => (
            <div key={index} className="alert alert-info">
              {notification.data.branche} updated at {new Date(notification.timestamp).toLocaleString()}, Commentaire: {notification.data.coment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CasaSudDir;
*/
//fo9 L5ra 5dama
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../../components/admin/gestionInvestissement/CasaSudAdmin.css";
import DirectionsLayout from "../../component.directions.layout";
import "../../../pages/dashboard/Dashboard.css";
import bell from '../../images/bell.png';

function CasaSudDir() {
  const [casasuds, setCasaSuds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const ws = useRef(null);
  const timers = useRef({});

  useEffect(() => {
    // Open WebSocket connection
    ws.current = new WebSocket("ws://localhost:8080");

    // Restore notifications from localStorage on component mount
    const storedNotifications = JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(storedNotifications);

    // Message event handler
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "update_casasud") {
        const newNotification = { ...message, timestamp: Date.now() };
        
        setNotifications((prevNotifications) => {
          const updatedNotifications = [
            newNotification,
            ...prevNotifications.filter((n) => n.timestamp + 20000 > Date.now()),
          ];

          localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
          return updatedNotifications;
        });

        // Set a timeout to remove the notification after 20 seconds
        const timeoutId = setTimeout(() => {
          setNotifications((prevNotifications) => {
            const remainingNotifications = prevNotifications.filter(
              (n) => n !== newNotification
            );
            localStorage.setItem("notifications", JSON.stringify(remainingNotifications));
            return remainingNotifications;
          });
        }, 20000); // 20 seconds

        // Save the timeoutId in the timers object
        timers.current[newNotification.id] = timeoutId;
      }
    };

    // Fetch initial data
    getCasaSuds();

    // Cleanup function
    return () => {
      // Close WebSocket connection
      if (ws.current) {
        ws.current.close();
      }
      // Capture current timers to avoid potential cleanup issue
    const currentTimers = timers.current;
      // Clear all timers
      Object.values(currentTimers).forEach((timer) => clearTimeout(timer));
    };
  }, []); // Only run once on component mount

  useEffect(() => {
    // Cleanup timeouts on component unmount
    return () => {
      Object.values(timers.current).forEach((timer) => clearTimeout(timer));
    };
  }, []);

  async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
  }

  const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === "" || elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />
      <div className="notificationn-header">
        <div className="notificationns-button">
          <button
            className="btn btn-warning "
            onClick={() => {
              setShowNotifications(!showNotifications);
              console.log("Toggled Notifications:", !showNotifications);
            }}
          >
            <img src={bell} alt="Bell Icon" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' }} className="user-icon" />
            Notifications: ({notifications.length})
          </button><strong> &gt;</strong> 
        </div>
      </div>
      <p>
        <b>Attawfiq Microfinance</b>
      </p>
      <p>
        <b>Direction Systèmes D'information</b>
      </p>
      <p>
        <b>Prévision Budget d’investissement informatique</b>
      </p>
      <p>
        <b>Direction Régionale Casa SUD</b>
      </p>
      <div className="notificationn-header">
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search branche by name"
            />
          </InputGroup>
        </Form>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
            <tr>
              <th colSpan={8}></th>
              <th colSpan={22}>
                CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE
              </th>
            </tr>
            <tr className="table-dark">
              <th colSpan={2}>Branche</th>
              <th colSpan={3}>Poste de travail</th>
              <th colSpan={3}>Pc Portable</th>
              <th colSpan={3}>Imprimante MFP</th>
              <th colSpan={3}>Imprimante Individuelle</th>
              <th colSpan={3}>Imprimante Couleur</th>
              <th colSpan={3}>Scanner</th>
              <th colSpan={3}>PABX</th>
              <th colSpan={3}>Poste téléphonique</th>
              <th colSpan={3}>Câblage Informatique</th>
              <th colSpan={2}>Comment</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th>
                <i>besoin</i>
              </th>
              <th colSpan={2}>
                <i>explication</i>
              </th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCasasuds.map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate">
                    <Link to={`/casasud/edit/${elem._id}`}>
                      {elem.branche}
                    </Link>
                  </td>
                  <td className="truncate">{elem.bpt}</td>
                  <td colSpan={2} className="truncate">
                    {elem.ept}
                  </td>
                  <td className="truncate">{elem.bpp}</td>
                  <td colSpan={2} className="truncate">
                    {elem.epp}
                  </td>
                  <td className="truncate">{elem.bimfp}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eimfp}
                  </td>
                  <td className="truncate">{elem.biind}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eiind}
                  </td>
                  <td className="truncate">{elem.bic}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eic}
                  </td>
                  <td className="truncate">{elem.bsc}</td>
                  <td colSpan={2} className="truncate">
                    {elem.esc}
                  </td>
                  <td className="truncate">{elem.bpabx}</td>
                  <td colSpan={2} className="truncate">
                    {elem.epabx}
                  </td>
                  <td className="truncate">{elem.bptel}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eptel}
                  </td>
                  <td className="truncate">{elem.bci}</td>
                  <td colSpan={2} className="truncate">
                    {elem.eci}
                  </td>
                  <td colSpan={2} className="truncate">
                    {elem.coment}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setPage(page + 1)}
          disabled={endIndex >= filteredCasasuds.length}
        >
          Next
        </button>
      </div>
      {showNotifications && (
        <div className="notificationns-panel">
          <ul>
          {notifications.map((notification, index) => (
              <li key={index}>{notification.message}
                            {notification.data.branche} updated at {new Date(notification.timestamp).toLocaleString()},Commentaire: {notification.data.coment}
                            </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CasaSudDir;






/*
import { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import { getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../components/admin/gestionInvestissement/CasaSudAdmin.css';
import DirectionsLayout from "../../component.directions.layout";
import '../../../pages/dashboard/Dashboard.css';

function CasaSudDir() {
  const [casasuds, setCasaSuds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const ws = useRef(null);
  const timers = useRef([]);
  useEffect(() => {
    // Open WebSocket connection
    ws.current = new WebSocket('ws://localhost:8080');
    
    // Message event handler
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update_casasud') {
        setNotifications(prevNotifications => [
          ...prevNotifications,
          { ...message, timeoutId: setTimeout(() => {
            // Remove notification after timeout
            setNotifications(prevNotifications => prevNotifications.filter(n => n !== message));
          }, 10000) } // Adjust timeout as needed (10 seconds here)
        ]);
      }
    };

    // Fetch initial data
    getCasaSuds();

    // Cleanup function
    return () => {
      // Close WebSocket connection
      if (ws.current) {
        ws.current.close();
      }
      // Clear all timers
      timers.current.forEach(timer => clearTimeout(timer));
    };
  }, []);
    //getCasaSuds();

    /*const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update_casasud') {
        setNotifications((prevNotifications) => [...prevNotifications, message]);
      }
    };

    return () => {
      ws.close();
    };*/
  /*  // Function to add notifications to state and localStorage
  const addNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    localStorage.setItem('notifications', JSON.stringify([...notifications, notification]));
  };

  // Load notifications from localStorage on component mount
  const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
  setNotifications(storedNotifications);

  // WebSocket setup
  const ws = new WebSocket('ws://localhost:8080');
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.type === 'update_casasud') {
      addNotification(message);
    }
  };*/
  
  
  /*const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update_casasud') {
       // Add new notification
       setNotifications((prevNotifications) => [...prevNotifications, { ...message, timeoutId: setTimeout(() => {
        // Remove notification after timeout
        setNotifications((prevNotifications) => prevNotifications.filter(n => n !== message));
      }, 10000) }]); // Adjust timeout as needed (10 seconds here)
    }
  };

  return () => {
    ws.close();
    // Clear all notification timers on component unmount
    notifications.forEach(notification => clearTimeout(notification.timeoutId));
  };
}, []);*/


    /*const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(storedNotifications);

    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
        if (message.type === 'update_casasud') {
        setNotifications((prevNotifications) => [...prevNotifications, message]);
          // Save updated notifications to localStorage
        localStorage.setItem('notifications', JSON.stringify([...notifications, message]));
      }
      };*/



  /*useEffect(() => {
      // Cleanup timers on component unmount
      return () => {
        timers.current.forEach(timer => clearTimeout(timer));
      };
    }, []);

    */
    /*let timer;
    if (showNotifications && notifications.length > 0) {
      timer = setTimeout(() => {
        setShowNotifications(false);
        setNotifications([]);
        localStorage.removeItem('notifications'); // Clear notifications from localStorage
      }, 60000); // 60 seconds
    }
  
    return () => clearTimeout(timer);
  }, [showNotifications, notifications]);*/
  
  /*useEffect(() => {
    if (showNotifications) {
      const timer = setTimeout(() => {
        setShowNotifications(false);
        setNotifications([]);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [showNotifications]);*/


/*
  async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
  }

  const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === '' ||
      elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />
      <div className="notificationn-header">
          <div className="notificationns-button">
            <button
              className="btn btn-primary"
              onClick={() => setShowNotifications(!showNotifications)}
                >
                Notifications: {notifications.length}
              </button>
          </div>
      </div>
      <p><b>Attawfiq Microfinance</b></p>
      <p><b>Direction Systèmes D'information</b></p>
      <p><b>Prévision Budget d’investissement informatique</b></p>
      <p><b>Direction Régionale Casa SUD</b></p>
      <div className="notificationn-header">
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='search by name'
            />
          </InputGroup>
        </Form>
        
      </div>
      <div className="table-responsive">
        <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
            <tr>
              <th colSpan={8}></th>
              <th colSpan={22}>CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE</th>
            </tr>
            <tr className="table-dark">
              <th colSpan={2}>Branche</th>
              <th colSpan={3}>Poste de travail</th>
              <th colSpan={3}>Pc Portable</th>
              <th colSpan={3}>Imprimante MFP</th>
              <th colSpan={3}>Imprimante Individuelle</th>
              <th colSpan={3}>Imprimante Couleur</th>
              <th colSpan={3}>Scanner</th>
              <th colSpan={3}>PABX</th>
              <th colSpan={3}>Poste téléphonique</th>
              <th colSpan={3}>Câblage Informatique</th>
              <th colSpan={2}>Comment</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th><i>besoin</i></th>
              <th colSpan={2}><i>explication</i></th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCasasuds.filter((elem) => {
              return search.toLowerCase() === ''
                ? elem
                : elem.branche.toLowerCase().includes(search);
            }).map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate"><Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
                  <td className="truncate">{elem.bpt}</td>
                  <td colSpan={2} className="truncate">{elem.ept}</td>
                  <td className="truncate">{elem.bpp}</td>
                  <td colSpan={2} className="truncate">{elem.epp}</td>
                  <td className="truncate">{elem.bimfp}</td>
                  <td colSpan={2} className="truncate">{elem.eimfp}</td>
                  <td className="truncate">{elem.biind}</td>
                  <td colSpan={2} className="truncate">{elem.eiind}</td>
                  <td className="truncate">{elem.bic}</td>
                  <td colSpan={2} className="truncate">{elem.eic}</td>
                  <td className="truncate">{elem.bsc}</td>
                  <td colSpan={2} className="truncate">{elem.esc}</td>
                  <td className="truncate">{elem.bpabx}</td>
                  <td colSpan={2} className="truncate">{elem.epabx}</td>
                  <td className="truncate">{elem.bptel}</td>
                  <td colSpan={2} className="truncate">{elem.eptel}</td>
                  <td className="truncate">{elem.bci}</td>
                  <td colSpan={2} className="truncate">{elem.eci}</td>
                  <td colSpan={2} className="truncate">{elem.coment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(casasuds.length / perPage) }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
            {i + 1}
          </button>
        ))}
      </div>
      {showNotifications && (
        <div className="notificationns-panel">
          {notifications.map((notification, index) => (
            <div key={index} className="alert alert-info">
              {notification.data.branche} updated at {new Date(notification.timestamp).toLocaleString()},Commentaire: {notification.data.coment}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CasaSudDir;
*/
//hada 5dam
/*
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCasaSud, getAllCasaSuds } from "../../../services/directions/casasud_service";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../../components/admin/gestionInvestissement/CasaSudAdmin.css';
import DirectionsLayout from "../../component.directions.layout";
//import '../../../pages/dashboard/Dashboard.css';

function CasaSudDir() {
  const [casasuds, setCasaSuds] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    getCasaSuds();

    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'update_casasud') {
        setNotifications((prevNotifications) => [...prevNotifications, message]);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (showNotifications) {
      const timer = setTimeout(() => {
        setShowNotifications(false);
        setNotifications([]);
      }, 60000);
      return () => clearTimeout(timer);
    }
  }, [showNotifications]);

  async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
  }

  const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === '' ||
      elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />
      <p><b>Attawfiq Microfinance</b></p>
      <p><b>Direction Systèmes D'information</b></p>
      <p><b>Prévision Budget d’investissement informatique</b></p>
      <p><b>Direction Régionale Casa SUD</b></p>
      <Form>
        <InputGroup className='my-3'>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder='search by name'
          />
        </InputGroup>
      </Form>
      <div className="table-responsive">
        <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
            <tr>
              <th colSpan={8}></th>
              <th colSpan={22}>CANEVAS BUDGET D’INVESTISSEMENT - MATERIEL INFORMATIQUE</th>
            </tr>
            <tr className="table-dark">
              <th colSpan={2}>Branche</th>
              <th colSpan={3}>Poste de travail</th>
              <th colSpan={3}>Pc Portable</th>
              <th colSpan={3}>Imprimante MFP</th>
              <th colSpan={3}>Imprimante Individuelle</th>
              <th colSpan={3}>Imprimante Couleur</th>
              <th colSpan={3}>Scanner</th>
              <th colSpan={3}>PABX</th>
              <th colSpan={3}>Poste téléphonique</th>
              <th colSpan={3}>Câblage Informatique</th>
              <th colSpan={2}>Comment</th>
            </tr>
            <tr>
              <th colSpan={2}></th>
              <th><i>besoin</i></th>
              <th colSpan={2}><i>explication</i></th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th>besoin</th>
              <th colSpan={2}>explication</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedCasasuds.filter((elem) => {
              return search.toLowerCase() === ''
                ? elem
                : elem.branche.toLowerCase().includes(search);
            }).map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate"><Link to={`/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
                  <td className="truncate">{elem.bpt}</td>
                  <td colSpan={2} className="truncate">{elem.ept}</td>
                  <td className="truncate">{elem.bpp}</td>
                  <td colSpan={2} className="truncate">{elem.epp}</td>
                  <td className="truncate">{elem.bimfp}</td>
                  <td colSpan={2} className="truncate">{elem.eimfp}</td>
                  <td className="truncate">{elem.biind}</td>
                  <td colSpan={2} className="truncate">{elem.eiind}</td>
                  <td className="truncate">{elem.bic}</td>
                  <td colSpan={2} className="truncate">{elem.eic}</td>
                  <td className="truncate">{elem.bsc}</td>
                  <td colSpan={2} className="truncate">{elem.esc}</td>
                  <td className="truncate">{elem.bpabx}</td>
                  <td colSpan={2} className="truncate">{elem.epabx}</td>
                  <td className="truncate">{elem.bptel}</td>
                  <td colSpan={2} className="truncate">{elem.eptel}</td>
                  <td className="truncate">{elem.bci}</td>
                  <td colSpan={2} className="truncate">{elem.eci}</td>
                  <td colSpan={2} className="truncate">{elem.coment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(casasuds.length / perPage) }, (_, i) => (
          <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
            {i + 1}
          </button>
        ))}
      </div>
      <div className="notificationns-button">
        <button
          className="btn btn-primary"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          Notifications: {notifications.length}
        </button>
      </div>
      {showNotifications && (
        <div className="notificationns-panel">
          {notifications.map((notification, index) => (
            <div key={index} className="alert alert-info">
              {notification.data.branche} updated at {new Date(notification.timestamp).toLocaleString()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CasaSudDir;*/
