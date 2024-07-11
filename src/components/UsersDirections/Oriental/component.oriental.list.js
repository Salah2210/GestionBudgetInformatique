/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteOriental, getAllOrientals } from "../../../services/directions/oriental_service";

function OrientalDir(){
   const [orientals,setOrientals]=useState([])
   useEffect(()=>{
    getOrientals()
   },[])
  async function getOrientals(){
    const result=await getAllOrientals()
    setOrientals(result.data)
  }

    return(
        
        <div className="container">
         
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique 2024</b></p>
          <p><b>Direction Régionale Oriental</b></p>
          <table className={"table table-bordred table-hover table-striped"}>
              <thead className={"bg-light"}>
              <tr>
                <th>No</th>
                <th>Code</th>
                <th>Branche</th>
                <th>Direction Regionale</th>
                <th>Type</th>
                <th>Classification PV</th>
                <th>Besoin Poste de travail</th>
                <th>expilication Poste de travail</th>
                <th>Besoin Pc Portable</th>
                <th>expilication Pc Portable</th>
                <th>Besoin Imprimante MFP</th>
                <th>expilication Imprimante MFP</th>
                <th>Besoin Imprimante Individuelle</th>
                <th>expilication Imprimante Individuelle</th>
                <th>Besoin Imprimante Couleur</th>
                <th>expilication Imprimante Couleur</th>
                <th>Besoin Scanner</th>
                <th>expilication Scanner</th>
                <th>Besoin PABX</th>
                <th>expilication PABX</th>
                <th>Besoin Poste telefonique</th>
                <th>expilication Poste telefonique</th>
                <th>Besoin Cablage Informatique</th>
                <th>expilication Cablage Informatique</th>
                <th>Commenatire</th>
              </tr>
              </thead>
              <tbody>
              {
               orientals.map((elem,index)=>{
                return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td >{elem.code} </td>
                  <Link to={`/oriental/edit/${elem._id}`}><td>{elem.branche}</td></Link>
                  <td>{elem.direg}</td>
                  <td>{elem.type}</td>
                  <td>{elem.classf}</td>
                  <td>{elem.bpt}</td>
                  <td>{elem.ept}</td>
                  <td>{elem.bpp}</td>
                  <td>{elem.epp}</td>
                  <td>{elem.bimfp}</td>
                  <td>{elem.eimfp}</td>
                  <td>{elem.biind}</td>
                  <td>{elem.eiind}</td>
                  <td>{elem.bic}</td>
                  <td>{elem.eic}</td>
                  <td>{elem.bsc}</td>
                  <td>{elem.esc}</td>
                  <td>{elem.bpabx}</td>
                  <td>{elem.epabx}</td>
                  <td>{elem.bptel}</td>
                  <td>{elem.eptel}</td>
                  <td>{elem.bci}</td>
                  <td>{elem.eci}</td>
                  <td>{elem.coment}</td>

                  
                    
                </tr>
               )
               }) 
              }
              </tbody>
        </table>

            

        </div>
        

    )
}

export default OrientalDir*/
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getAllOrientals } from "../../../services/directions/oriental_service";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../../components/admin/gestionInvestissement/CasaSudAdmin.css";
import DirectionsLayout from "../../component.directions.layout";
import "../../../pages/dashboard/Dashboard.css";
import bell from '../../images/bell.png';

function OrientalDir() {
  const [orientals, setOrientals] = useState([]);
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
      if (message.type === "update_Oriental") {
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
    getOrientals();

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

  async function getOrientals() {
    const result = await getAllOrientals();
    setOrientals(result.data);
  }

  const filteredOrientals = orientals.filter((elem) => {
    return search.toLowerCase() === "" || elem.branche.toLowerCase().includes(search.toLowerCase());
  });

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedOrientals = filteredOrientals.slice(startIndex, endIndex);

  return (
    <div>
      <DirectionsLayout />
      <div className="notificationn-header">
        <div className="notificationns-button">
          <button
            className="btn btn-warning"
            onClick={() => {
              setShowNotifications(!showNotifications);
              console.log("Toggled Notifications:", !showNotifications);
            }}
          >
            <img src={bell} alt="Bell Icon" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' }} className="user-icon" />
            Notifications: {notifications.length}
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
        <b>Direction Régionale Oriental</b>
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
            {paginatedOrientals.map((elem, index) => {
              return (
                <tr key={index}>
                  <td colSpan={2} className="truncate">
                    <Link to={`/oriental/edit/${elem._id}`}>
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
          disabled={endIndex >= filteredOrientals.length}
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

export default OrientalDir;