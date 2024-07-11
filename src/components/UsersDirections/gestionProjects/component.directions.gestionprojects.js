import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { deleteProject, getAllProjects, getProjectById } from "../../../services/project_service";
import 'bootstrap/dist/css/bootstrap.min.css';
import DirectionsLayout from "../../component.directions.layout";

import addicon from '../../images/add.png';
import editicon from '../../images/edit.png';
import delicon from '../../images/trash.png';
import detailicon from '../../images/details.png'

function GestionProjectsDir() {
    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");

    const [dateSearch, setDateSearch] = useState("");
    const [yearSearch, setYearSearch] = useState('');
    const [monthSearch, setMonthSearch] = useState('');

    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending order, 'desc' for descending order
    const [sortField, setSortField] = useState('name'); // 'name', 'description', 'initialBudget', 'emainingBudget', 'pdate'

    const [page, setPage] = useState(1);
    const [perPage] = useState(8); // Number of projects per page

    useEffect(() => {
        getProjects();
    }, []);

    async function getProjects() {
        const result = await getAllProjects();
        setProjects(result.data);
    }

    async function delProject(id) {
        await deleteProject(id);
        getProjects();
    }

    const sortedProjects = projects.filter((elem, index) => {
        const nameMatch = search.toLowerCase() === '' || elem.name.toLowerCase().includes(search.toLowerCase());
        const projectDate = new Date(elem.pdate);
        const projectDateFormatted = new Date(elem.pdate).toISOString().split('T')[0];
        const projectYear = projectDate.getFullYear().toString();
        const projectMonth = (projectDate.getMonth() + 1).toString().padStart(2, '0'); // +1 because getMonth() is zero-based
        const yearMatch = yearSearch === '' || projectYear === yearSearch;
        const monthMatch = monthSearch === '' || projectMonth === monthSearch;
        const dateMatch = dateSearch === '' || projectDateFormatted === dateSearch;
        return nameMatch && yearMatch && monthMatch && dateMatch;
    }).sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        if (sortOrder === 'asc') {
            return aValue > bValue? 1 : aValue < bValue? -1 : 0;
        } else {
            return aValue < bValue? 1 : aValue > bValue? -1 : 0;
        }
    });

    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedProjects = sortedProjects.slice(startIndex, endIndex);

    return (
        <div>
            <DirectionsLayout />
            <div>
            <h1 style={{marginLeft:'450px'}}><strong><i>Liste des Projects</i></strong></h1>
            </div><br></br>
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
                        <Form.Label className='me-1'><strong>Chercher par Moi:</strong></Form.Label>
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
                            <option value="name">Project Name</option>
                            <option value="description">Description</option>
                            <option value="initialBudget">Budget Initial</option>
                            <option value="remainingBudget">Remaining Budget</option>
                            <option value="pdate">Date</option>
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
                        <th style={{textAlign: 'center'}}>No</th>
                        <th style={{textAlign: 'center'}}>Project Name</th>
                        <th style={{textAlign: 'center'}}>Description</th>
                        <th style={{textAlign: 'center'}}>Budget Initial</th>
                        <th style={{textAlign: 'center'}}>Remaining Budget </th>
                        <th style={{textAlign: 'center'}}>Date</th>
                        <th style={{textAlign: 'center'}}>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProjects.map((elem, index) => {
                        return (
                            <tr key={index}>
                                <td style={{textAlign: 'center'}}>{startIndex + index + 1}</td>
                                <td style={{textAlign: 'center'}}>{elem.name}</td>
                                <td style={{textAlign: 'center'}}>{elem.description}</td>
                                <td style={{textAlign: 'center'}}>{elem.initialBudget}</td>
                                <td style={{textAlign: 'center'}}>{elem.remainingBudget}</td>
                                <td style={{textAlign: 'center'}}>{elem.pdate? elem.pdate.split('T')[0] : ''}</td>
                                
                                <td style={{textAlign: 'center'}}>
                                    <Link
                                    style={{textAlign: 'center', marginLeft:'15px'}}
                                        className="btn btn-info"
                                        to={`/directions/projects/${elem._id}/factures`}>
                                            <img src={detailicon} alt="detail Icon" style={{width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px'
                                      }} className="detail-icon" />
                                        Suivre
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="d-flex justify-content-center mt-3">
                <button
                    className="btn btn-info me-2"
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <button
                    className="btn btn-info"
                    onClick={() => setPage(page + 1)}
                    disabled={endIndex >= sortedProjects.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default GestionProjectsDir;