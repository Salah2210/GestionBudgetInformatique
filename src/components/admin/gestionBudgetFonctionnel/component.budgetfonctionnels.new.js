import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { addBudgetfonctionnel } from "../../../services/budgetfonctionnel_service" 


function BudgetfonctionnelNew(){
    const [rubrique,setRubrique]=useState("")
    const [budget,setBudget]=useState("")
    const [rbudget,setRbudget]=useState("")
    const [bfdate,setBfdate]=useState("")

    const navigate= useNavigate()  
    
    async function handleForm(event){
        event.preventDefault()
        const budgetfonctionnel={"rubrique":rubrique,"budget":budget,"rbudget":rbudget,"bfdate":bfdate}
        try {
            await addBudgetfonctionnel(budgetfonctionnel)
            toast.success("Budget de fonctionnement added successfully!");
            setTimeout(() => {
                navigate("/admin/budgetfonctionnels")
            }, 2000); // Adjust the timeout duration if needed
        } catch (error) {
                console.error("Error creating Budget de fonctionnement :", error);
                toast.error("Failed to create Budget de fonctionnement: '" + rubrique + "'already existed.");
            }
    }
    return (
        <div className="containerr" id="form-contact">
                                    <ToastContainer />
            <h1 >Budget Fonctionnement &gt;<span style={{fontStyle:'oblique', fontSize: '0.5em', fontWeight: 'normal', paddingRight: '80px' }}>Ajouter Budget</span></h1>

            <form onSubmit={event=> handleForm(event)}>
             <label className="form-label" htmlFor={"rubrique"}>Rubrique:</label>
             <input className="form-control" onChange={e=>setRubrique(e.target.value)} type={"text"} id={"rubrique"} required/>
             <label className="form-label" htmlFor={"budget"}>Budget :</label>
             <input className="form-control" onChange={e=>setBudget(e.target.value)} type={"number"} id={"budget"} required/>
             <label className="form-label" htmlFor={"bfdate"}>Date:</label>
             <input className="form-control" onChange={e=>setBfdate(e.target.value)} type={"date"} id={"bfdate"} required/>
             
             <input className="m-2 btn btn-primary mt-2" type={"submit"} value={"Enregistrer"}/>
             <input className="m-2 btn btn-secondary" type={"reset"} value={"Annuler"}/>
             <button
          style={{ backgroundColor: "#130f40", color: "#fff", border: "none", cursor: "pointer" }}
          className="m-2"
          onClick={() => navigate("/admin/budgetfonctionnels")}
        >
          &lt; Back
        </button>
        </form>
        </div>
    )
}

export default BudgetfonctionnelNew