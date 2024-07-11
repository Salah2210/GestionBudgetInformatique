import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHaouz, getAllHaouzs } from "../../../../services/directions/haouz_service";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../CasaSudAdmin.css'; // Import the CSS file
import AdminLayout from "../../component.admin.layout";

function HaouzAdmin(){
   const [haouzs,setHaouzs]=useState([])
   const [search, setSearch] = useState("");
   const [page, setPage] = useState(1);
   const [perPage] = useState(6); // Number of factures per page
   useEffect(()=>{
    getHaouzs()
   },[])
  async function getHaouzs(){
    const result=await getAllHaouzs()
    setHaouzs(result.data)
  }

  async function delHaouz(id){
          await deleteHaouz(id)
          getHaouzs()
  }
  const filteredHaouzs = haouzs.filter((elem) => {
    return search.toLowerCase() === '' ||
        elem.branche.toLowerCase().includes(search.toLowerCase());
  });
 // Paginate the filtered results
 const startIndex = (page - 1) * perPage;
 const endIndex = startIndex + perPage;
 const paginatedHaouzs = filteredHaouzs.slice(startIndex, endIndex);
    return(
        
        <div>
                    <AdminLayout/>

           {/*<Link className="mt-3 btn btn-primary" to={"/admin/gestioninvestissements/reseau/haouz/new"}>Ajouter</Link>
          */}
          <p><b>Attawfiq Microfinance</b></p>
          <p><b>Direction Systèmes D'information</b></p>
          <p><b>Prévision Budget d’investissement informatique</b></p>
          <p><b>Direction Régionale Haouz</b></p>
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
                  {paginatedHaouzs.filter((elem) => {
                      return search.toLowerCase() === ''
                          ? elem
                          : elem.branche.toLowerCase().includes(search);
                  }).map((elem, index) => {
                      return (
                          <tr key={index}>
                              <td colSpan={2} className="truncate"><Link to={`/admin/gestioninvestissements/reseau/haouz/edit/${elem._id}`}>{elem.branche}</Link></td>
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
              {Array.from({ length: Math.ceil(haouzs.length / perPage) }, (_, i) => (
                  <button key={i + 1} onClick={() => setPage(i + 1)} className="btn btn-secondary mx-1">
                      {i + 1}
                  </button>
              ))}
          </div>
        </div>
    )  
}

export default HaouzAdmin