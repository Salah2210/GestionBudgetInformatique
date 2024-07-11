import React, { useEffect, useState, useRef } from "react";
//import Chart from "chart.js/auto";
import { Doughnut, Chart } from "react-chartjs-2";
import { Link, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getBudgetfonctionnelcontractprestationById, updateBudgetfonctionnelcontractprestation, addFacture, deleteFacture,getBudgetfonctionnelById} from "../../../services/budgetfonctionnel_service";
import DirectionsLayout from "../../component.directions.layout";


function FonctionnementContractPrestationDetailDir() {
    const { id, contractprestationId } = useParams();
    const [contractprestation, setContractprestation] = useState(null);
    const [showContractprestationForm, setShowContractprestationForm] = useState(false);
    const [budgetfonctionnell, setBudgetfonctionnel] = useState(null);

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
    const [perPage] = useState(4); // Number of budgetfonctionnels per page

    useEffect(() => {
        async function fetchContractprestation() {
            try {
                const response = await getBudgetfonctionnelcontractprestationById(id,contractprestationId);
                const budgetfonctionnel = await getBudgetfonctionnelById(id);
                
                const contractprestationData = response.data;
                // Calculate remaining budget when fetching budgetfonctionnel data
                const totalFactureAmount = contractprestationData.factures.reduce((total, facture) => total + facture.amount, 0);
                const rcbudget = contractprestationData.cbudget - totalFactureAmount;
                
                setBudgetfonctionnel(budgetfonctionnel.data);
                setContractprestation({ ...contractprestationData, rcbudget });
            } catch (error) {
                console.error("Error fetching contractprestation:", error);
            }
        }

        fetchContractprestation();
        return () => {
            // Cleanup function to destroy the chart when component unmounts
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [id]);

    async function deletefacture(factureId) {
       
        try {
            // Delete the facture from the database
            await deleteFacture(id,contractprestationId, factureId);
            
            // Find the deleted facture to get its amount
            const deletedFacture = contractprestation.factures.find(facture => facture._id === factureId);
            if (deletedFacture) {
                // Update the project state to reflect the deletion
                setContractprestation(prevContractprestation => {
                    // Calculate the new remaining budget
                    const newRcBudget = prevContractprestation.rcbudget + deletedFacture.amount;
                    
                    // Filter out the deleted facture from the factures array
                    const updatedFactures = prevContractprestation.factures.filter(facture => facture._id !== factureId);
                    
                    // Return the updated project object
                    return {
                        ...prevContractprestation,
                        rcbudget: newRcBudget,
                        factures: updatedFactures
                    };
                });
            }
        } catch (error) {
            console.error("Error deleting facture:", error);
        }
    }
    
    async function addfacture() {
        setShowContractprestationForm(true);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await addFacture(id,contractprestationId, factureData);
            const newFacture = response.data;
            // Update remaining budget after adding budgetfonctionnel
            updateRbudget();
            setContractprestation(prevContractprestation => ({
                ...prevContractprestation,
                factures: [...prevContractprestation.factures, newFacture]
            }));
            setShowContractprestationForm(false);
            // Reset budgetfonctionnelData after submission
            setFactureData({
                //_id:"",
                name: "",
                type: "",
                date: "",
                amount: 0,
            });

            // Update budgetfonctionnel in the database with new remaining budget
            updateContractprestationWithRbudget(id,contractprestationId, contractprestation);
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

    function updateRbudget() {
        if (contractprestation && contractprestation.factures) {
            const totalFactureAmount = contractprestation.factures.reduce((total, facture) => total + facture.amount, 0);
            const rcbudget = contractprestation.cbudget - totalFactureAmount;
            setContractprestation(prevContractprestation => ({
                ...prevContractprestation,
                rcbudget
            }));
        }
    }

    
    async function updateContractprestationWithRbudget(id,contractprestationId, updatedContractprestationData) {
    try {
        // Include remainingBudget in the updated budgetfonctionnel data
        const contractprestationWithRbudget = {
            ...updatedContractprestationData,
            rcbudget: updatedContractprestationData.rcbudget
        };

        // Make a request to update the budgetfonctionnel with the new data including remainingBudget
        await updateBudgetfonctionnelcontractprestation(id,contractprestationId, contractprestationWithRbudget);
    } catch (error) {
        console.error("Error updating contractprestation with remaining cbudget:", error);
    }
}


    if (!contractprestation || !budgetfonctionnell) {
        return <div>Loading...</div>;
    }

const { name, type, date, amount } = factureData;
    const factures = contractprestation.factures || [];
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
        labels: ["Contract/Prestation Budget", "Remaining Contract/Prestation Budget"],
        datasets: [
            {
                label: "Budget",
                data: [contractprestation.cbudget, contractprestation.rcbudget],
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
                              <DirectionsLayout/>

                    {/* Budgetfonctionnel Details and Chart */}
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 2 }}>
                            <h2><b>Contract prestation Details:</b></h2>
                            <p><h6>Nom du Budget de fonctionnement: "{budgetfonctionnell.rubrique}"</h6></p>
                            <p style={{marginLeft:'40px'}}><strong>Name: </strong>{contractprestation.name}</p>
                            <p style={{marginLeft:'40px'}}><strong>Description:</strong> {contractprestation.description}</p>
                            <p style={{marginLeft:'40px'}}><strong>Date: </strong>{contractprestation.date.split('T')[0]}</p>
                            <p style={{marginLeft:'40px'}}><strong>Contract Budget: </strong>{contractprestation.cbudget}</p>
                            <p style={{marginLeft:'40px'}}><strong>Remaining contract Budget: </strong>{contractprestation.rcbudget}</p>
                        </div>

                        <div style={{ flex: 2 }}>
                                <Doughnut data={chartData} options={chartOptions} />
                            </div>
                    </div>
            
                    {/* Budgetfonctionnel Budgetfonctionnels */}
                    <Form>
                    <InputGroup className='my-2'>
                    <div className='me-4'>
                    <Form.Label className='me-1'><strong>Chercher par Name:</strong></Form.Label>
                    <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by name'
                        className='me-2'
                    />
                    </div>
                    <div className='me-4'>
                    <Form.Label className='me-1'><strong>chercher par Date:</strong></Form.Label>
                        <Form.Control
                        type="date"
                        onChange={(e) => setDateSearch(e.target.value)}
                        placeholder='Search by date'
                        className='me-3'
                    /></div>
                    <div className='me-4'>
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
                    <div className='me-4'>
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

                    <div className='me-4'>
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
                    <div className='me-1 my-3' style={{ display: 'flex', flexDirection: 'column' }}>
                        <Link className='my-2' to={`/directions/budgetfonctionnels/${id}/contractprestations`}><strong>Back to Contract/Prestation</strong></Link>
                      </div>  
                </InputGroup>
                    </Form>
                    <h2><i>Liste des Factures -Contract/Prestation-</i></h2>
                        <table className="table table-bordered align-middle">
                              <thead className="bg-light">
                                <tr className="table-light">
                                <th style={{textAlign: 'center', marginLeft:'15px'}}>Name</th>
                                <th style={{textAlign: 'center', marginLeft:'15px'}}>type</th>
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
        export default FonctionnementContractPrestationDetailDir;