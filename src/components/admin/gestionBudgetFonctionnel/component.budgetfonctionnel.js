/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteBudgetfonctionnel, getAllBudgetfonctionnels } from "../../../services/budgetfonctionnel_service";

function BudgetfonctionnelList(){
   const [budgetfonctionnels,setBudgetfonctionnels]=useState([])
   useEffect(()=>{
    getBudgetfonctionnels()
   },[])
  async function getBudgetfonctionnels(){
    const result=await getAllBudgetfonctionnels()
    setBudgetfonctionnels(result.data)
  }

  async function delBudgetfonctionnel(id){
          await deleteBudgetfonctionnel(id)
          getBudgetfonctionnels()
  }

    return(
        <div className="container">
          <Link className="mt-3 btn btn-primary" to={"/admin/budgetfonctionnels/new"}>Ajouter</Link>
          <table className={"table table-bordred table-hover table-striped"}>
              <thead className={"bg-light"}>
              <tr>
                <th>No</th>
                <th>Rubrique</th>
                <th>Budget 2024</th>
                <th>Action</th>
                <th>Suivre</th>
              </tr>
              </thead>
              <tbody>
              {
               budgetfonctionnels.map((elem,index)=>{
                return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <Link className="{btn btn-primary m-2}" to={`/admin/budgetfonctionnels/edit/${elem._id}`}><td>{elem.rubrique}</td></Link>
                  <td>{elem.budget}</td>
                  <td>
                    <button onClick={event=>delBudgetfonctionnel(elem._id)} className={"btn btn-danger"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
                   </button>
                   
                    <Link className="{btn btn-primary m-2}" to={`/admin/budgetfonctionnels/edit/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
                    </Link>
                  </td>

                  <td>
                    
                   
                    <Link className="{btn btn-primary m-2}" to={`/admin/budgetfonctionnels/detail/${elem._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
                    </Link>
                  </td>
                    
                </tr>
               )
               }) 
              }
              </tbody>
        </table>
        </div>
    )
}

export default BudgetfonctionnelList*/

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from "../component.admin.layout";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { deleteBudgetfonctionnel, getAllBudgetfonctionnels } from "../../../services/budgetfonctionnel_service";
import addicon from '../../images/add.png';
import editicon from '../../images/edit.png';
import delicon from '../../images/trash.png';
import detailicon from '../../images/details.png';
import logoicon from '../../images/logo.png';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
function BudgetfonctionnelList() {
    const [budgetfonctionnels, setBudgetfonctionnels] = useState([]);
    const [search, setSearch] = useState("");
    const [dateSearch, setDateSearch] = useState("");
    const [yearSearch, setYearSearch] = useState('');
    const [monthSearch, setMonthSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending order, 'desc' for descending order
    const [sortField, setSortField] = useState('rubrique'); // 'rubrique', 'budget', 'rbudget', 'bfdate'

    const [page, setPage] = useState(1);
    const [perPage] = useState(4); // Number of budgetfonctionnels per page

    useEffect(() => {
        getBudgetfonctionnels();
    }, []);

    async function getBudgetfonctionnels() {
        const result = await getAllBudgetfonctionnels();
        setBudgetfonctionnels(result.data);
    }

    async function delBudgetfonctionnel(id) {
        await deleteBudgetfonctionnel(id);
        toast.success("Budget de Fonctionnement deleted successfully");

        getBudgetfonctionnels();
    }

    const sortedBudgetfonctionnels = budgetfonctionnels
        .filter((elem, index) => {
            const nameMatch = search.toLowerCase() === '' || elem.rubrique.toLowerCase().includes(search.toLowerCase());
            const budgfoncDate = new Date(elem.bfdate);
            const budgfoncYear = budgfoncDate.getFullYear().toString();
            const budgfoncMonth = (budgfoncDate.getMonth() + 1).toString().padStart(2, '0');
            const yearMatch = yearSearch === '' || budgfoncYear === yearSearch;
            const monthMatch = monthSearch === '' || budgfoncMonth === monthSearch;
            const dateMatch = dateSearch === '' || elem.bfdate.split('T')[0] === dateSearch;
            return nameMatch && yearMatch && monthMatch && dateMatch;
        })
        .sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];
            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
            } else {
                return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
            }
        });

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedBudgetfonctionnels = sortedBudgetfonctionnels.slice(startIndex, endIndex);

    const handleReport = () => {
        const doc = new jsPDF();
        doc.addImage(logoicon,'PNG', 25, 10, 40, 20);

        doc.setFontSize(16); // Font size for header
        doc.setFont("helvetica", "bold"); // Font family and style
        doc.text("Liste des Budgets de fonctionnement", 60, 50);
        
        const tableColumn = ["Rubrique", "Budget", "Budget Remaining", "Date"];
        const tableRows = [];
    
        sortedBudgetfonctionnels.forEach((elem, index) => {
            const budgfoncData = [
                elem.rubrique,
                elem.budget,
                elem.rbudget,
                elem.bfdate ? elem.bfdate.split('T')[0] : '',
            ];
            tableRows.push(budgfoncData);
        });
    
        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 60,
        });
    
        doc.save("Budget_de_fonctionnement-list.pdf");
    };

    return (
        <div>
            <AdminLayout />
            <div>
            <h1 style={{marginLeft:'450px'}}><strong><i>Liste des Budgets de Fonctionnement</i></strong></h1>         
            <Link style={{textAlign: 'center', marginLeft:'80px'}} className="mt-3 btn btn-info" to={"/admin/budgetfonctionnels/new"}>
                <img src={addicon} alt="Add Icon" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' }} className="user-icon" />
                Ajouter
            </Link>
          </div>
          <br></br>
            <Form>
            <InputGroup className='my-2'>
                    <div className='me-4 mx-4'>
                    <Form.Label className='me-1'><strong>Chercher par Name:</strong></Form.Label>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by name'
                        className='me-2'
                    />
                    </div>
                    <div className='me-4 mx-4'>
                    <Form.Label className='me-1'><strong>chercher par Date:</strong></Form.Label>
                        <Form.Control
                        type="date"
                        onChange={(e) => setDateSearch(e.target.value)}
                        placeholder='Search by date'
                        className='me-3'
                    /></div>
                    <div className='me-4 mx-4'>
                    <Form.Label className='me-1'><strong>Chercher par Anneé:</strong></Form.Label>
                        <Form.Select name="yearSearch" value={yearSearch} onChange={(e) => setYearSearch(e.target.value)}>
                        <option value="">Select Year</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            {/* Add more years as needed */}
                        </Form.Select>
                    </div>
                    <div className='me-4 mx-4'>
                        <Form.Label className='me-1'><strong>Chercher par Mois:</strong></Form.Label>
                        <Form.Select name="monthSearch" value={monthSearch} onChange={(e) => setMonthSearch(e.target.value)}>
                            <option value="">Select Month</option>
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </Form.Select>
                    </div>

                    <div className='me-4 mx-4'>
                    <Form.Label className='me-1'><strong>Sort:</strong></Form.Label>
                        <select name="sortField" value={sortField} onChange={(e) => setSortField(e.target.value)} className="form-select me-1">
                                <option value="rubrique">Rubrique</option>
                            <option value="budget">Budget</option>
                            <option value="rbudget">Remaining Budget</option>
                            <option value="bfdate">Date</option>
                        </select>
                        <select name="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="form-select">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </InputGroup>
            </Form>

            <table className="table table-bordered align-middle">
                <thead className="bg-light">
                    <tr className="table-light">
                        <th style={{ textAlign: 'center' }}>No</th>
                        <th style={{ textAlign: 'center' }}>Rubrique</th>
                        <th style={{ textAlign: 'center' }}>Budget</th>
                        <th style={{ textAlign: 'center' }}>Budget Remaining</th>
                        <th style={{ textAlign: 'center' }}>Date</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                        <th style={{ textAlign: 'center' }}>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedBudgetfonctionnels.map((elem, index) => (
                        <tr key={index}>
                            <td style={{ textAlign: 'center' }}>{startIndex + index + 1}</td>
                            <td style={{ textAlign: 'center' }}>{elem.rubrique}</td>
                            <td style={{ textAlign: 'center' }}>{elem.budget}</td>
                            <td style={{ textAlign: 'center' }}>{elem.rbudget}</td>
                            <td style={{ textAlign: 'center' }}>{elem.bfdate ? elem.bfdate.split('T')[0] : ''}</td>
                            <td style={{ textAlign: 'center' }}>
                                <button onClick={() => delBudgetfonctionnel(elem._id)} className="btn btn-danger me-2">
                                    <img src={delicon} alt="del Icon" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' }} className="del-icon" />
                                    Delete
                                </button>
                                <Link className="btn btn-primary" to={`/admin/budgetfonctionnels/edit/${elem._id}`}>
                                    <img src={editicon} alt="edit Icon" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' }} className="edit-icon" />
                                    Edit
                                </Link>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                <Link className="btn btn-primary" to={`/admin/budgetfonctionnels/${elem._id}/contractprestations`}>
                                    <img src={detailicon} alt="detail Icon" style={{ width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' }} className="detail-icon" />
                                    Suivre
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-center mt-3">
                <button
                    className="btn btn-primary me-2"
                    onClick={() => setPage(page - 1)}
                    disabled= {page === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => setPage(page + 1)}
                        disabled={endIndex >= sortedBudgetfonctionnels.length}
                    >
                        Next
                    </button>
                </div>
                <div className="d-flex justify-content-center mt-3">
                <button
                    className="btn btn-secondary"
                    onClick={handleReport}
                >
                    Generate Report
                </button>
            </div>
                <ToastContainer />
            </div>
        );
    }
    
    export default BudgetfonctionnelList;
    



/*
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteBudgetfonctionnel, getAllBudgetfonctionnels, getBudgetfonctionnelById } from "../../../services/budgetfonctionnel_service";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLayout from "../component.admin.layout";

function BudgetfonctionnelList() {
    const [budgetfonctionnels, setBudgetfonctionnels] = useState([]);
    const [search, setSearch] = useState("");


    const [dateSearch, setDateSearch] = useState("");
    const [yearSearch, setYearSearch] = useState('');
    const [monthSearch, setMonthSearch] = useState('');

    const [page, setPage] = useState(1);
    const [perPage] = useState(4); // Number of factures per page
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const budgetfonctionnelss = budgetfonctionnels.slice(startIndex, endIndex);


    useEffect(() => {
        getBudgetfonctionnels();
    }, []);

    async function getBudgetfonctionnels() {
        const result = await getAllBudgetfonctionnels();
        setBudgetfonctionnels(result.data);
    }

    async function delBudgetfonctionnel(id) {
        await deleteBudgetfonctionnel(id);
        getBudgetfonctionnels();
    }

    return (
         <div>
          <AdminLayout/>
          <Link className="mt-3 btn btn-primary" to={"/admin/budgetfonctionnels/new"}>Ajouter</Link>
            <Form>
                <InputGroup className='my-3'>
                    <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='search'
                    />
                    <Form.Control
                    type="date"
                    onChange={(e) => setDateSearch(e.target.value)}
                    placeholder='Search by date'
                  />
                    <div>
                        <label>Year:</label>
                            <select name="yearSearch" value={yearSearch} onChange={(e) => setYearSearch(e.target.value)}>
                                <option value="">Select Year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                    </div>
                    <div>
                         <label>Month:</label>
                            <select name="monthSearch" value={monthSearch} onChange={(e) => setMonthSearch(e.target.value)}>
                                <option value="">Select Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">Mars</option>
                                <option value="04">Avril</option>
                                <option value="05">Mai</option>
                                <option value="06">Juin</option>
                                <option value="07">Juillet</option>
                                <option value="08">Aout</option>
                                <option value="09">Septembre</option>
                                <option value="10">Octobre</option>
                                <option value="11">Novembre</option>
                                <option value="12">Decembre</option>
                            </select>
                     </div>
                </InputGroup>
            </Form><table className={"table table-bordred table-hover table-striped"}>
              <thead className={"bg-light"}>
              <tr>
                <th>No</th>
                <th>Rubrique</th>
                <th>Budget 2024</th>
                <th>Budget Remaining</th>
                <th>Date</th>
                <th>Action</th>
                <th>Suivre</th>
              </tr>
              </thead>
              <tbody>
                    {budgetfonctionnelss.filter((elem, index) => {

      const nameMatch = search.toLowerCase() === '' || elem.rubrique.toLowerCase().includes(search.toLowerCase());
      const budgfoncDate = new Date(elem.bfdate);
       //const budgfoncDateFormatted = new Date(elem.bfdate).toISOString().split('T')[0];
    const budgfoncYear = budgfoncDate.getFullYear().toString();
    const budgfoncMonth = (budgfoncDate.getMonth() + 1).toString().padStart(2, '0'); // +1 because getMonth() is zero-based
    const yearMatch = yearSearch === '' || budgfoncYear === yearSearch;
    const monthMatch = monthSearch === '' || budgfoncMonth === monthSearch;
   // const dateMatch = dateSearch === '' || budgfoncDateFormatted === dateSearch;
    return nameMatch && yearMatch && monthMatch;

                      
                    }).map((elem, index) => {
                        return (

                            <tr key={index}>
                               <td>{index+1}</td>
                              <td>{elem.rubrique}</td>
                              <td>{elem.budget}</td>
                              <td>{elem.rbudget}</td>
                              <td>{elem.bfdate ? elem.bfdate.split('T')[0] : ''}</td>
                              <td>
                              <button onClick={event=>delBudgetfonctionnel(elem._id)} className={"btn btn-danger"}>DELETE
                              </button>
                              <Link className="btn btn-primary" to={`/admin/budgetfonctionnels/edit/${elem._id}`}>Edit
                            </Link>
                              </td>
                              <td>       
                              <Link className="btn btn-primary" to={`/admin/budgetfonctionnels/${elem._id}/contractprestations`}>Suivre
                            </Link>
                              </td>
                        </tr>
                                
                        );
                    })}
                </tbody>
            </table>
                <div>
                        {Array.from({ length: Math.ceil(budgetfonctionnels.length / perPage) }, (_, i) => (
                            <button key={i + 1} onClick={() => setPage(i + 1)}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
        </div>
    );
}

export default BudgetfonctionnelList;
*/