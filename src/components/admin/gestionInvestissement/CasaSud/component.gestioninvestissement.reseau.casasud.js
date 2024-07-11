import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteCasaSud, getAllCasaSuds } from "../../../../services/directions/casasud_service";
import '../CasaSudAdmin.css'; // Import the CSS file
import AdminLayout from "../../component.admin.layout";

function CasaSudAdmin() {
   const [casasuds, setCasaSuds] = useState([]);
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   //const startIndex = (page - 1) * perPage;
   //const endIndex = startIndex + perPage;
   //const casasudss = casasuds.slice(startIndex, endIndex);

   useEffect(() => {
    getCasaSuds();
   }, []);

   async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
   }

   async function delCasaSud(id) {
    await deleteCasaSud(id);
    getCasaSuds();
   }

   const filteredCasasuds = casasuds.filter((elem) => {
    return search.toLowerCase() === '' ||
        elem.branche.toLowerCase().includes(search.toLowerCase());
  });
 // Paginate the filtered results
 const startIndex = (page - 1) * perPage;
 const endIndex = startIndex + perPage;
 const paginatedCasasuds = filteredCasasuds.slice(startIndex, endIndex);

   return (
      <div >
                  <AdminLayout/>
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique</b></p>
          <p><b>Direction Régionale Casa SUD</b></p>
          <Form>
              <InputGroup className='my-3'>
                  <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='search by branche name'
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
                  {/*casasudss*/paginatedCasasuds.filter((elem) => {
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
   );
}

export default CasaSudAdmin;

/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteCasaSud, getAllCasaSuds } from "../../../../services/directions/casasud_service";
import '../CasaSudAdmin.css'; // Import the CSS file

function CasaSudAdmin() {
   const [casasuds, setCasaSuds] = useState([]);
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   const startIndex = (page - 1) * perPage;
   const endIndex = startIndex + perPage;
   const casasudss = casasuds.slice(startIndex, endIndex);

   useEffect(() => {
    getCasaSuds();
   }, []);

   async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
   }

   async function delCasaSud(id) {
    await deleteCasaSud(id);
    getCasaSuds();
   }

   return (
      <div >
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique 2024</b></p>
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
                    <th colSpan={5}></th>
                    <th colSpan={15}>CANEVAS BUDGET D’INVESTISSEMENT 2024- MATERIEL INFORMATIQUE</th>
                  </tr>
                  <tr className="table-dark">
                    <th>Branche</th>
                    <th colSpan={2}>Poste de travail</th>
                    <th colSpan={2}>Pc Portable</th>
                    <th colSpan={2}>Imprimante MFP</th>
                    <th colSpan={2}>Imprimante Individuelle</th>
                    <th colSpan={2}>Imprimante Couleur</th>
                    <th colSpan={2}>Scanner</th>
                    <th colSpan={2}>PABX</th>
                    <th colSpan={2}>Poste téléphonique</th>
                    <th colSpan={2}>Câblage Informatique</th>
                    <th colSpan={2}>Commentaire</th>
                  </tr>
                  <tr>                
                      <th></th>
                      <th>Besoin</th>
                      <th>Expliq</th>                
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th colSpan={2}></th>
                  </tr>
                  </thead>
                  <tbody>
                  {casasudss.filter((elem) => {
                      return search.toLowerCase() === ''
                          ? elem
                          : elem.branche.toLowerCase().includes(search);
                  }).map((elem, index) => {
                      return (
                          <tr key={index}>
                              <td className="truncate"><Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
                              <td className="truncate">{elem.bpt}</td>
                              <td className="truncate">{elem.ept}</td>
                              <td className="truncate">{elem.bpp}</td>
                              <td className="truncate">{elem.epp}</td>
                              <td className="truncate">{elem.bimfp}</td>
                              <td className="truncate">{elem.eimfp}</td>
                              <td className="truncate">{elem.biind}</td>
                              <td className="truncate">{elem.eiind}</td>
                              <td className="truncate">{elem.bic}</td>
                              <td className="truncate">{elem.eic}</td>
                              <td className="truncate">{elem.bsc}</td>
                              <td className="truncate">{elem.esc}</td>
                              <td className="truncate">{elem.bpabx}</td>
                              <td className="truncate">{elem.epabx}</td>
                              <td className="truncate">{elem.bptel}</td>
                              <td className="truncate">{elem.eptel}</td>
                              <td className="truncate">{elem.bci}</td>
                              <td className="truncate">{elem.eci}</td>
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
   );
}

export default CasaSudAdmin;*/


/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteCasaSud, getAllCasaSuds } from "../../../../services/directions/casasud_service";

function CasaSudAdmin() {
   const [casasuds, setCasaSuds] = useState([]);
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   const startIndex = (page - 1) * perPage;
   const endIndex = startIndex + perPage;
   const casasudss = casasuds.slice(startIndex, endIndex);

   useEffect(() => {
    getCasaSuds();
   }, []);

   async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
   }

   async function delCasaSud(id) {
    await deleteCasaSud(id);
    getCasaSuds();
   }

   return (
      <div >
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique 2024</b></p>
          <p><b>Direction Régionale Casa SUD</b></p>
          <Form>
              <InputGroup className='my-3'>
                  <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='search by name'
                  />
              </InputGroup>
          </Form>
          <div style={{ overflowX: 'auto' }}>
              <table className="table table-bordered align-middle">
                  <thead className="bg-light">
                  <tr>
                    <th colSpan={5}></th>
                    <th colSpan={15}>CANEVAS BUDGET D’INVESTISSEMENT 2024- MATERIEL INFORMATIQUE</th>
                  </tr>
                  <tr className="table-dark">
                    <th>Branche</th>
                    <th colSpan={2}>Poste de travail</th>
                    <th colSpan={2}>Pc Portable</th>
                    <th colSpan={2}>Imprimante MFP</th>
                    <th colSpan={2}>Imprimante Individuelle</th>
                    <th colSpan={2}>Imprimante Couleur</th>
                    <th colSpan={2}>Scanner</th>
                    <th colSpan={2}>PABX</th>
                    <th colSpan={2}>Poste téléphonique</th>
                    <th colSpan={2}>Câblage Informatique</th>
                    <th>Commentaire</th>
                  </tr>
                  <tr>                
                      <th></th>
                      <th>Besoin</th>
                      <th>Explication</th>                
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th>Besoin</th>
                      <th>Explication</th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {casasudss.filter((elem) => {
                      return search.toLowerCase() === ''
                          ? elem
                          : elem.branche.toLowerCase().includes(search);
                  }).map((elem, index) => {
                      return (
                          <tr key={index}>
                              <td><Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
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
   );
}

export default CasaSudAdmin;*/

/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteCasaSud, getAllCasaSuds } from "../../../../services/directions/casasud_service";

function CasaSudAdmin(){
   const [casasuds, setCasaSuds] = useState([]);
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   const startIndex = (page - 1) * perPage;
   const endIndex = startIndex + perPage;
   const casasudss = casasuds.slice(startIndex, endIndex);

   useEffect(() => {
    getCasaSuds();
   }, []);

   async function getCasaSuds() {
    const result = await getAllCasaSuds();
    setCasaSuds(result.data);
   }

   async function delCasaSud(id) {
    await deleteCasaSud(id);
    getCasaSuds();
   }

   return (
      <div >
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique 2024</b></p>
          <p><b>Direction Régionale Casa SUD</b></p>
          <Form>
              <InputGroup className='my-3'>
                  <Form.Control
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='search by name'
                  />
              </InputGroup>
          </Form>
          <table className="table table-responsive align-middle">
              <thead className="bg-light">
              <tr>
                <th colSpan={5}></th>
                <th colSpan={15}>CANEVAS BUDGET D’INVESTISSEMENT 2024- MATERIEL INFORMATIQUE</th>
              </tr>
              <tr className="table-dark">
                <th>Branche</th>
                <th colSpan={2}>Poste de travail</th>
                <th colSpan={2}>Pc Portable</th>
                <th colSpan={2}>Imprimante MFP</th>
                <th colSpan={2}>Imprimante Individuelle</th>
                <th colSpan={2}>Imprimante Couleur</th>
                <th colSpan={2}>Scanner</th>
                <th colSpan={2}>PABX</th>
                <th colSpan={2}>Poste téléphonique</th>
                <th colSpan={2}>Câblage Informatique</th>
                <th>Commentaire</th>
              </tr>
              <tr>                
                  <th></th>
                  <th>Besoin</th>
                  <th>Explication</th>                
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th>Besoin</th>
                  <th>Explication</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>
              {casasudss.filter((elem) => {
                  return search.toLowerCase() === ''
                      ? elem
                      : elem.branche.toLowerCase().includes(search);
              }).map((elem, index) => {
                  return (
                      <tr key={index}>
                          <td><Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}>{elem.branche}</Link></td>
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
              })}
              </tbody>
          </table>
          <div className="d-flex justify-content-center">
              {Array.from({ length: Math.ceil(casasuds.length / perPage) }, (_, i) => (
                  <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
                      {i + 1}
                  </button>
              ))}
          </div>
      </div>
   );
}

export default CasaSudAdmin;*/


//first down 
/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteCasaSud, getAllCasaSuds } from "../../../../services/directions/casasud_service";

function CasaSudAdmin(){
   const [casasuds,setCasaSuds]=useState([])
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   const startIndex = (page - 1) * perPage;
   const endIndex = startIndex + perPage;
   const casasudss = casasuds.slice(startIndex, endIndex);

   useEffect(()=>{
    getCasaSuds()
   },[])
  async function getCasaSuds(){
    const result=await getAllCasaSuds()
    setCasaSuds(result.data)
  }

  async function delCasaSud(id){
          await deleteCasaSud(id)
          getCasaSuds()
  }

    return(
      
        <div >
          {/* <Link className="mt-3 btn btn-primary" to={"/admin/gestioninvestissements/reseau/casasud/new"}>Ajouter</Link>
          *//*
          
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique 2024</b></p>
          <p><b>Direction Régionale Casa SUD</b></p>
          <Form>
                <InputGroup className='my-3'>
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='search by name'
                    />
                </InputGroup>
            </Form>
          <table className="table  table-responsive align-middle">
              <thead className="bg-light">
              <tr>
                <th colSpan={5}></th>
                <th colSpan={15}>CANEVAS BUDGET D’INVESTISSEMENT 2024- MATERIEL INFORMATIQUE</th>
              </tr>
              <tr className="table-dark">
                <th >Branche</th>
                <th colSpan={2}>Poste de travail</th>

                <th colSpan={2}>Pc Portable</th>
                
                <th colSpan={2}> Imprimante MFP</th>

                <th colSpan={2}>Imprimante Individuelle</th>
                <th colSpan={2}> Imprimante Couleur</th>

                <th colSpan={2}> Scanner</th>

                <th colSpan={2}> PABX</th>

                <th colSpan={2}> Poste telefonique</th>

                <th colSpan={2}> Cablage Informatique</th>

                <th>Commenatire</th>
              </tr>
              <tr>                
                  <th></th>
                  <th> Besoin</th>
                  <th> Explication</th>                
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> Besoin</th>
                  <th> Explication</th>
                  <th> </th>
              </tr>
              </thead>
              <tbody>
              {casasudss.filter((elem, index) => {
                        return search.toLowerCase() === ''
                            ? elem
                            : elem.branche.toLowerCase().includes(search);
                    }).map((elem, index) => {
                        return (
                            <tr key={index}>
                  <Link to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}><td align="left" width={0}>{elem.branche}</td></Link>
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
                <div>
                        {Array.from({ length: Math.ceil(casasuds.length / perPage) }, (_, i) => (
                            <button key={i + 1} onClick={() => setPage(i + 1)}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
        </div>

    )/*
    <td>
                    <button onClick={event=>delCasaSud(elem._id)} className={"btn btn-danger"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
                   </button>
                   
                    <Link className="{btn btn-primary m-2}" to={`/admin/gestioninvestissements/reseau/casasud/edit/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
                    </Link>
                  </td>
                  <td><Link className="{btn btn-primary m-2}" to={`/admin/gestioninvestissements/reseau/casasud/detail/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
                    </Link></td>
                     */
/*}

export default CasaSudAdmin*/