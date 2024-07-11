import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Link, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getBudgetfonctionnelById, updateBudgetfonctionnel, addBudgetfonctionnelcontractprestation, deleteBudgetfonctionnelcontractprestation } from "../../../services/budgetfonctionnel_service";
import DirectionsLayout from "../../component.directions.layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import addicon from '../../images/add.png';
import editicon from '../../images/edit.png';
import delicon from '../../images/trash.png';
import detailicon from '../../images/details.png'
import { Chart, ArcElement } from 'chart.js';


Chart.register(ArcElement);
function FonctionnementDetailDir() {
    const { id } = useParams();
    const [budgetfonctionnel, setBudgetfonctionnel] = useState(null);
    const [showBudgetfonctionnelForm, setShowBudgetfonctionnelForm] = useState(false);
    const [contractprestationData, setContractprestationData] = useState({
        name: "",
        description: "",
        date: "",
        cbudget: 0,
        rcbudget: 0,
    });
    const [search, setSearch] = useState("");
    const [dateSearch, setDateSearch] = useState("");
    const [yearSearch, setYearSearch] = useState('');
    const [monthSearch, setMonthSearch] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending order, 'desc' for descending order
    const [sortField, setSortField] = useState('name'); // Default sorting field
    const [page, setPage] = useState(1);
    const [perPage] = useState(4); // Number of contractprestations per page

    useEffect(() => {
        async function fetchBudgetfonctionnel() {
            try {
                const response = await getBudgetfonctionnelById(id);
                const budgetfonctionnelData = response.data;
                // Calculate remaining budget when fetching budgetfonctionnel data
                const totalContractprestationAmount = budgetfonctionnelData.contractprestations.reduce((total, contractprestation) => total + contractprestation.cbudget, 0);
                const rbudget = budgetfonctionnelData.budget - totalContractprestationAmount;
                setBudgetfonctionnel({ ...budgetfonctionnelData, rbudget });
            } catch (error) {
                console.error("Error fetching budgetfonctionnel:", error);
            }
        }

        fetchBudgetfonctionnel();
    }, [id]);

    async function deleteContractprestation(contractprestationId) {
        try {
            await deleteBudgetfonctionnelcontractprestation(id, contractprestationId);
            const deletedContractprestation = budgetfonctionnel.contractprestations.find(contractprestation => contractprestation._id === contractprestationId);
            if (deletedContractprestation) {
                const newRBudget = budgetfonctionnel.rbudget + deletedContractprestation.cbudget;
                const updatedContractprestations = budgetfonctionnel.contractprestations.filter(contractprestation => contractprestation._id !== contractprestationId);
                setBudgetfonctionnel(prevBudgetfonctionnel => ({
                    ...prevBudgetfonctionnel,
                    rbudget: newRBudget,
                    contractprestations: updatedContractprestations
                }));
            }
        } catch (error) {
            console.error("Error deleting ContractPrestation:", error);
        }
    }

    async function addContractprestation() {
        setShowBudgetfonctionnelForm(true);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await addBudgetfonctionnelcontractprestation(id, contractprestationData);
            const newContractprestation = response.data;
            updateRbudget(); // Update remaining budget after adding contractprestation
            setBudgetfonctionnel(prevBudgetfonctionnel => ({
                ...prevBudgetfonctionnel,
                contractprestations: [...prevBudgetfonctionnel.contractprestations, newContractprestation]
            }));
            setShowBudgetfonctionnelForm(false);
            setContractprestationData({
                name: "",
                description: "",
                date: "",
                cbudget: 0,
                rcbudget: 0,
            });
            updateBudgetfonctionnelWithRbudget(id, budgetfonctionnel); // Update budgetfonctionnel in the database with new remaining budget
        } catch (error) {
            console.error("Error adding contractprestation:", error);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setContractprestationData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function updateRbudget() {
        if (budgetfonctionnel && budgetfonctionnel.contractprestations) {
            const totalContractprestationAmount = budgetfonctionnel.contractprestations.reduce((total, contractprestation) => total + contractprestation.cbudget, 0);
            const rbudget = budgetfonctionnel.budget - totalContractprestationAmount;
            setBudgetfonctionnel(prevBudgetfonctionnel => ({
                ...prevBudgetfonctionnel,
                rbudget
            }));
        }
    }

    async function updateBudgetfonctionnelWithRbudget(id, updatedBudgetfonctionnelData) {
        try {
            const budgetfonctionnelWithRbudget = {
                ...updatedBudgetfonctionnelData,
                rbudget: updatedBudgetfonctionnelData.rbudget
            };
            await updateBudgetfonctionnel(id, budgetfonctionnelWithRbudget);
        } catch (error) {
            console.error("Error updating budgetfonctionnel with remaining budget:", error);
        }
    }

    if (!budgetfonctionnel) {
        return <div>Loading...</div>;
    }

    const { name, description, date, cbudget, rcbudget } = contractprestationData;
    const contractprestations = budgetfonctionnel.contractprestations || [];

    const filteredContractprestations = contractprestations.filter((contractprestation) => {
        const nameMatch = search.toLowerCase() === '' || contractprestation.name.toLowerCase().includes(search.toLowerCase());
        const contractprestationDate = new Date(contractprestation.date);
        const contractprestationDateFormatted = contractprestationDate.toISOString().split('T')[0];
        const contractprestationYear = contractprestationDate.getFullYear().toString();
        const contractprestationMonth = (contractprestationDate.getMonth() + 1).toString().padStart(2, '0'); // +1 because getMonth() is zero-based
        const yearMatch = yearSearch === '' || contractprestationYear === yearSearch;
        const monthMatch = monthSearch === '' || contractprestationMonth === monthSearch;
        const dateMatch = dateSearch === '' || contractprestationDateFormatted === dateSearch;
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
    const paginatedContractprestations = filteredContractprestations.slice(startIndex, endIndex);


    return (
        <div>
            <DirectionsLayout />
            <div style={{ display: "flex" }}>
                <div style={{ flex: 2 }}>
                    <h2>Budget de fonctionnement Details</h2>
                    <p style={{marginLeft:'40px'}}><strong>Name: </strong>{budgetfonctionnel.rubrique}</p>
                    <p style={{marginLeft:'40px'}}><strong>Budget: </strong>{budgetfonctionnel.budget}</p>
                    <p style={{marginLeft:'40px'}}><strong>Remaining Budget: </strong>{budgetfonctionnel.rbudget}</p>
                    <p style={{marginLeft:'40px'}}><strong>Date: </strong>{budgetfonctionnel.bfdate ? budgetfonctionnel.bfdate.split('T')[0] : ''}</p>
                </div>
                <div style={{ flex: 2 }}>
                    <Doughnut
                        data={{
                            labels: ["Budget", "Remaining Budget"],
                            datasets: [
                                {
                                    label: "Budget",
                                    data: [budgetfonctionnel.budget, budgetfonctionnel.rbudget],
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
                        }}
                        options={{
                            maintainAspectRatio: false,
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: 'top',
                                },
                            },
                        }}
                    />
                </div>
            </div>

            <Form>
            <InputGroup className='my-2'>
                    <div className='me-2'>
                    <Form.Label className='me-1'><strong>Chercher par Name:</strong></Form.Label>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by name'
                        className='me-2'
                    />
                    </div>
                    <div className='me-2'>
                    <Form.Label className='me-1'><strong>chercher par Date:</strong></Form.Label>
                        <Form.Control
                        type="date"
                        onChange={(e) => setDateSearch(e.target.value)}
                        placeholder='Search by date'
                        className='me-3'
                    /></div>
                    <div className='me-2'>
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
                    <div className='me-2'>
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

                    <div className='me-3'>
                    <Form.Label className='me-1'><strong>Sort:</strong></Form.Label>
                        <select name="sortField" value={sortField} onChange={(e) => setSortField(e.target.value)} className="form-select me-1">
                                <option value="name">Name</option>
                                <option value="description">Description</option>
                                <option value="date">Date</option>
                                <option value="cbudget">Amount</option>
                                <option value="rcbudget">Remaining Amount</option>
                        </select>
                        <select name="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="form-select">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                    <div className='me-1 my-3' style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link className='my-1' to="/directions/gestionFonctionnement"><strong>Back to Budget de Fonctionnements</strong></Link>
                        </div>
                </InputGroup>
            </Form>
            <h2><i>Liste Contract/Prestation</i></h2>
            <table className="table table-bordered align-middle">
                    <thead className="bg-light">
                        <tr className="table-light">
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Name</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Description</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Date</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Amount</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Remaining Amount</th>
                        <th style={{textAlign: 'center', marginLeft:'15px'}}>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedContractprestations.map((contractprestation, index) => (
                        <tr key={index}>
                            <td style={{textAlign: 'center'}}>{contractprestation.name}</td>
                            <td style={{textAlign: 'center'}}>{contractprestation.description}</td>
                            <td style={{textAlign: 'center'}}>{contractprestation.date.split('T')[0]}</td>
                            <td style={{textAlign: 'center'}}>{contractprestation.cbudget}</td>
                            <td style={{textAlign: 'center'}}>{contractprestation.rcbudget}</td>
                            <td style={{textAlign: 'center'}}>
                                <Link
                                style={{textAlign: 'center', marginLeft:'15px'}}
                                    className="btn btn-info"
                                    to={`/directions/budgetfonctionnels/${id}/contractprestations/${contractprestation._id}/factures`}>
                                     <img src={detailicon} alt="detail Icon" style={{width: '24px', height: '24px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px'
                                      }} className="detail-icon" />Suivre
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>         
            <div className="d-flex justify-content-center mt-4">
                <button className='btn btn-info me-2' disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Previous
                </button>
                <span className='me-2'>Page {page} of {Math.ceil(filteredContractprestations.length / perPage)}</span>
                <button className='btn btn-info me-2' disabled={endIndex >= filteredContractprestations.length} onClick={() => setPage(page + 1)}>
                    Next
                </button>
            </div>
            
        </div>
    );
}
export default FonctionnementDetailDir;
