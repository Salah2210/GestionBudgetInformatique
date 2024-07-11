import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getBudgetfonctionnelById, updateBudgetfonctionnel } from "../../../services/budgetfonctionnel_service"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function BudgetfonctionnelEdit(){
    const [budgetfonctionnel, setBudgetfonctionnel] = useState(null);

    const [rubrique,setRubrique]=useState("")
    const [budget,setBudget]=useState("")
    const [rbudget,setRbudget]=useState("")

    const [bfdate,setBfdate]=useState("")
    
    const navigate= useNavigate()

    const {id}=useParams()
    useEffect(()=>{
        getBudgetfonctionnel()
    },[])

    async function getBudgetfonctionnel(){
        const rep= await getBudgetfonctionnelById(id)
        const totalContractprestationAmount = rep.data.contractprestations.reduce((total, contractprestation) => total + contractprestation.cbudget, 0);
        const calculatedRbudget = rep.data.budget - totalContractprestationAmount;
        setBudgetfonctionnel(rep.data);
        setRubrique(rep.data.rubrique)
        setBudget(rep.data.budget)
        setRbudget(calculatedRbudget)

        setBfdate(rep.data.bfdate)

    }

    async function submitBudgetfonctionnel(e){
        e.preventDefault()
        const totalContractprestationAmount = budgetfonctionnel.contractprestations.reduce((total, contractprestation) => total + contractprestation.cbudget, 0);
        const calculatedRbudget = budget - totalContractprestationAmount;
        const p={"_id":id,"rubrique":rubrique,"budget":budget,"rbudget":calculatedRbudget,"bfdate":bfdate}
        try {
            await updateBudgetfonctionnel(p)
            toast.success("Budget de fonctionnement updated successfully!");
          setTimeout(() => {
            navigate("/admin/budgetfonctionnels")
          }, 2000); // Adjust the timeout duration if needed
        } catch (error) {
            console.error("Error Update Budget de fonctionnement :", error);
            toast.error("Failed to update Budget de fonctionnement'" + rubrique + "'already existed. / Or Date '"+ bfdate.split('T')[0] +"'cannot be after ContractPrestation's date");
        }
    }

    return (
        <div className="containerr" id="form-contact">
                                 <ToastContainer />
            <h1 >Budget Fonctionnement &gt;<span style={{fontStyle:'oblique', fontSize: '0.5em', fontWeight: 'normal', paddingRight: '100px' }}>Edit Budget</span></h1>

            <form onSubmit={(e)=> submitBudgetfonctionnel(e)}>
             <label className="form-label" htmlFor={"rubrique"}>Rubrique:</label>
             <input className="form-control" onChange={e=>setRubrique(e.target.value)} type={"text"} id={"rubrique"} value={rubrique}/>
             <label className="form-label" htmlFor={"budget"}>Budget:</label>
             <input className="form-control" onChange={e=>setBudget(e.target.value)} type={"number"} id={"budget"} value={budget}/>
             
             <label className="form-label" htmlFor={"bfdate"}>Date:</label>
             <input className="form-control" onChange={e=>setBfdate(e.target.value)} type={"date"} id={"bfdate"} value={bfdate}/>

             <input className="m-2 btn btn-primary" type={"submit"} value={"Enregistrer"}/>
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

export default BudgetfonctionnelEdit
