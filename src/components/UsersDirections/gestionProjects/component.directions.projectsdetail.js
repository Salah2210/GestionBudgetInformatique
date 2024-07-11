import React, { useEffect, useState, useRef } from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import { Link, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getProjectById,updateProject } from "../../../services/project_service";
import { addProjectFacture, deleteProjectFacture } from "../../../services/project_facture_service";
import DirectionsLayout from "../../component.directions.layout";
import 'bootstrap/dist/css/bootstrap.min.css';


function ProjectsDetailDir() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [showFactureForm, setShowFactureForm] = useState(false);
    const [factureData, setFactureData] = useState({
        name: "",
        type: "",
        date: "",
        amount: 0,
    });
    const [search, setSearch] = useState("");
    const [dateSearch, setDateSearch] = useState("");
    const [yearSearch, setYearSearch] = useState('');
    const [monthSearch, setMonthSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending order, 'desc' for descending order
    const [sortField, setSortField] = useState('name'); // 'name', 'type', 'date', 'amount'
    const chartRef = useRef(null);
    const [page, setPage] = useState(1);
    const [perPage] = useState(8); // Number of factures per page

    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await getProjectById(id);
                const projectData = response.data;
                // Calculate remaining budget when fetching project data
                const totalFactureAmount = projectData.factures.reduce((total, facture) => total + facture.amount, 0);
                const remainingBudget = projectData.initialBudget - totalFactureAmount;
                setProject({ ...projectData, remainingBudget });
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        }

        fetchProject();
        return () => {
            // Cleanup function to destroy the chart when component unmounts
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [id]);

    async function deleteFacture(factureId) {
        try {
            await deleteProjectFacture(id, factureId);
            const deletedFacture = project.factures.find(facture => facture._id === factureId);
            if (deletedFacture) {
                setProject(prevProject => {
                    const newRemainingBudget = prevProject.remainingBudget + deletedFacture.amount;
                    const updatedFactures = prevProject.factures.filter(facture => facture._id !== factureId);
                    return {
                        ...prevProject,
                        remainingBudget: newRemainingBudget,
                        factures: updatedFactures
                    };
                });
            }
        } catch (error) {
            console.error("Error deleting facture:", error);
        }
    }

    async function addFacture() {
        if (project.remainingBudget === 0 || project.remainingBudget <= 0) {
            alert("Cannot add more factures as the remaining budget is 0.");
            setShowFactureForm(false);
        } else {
            setShowFactureForm(true);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (!project || !factureData) {
            console.error("Project or facture data is undefined.");
            return;
        }
        if (factureData.amount > project.remainingBudget) {
            alert("Facture amount cannot surpass the remaining budget.");
            return;
        }

        try {
            const response = await addProjectFacture(id, factureData);
            const newFacture = response.data;
            const updatedFactures = [...project.factures, newFacture];
            const totalFactureAmount = updatedFactures.reduce((total, facture) => total + facture.amount, 0);
            const remainingBudget = project.initialBudget - totalFactureAmount;
            setProject(prevProject => ({
                ...prevProject,
                factures: updatedFactures,
                remainingBudget: remainingBudget
            }));
            setShowFactureForm(false);
            setFactureData({
                name: "",
                type: "",
                date: "",
                amount: 0
            });
        } catch (error) {
            console.error("Error adding facture:", error);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFactureData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function updateRemainingBudget() {
        if (project && project.factures) {
            const totalFactureAmount = project.factures.reduce((total, facture) => total + facture.amount, 0);
            const remainingBudget = project.initialBudget - totalFactureAmount;
            setProject(prevProject => ({
                ...prevProject,
                remainingBudget
            }));
        }
    }

    async function updateProjectWithRemainingBudget(id, updatedProjectData) {
        try {
            const projectWithRemainingBudget = {
                ...updatedProjectData,
                remainingBudget: updatedProjectData.remainingBudget
            };
            await updateProject(id, projectWithRemainingBudget);
        } catch (error) {
            console.error("Error updating project with remaining budget:", error);
        }
    }

    if (!project) {
        return <div>Loading...</div>;
    }

    const { name, type, date, amount } = factureData;
    const factures = project.factures || [];
    const filteredFactures = factures.filter((facture) => {
        const nameMatch = search.toLowerCase() === '' || facture.name.toLowerCase().includes(search.toLowerCase());
        const factureDate = new Date(facture.date);
        const factureDateFormatted = factureDate.toISOString().split('T')[0];
        const factureYear = factureDate.getFullYear().toString();
        const factureMonth = (factureDate.getMonth() + 1).toString().padStart(2, '0'); // +1 because getMonth() is zero-based
        const yearMatch = yearSearch === '' || factureYear === yearSearch;
        const monthMatch = monthSearch === '' || factureMonth === monthSearch;
        const dateMatch = dateSearch === '' || factureDateFormatted === dateSearch;
        return nameMatch && yearMatch && monthMatch && dateMatch;
    }).sort((a, b) => {
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
    const paginatedFactures = filteredFactures.slice(startIndex, endIndex);

    const chartData = {
        labels: ["Initial Budget", "Remaining Budget"],
        datasets: [
            {
                label: "Budget",
                data: [project.initialBudget, project.remainingBudget],
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
            <DirectionsLayout />

            <div style={{ display: "flex" }}>
                <div style={{ flex: 2 }}>
                    <h2>Project Details</h2>
                    <p style={{marginLeft:'40px'}}><strong>Name:</strong> {project.name}</p>
                    <p style={{marginLeft:'40px'}}><strong>Description:</strong> {project.description}</p>
                    <p style={{marginLeft:'40px'}}><strong>Initial Budget:</strong> {project.initialBudget}</p>
                    <p style={{marginLeft:'40px'}}><strong>Remaining Budget:</strong> {project.remainingBudget}</p>
                    <p style={{marginLeft:'40px'}}><strong>Date:</strong> {project.pdate ? project.pdate.split('T')[0] : ''}</p>
                </div>
                <div style={{ flex: 2 }}>
                    <Doughnut data={chartData} options={chartOptions} />
                </div>
            </div>

            <Form>
            <InputGroup className='my-2'>
                    <div className='me-4 mx-2'>
                    <Form.Label className='me-1'><strong>Chercher par Name:</strong></Form.Label>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by name'
                        className='me-2'
                    />
                    </div>
                    <div className='me-4 mx-2'>
                    <Form.Label className='me-1'><strong>chercher par Date:</strong></Form.Label>
                        <Form.Control
                        type="date"
                        onChange={(e) => setDateSearch(e.target.value)}
                        placeholder='Search by date'
                        className='me-3'
                    /></div>
                    <div className='me-4 mx-2'>
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
                    <div className='me-4 mx-2'>
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

                    <div className='me-4 mx-2'>
                    <Form.Label className='me-1'><strong>Sort:</strong></Form.Label>
                        <select name="sortField" value={sortField} onChange={(e) => setSortField(e.target.value)} className="form-select me-1">
                            <option value="name">Name</option>
                                <option value="type">Type</option>
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                        </select>
                        <select name="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="form-select">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <div className='me-3 mx-2 my-3' style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Link className='my-2' to="/directions/gestionProjects"><strong>Back to Projects</strong></Link>                       
                        </div>
                </InputGroup>
            </Form>
            
                        <h2><i>Liste des Factures</i></h2>

            <table className="table table-bordered align-middle">
                    <thead className="bg-light">
                        <tr className="table-light">
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Name</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Type</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Date</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedFactures.map((facture) => (
                        <tr key={facture._id}>
                            <td style={{textAlign: 'center'}}>{facture.name}</td>
                            <td style={{textAlign: 'center'}}>{facture.type}</td>
                            <td style={{textAlign: 'center'}}>{new Date(facture.date).toISOString().split('T')[0]}</td>
                            <td style={{textAlign: 'center'}}>{facture.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-center mt-4">
                <button className='btn btn-info me-2' disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Previous
                </button>
                <span className='me-2'>Page {page} of {Math.ceil(filteredFactures.length / perPage)}</span>
                <button className='btn btn-info me-2' disabled={endIndex >= filteredFactures.length} onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProjectsDetailDir
;