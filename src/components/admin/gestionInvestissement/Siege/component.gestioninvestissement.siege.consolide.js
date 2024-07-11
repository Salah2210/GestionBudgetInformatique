import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { deleteSiege, getAllSieges } from "../../../../services/siege_service";
import AdminLayout from '../../component.admin.layout';


function GestionInvestissementSiegeConsolide(){
   const [sieges,setSieges]=useState([])
   useEffect(()=>{
    getSieges()
   },[])
  async function getSieges(){
    const result=await getAllSieges()
    setSieges(result.data)
  }

  async function delSiege(id){
          await deleteSiege(id)
          getSieges()
  }

    return(
        
        <div className="container">
                    <AdminLayout/>

          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Matériels informatiques 2024 -Consolidé</b></p>
          <p><b>Siege</b></p>
          <table className={"table table-bordred table-hover table-striped"}>
              <thead className={"bg-light"}>
              <tr>
                <th>No</th>
                <th>Materiel</th>
                <th>Quantite</th>
                <th>Prix unitaire</th>
                <th>Montant Total</th>
                
              </tr>
              </thead>
              <tbody>
              {
               sieges.map((elem,index)=>{
                return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <Link to={`/admin/gestioninvestissements/siege/edit/${elem._id}`}><td>{elem.dirdep}</td></Link>
                  <td>{elem.npt}</td>
                  <td>{elem.rpt}</td>
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

                  <td>
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
                    
                </tr>
               )
               }) 
              }
              </tbody>
        </table>

        </div>
        

    )
}

export default GestionInvestissementSiegeConsolide


  