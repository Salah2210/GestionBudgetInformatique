import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteSiege, getAllSieges } from "../../../../services/siege_service";
import '../CasaSudAdmin.css'; // Import the CSS file
import AdminLayout from '../../component.admin.layout';



function GestionInvestissementSiege(){
   const [sieges,setSieges]=useState([])
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
  // const startIndex = (page - 1) * perPage;
  // const endIndex = startIndex + perPage;
   //const siegess = sieges.slice(startIndex, endIndex);
  
  useEffect(()=>{
    getSieges()
   },[])

  async function getSieges(){
    const result=await getAllSieges()
    setSieges(result.data)
  }
   const filteredSieges = sieges.filter((elem) => {
    return search.toLowerCase() === '' ||
        elem.dirdep.toLowerCase().includes(search.toLowerCase());
  });
 // Paginate the filtered results
 const startIndex = (page - 1) * perPage;
 const endIndex = startIndex + perPage;
 const paginatedSieges = filteredSieges.slice(startIndex, endIndex);

  async function delSiege(id){
          await deleteSiege(id)
          getSieges()
  }

 /*<Link className="mt-3 btn btn-primary" to={"/admin/gestioninvestissements/Siege/new"}>Ajouter</Link>
          {}*/ 
    return(
        
        <div >
          <AdminLayout/>                   

          <p><b>Attawfiq Microfinance</b>
          <Link style={{marginLeft:'1050px'}}className="mt-1 btn btn-primary" to={"/admin/gestioninvestissements/consolide/siege"}>Consolide</Link>
          </p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique</b></p>
          <p><b>Siege</b></p>
            <Form>
                <InputGroup className='my-3'>
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='search'
                    />
                </InputGroup>
            </Form>
          <div className="table-responsive">
          <table className="table table-bordered align-middle custom-table">
          <thead className="bg-light">
              <tr className="table-light">
                <th></th>
                <th colSpan={2}>Poste de travail</th>
                <th colSpan={2}>Configuration spécial PC(Mac-IMAC-STATION)</th>
                <th colSpan={2}>Pc Portable</th>
                <th colSpan={2}>Imprimante Individuelle</th>
                <th colSpan={2}>Imprimante MFP</th>
                <th colSpan={2}>Imprimante Couleur</th>
                <th colSpan={2}>Imprimante MFP Couleur</th>
                <th colSpan={2}>Scanner avec chargeur</th>
                <th colSpan={2}>Scanner</th>
                <th colSpan={2}>Cablage Informatique</th>
                <th colSpan={2}>Poste telefonique</th>
                <th colSpan={2}>Logiciel</th>
              </tr>
              <tr className="table-light">
                <th>DIR/DEP</th>
                <th>Nv</th>
                <th>Rempl </th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
                <th>Nv</th>
                <th>Rempl</th>
              </tr>
              </thead>
              <tbody>
              {paginatedSieges.filter((elem, index) => {
                        return search.toLowerCase() === ''
                            ? elem
                            : elem.dirdep.toLowerCase().includes(search);
                    }).map((elem, index) => {
                        return (
                            <tr key={index}>
                  <td className="truncate"><Link to={`/admin/gestioninvestissements/siege/edit/${elem._id}`}>{elem.dirdep}</Link></td>
                  <td className="truncate">{elem.npt}</td>
                  <td className="truncate">{elem.rpt}</td>
                  <td>{elem.ncsp}</td>
                  <td>{elem.rcsp}</td>
                  <td>{elem.npp}</td>
                  <td>{elem.rpp}</td>
                  <td>{elem.niind}</td>
                  <td>{elem.riind}</td>
                  <td>{elem.nim}</td>
                  <td>{elem.rim}</td>
                  <td>{elem.nic}</td>
                  <td>{elem.ric}</td>
                  <td>{elem.nimc}</td>
                  <td>{elem.rimc}</td>
                  <td>{elem.nscc}</td>
                  <td>{elem.rscc}</td>
                  <td>{elem.nsc}</td>
                  <td>{elem.rsc}</td>                  
                  <td>{elem.nci}</td>
                  <td>{elem.rci}</td>
                  <td>{elem.nptel}</td>
                  <td>{elem.rptel}</td>
                  <td>{elem.nlog}</td>
                  <td>{elem.rlog}</td>

                  
                    
                </tr>
               )
               }) 
              }
              </tbody>
        </table> 
        </div>
        <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: Math.ceil(filteredSieges.length / perPage) }, (_, i) => (
                            <button 
                            key={i + 1} 
                            className={`btn ${page === i + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => setPage(i + 1)}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
        </div>
            /*<td>
                    <button onClick={event=>delSiege(elem._id)} className={"btn btn-danger"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
                   </button>
                   
                    <Link className="{btn btn-primary m-2}" to={`/admin/gestioninvestissements/siege/edit/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
                    </Link>
                  </td>
                  <td><Link className="{btn btn-primary m-2}" to={`/admin/gestioninvestissements/siege/detail/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
                    </Link></td>
                     */        

    ) 
}

export default GestionInvestissementSiege


  