import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getSiegeById, updateSiege } from "../../../../services/siege_service"
import './siege.css';

function SiegeEdit(){
    const [dirdep,setDirdep]=useState("")
    const [npt,setNpt]=useState("")
    const [rpt,setRpt]=useState("")
    const [ncsp,setNcsp]=useState("")
    const [rcsp,setRcsp]=useState("")
    const [npp,setNpp]=useState("")
    const [rpp,setRpp]=useState("")
    const [niind,setNiind]=useState("")
    const [riind,setRiind]=useState("")
    const [nim,setNim]=useState("")
    const [rim,setRim]=useState("")
    const [nic,setNic]=useState("")
    const [ric,setRic]=useState("")
    const [nimc,setNimc]=useState("")
    const [rimc,setRimc]=useState("")
    const [nscc,setNscc]=useState("")
    const [rscc,setRscc]=useState("")
    const [nsc,setNsc]=useState("")
    const [rsc,setRsc]=useState("")
    const [nci,setNci]=useState("")
    const [rci,setRci]=useState("")
    const [nptel,setNptel]=useState("")
    const [rptel,setRptel]=useState("")
    const [nlog,setNlog]=useState("")
    const [rlog,setRlog]=useState("")

    const navigate= useNavigate()
    
    const {id}=useParams()
    useEffect(()=>{
        getSiege()
    },[])

    async function getSiege(){
        const rep= await getSiegeById(id)
        setDirdep(rep.data.dirdep)
        setNpt(rep.data.npt)
        setRpt(rep.data.rpt)
        setNcsp(rep.data.ncsp)
        setRcsp(rep.data.rcsp)
        setNpp(rep.data.npp)
        setRpp(rep.data.rpp)
        setNiind(rep.data.niind)
        setRiind(rep.data.riind)
        setNim(rep.data.nim)
        setRim(rep.data.rim)
        setNic(rep.data.nic)
        setRic(rep.data.ric)
        setNimc(rep.data.nimc)
        setRimc(rep.data.rimc)
        setNscc(rep.data.nscc)
        setRscc(rep.data.rscc)
        setNsc(rep.data.nsc)
        setRsc(rep.data.rsc)
        setNci(rep.data.nci)
        setRci(rep.data.rci)
        setNptel(rep.data.nptel)
        setRptel(rep.data.rptel)
        setNlog(rep.data.nlog)
        setRlog(rep.data.rlog)
    }

    async function submitSiege(e){
        e.preventDefault()
        const siege={"_id":id,"dirdep":dirdep,"npt":npt,"rpt":rpt,
                        "ncsp":ncsp,"rcsp":rcsp,"npp":npp,"rpp":rpp,
                        "niind":niind,"riind":riind,"nim":nim,"rim":rim,
                        "nic":nic,"ric":ric,"nimc":nimc,"rimc":rimc,
                        "nscc":nscc,"rscc":rscc,"nsc":nsc,"rsc":rsc,
                        "nci":nci,"rci":rci,"nptel":nptel,"rptel":rptel,
                        "nlog":nlog,"rlog":rlog}
        await updateSiege(siege)
        navigate("/admin/gestioninvestissements/siege")
    }

    return (
        <div>
        <div className="containerr" id="form-contact">
            <h2>{dirdep}</h2>
            <form onSubmit={(e)=> submitSiege(e)} className="form">
            <div className="form-group">
            <label className="form-label" htmlFor={"dirdep"}>DIR/DEP:</label>
             <input className="form-control" onChange={e=>setDirdep(e.target.value)} type={"text"} id={"dirdep"} value={dirdep} readOnly/>
             <label className="form-label" htmlFor={"npt"}>Nouveau Poste de travail:</label>
             <input className="form-control" onChange={e=>setNpt(e.target.value)} type={"number"} id={"npt"} value={npt} />
             <label className="form-label" htmlFor={"rpt"}>Remplacement Poste de travail:</label>
             <input className="form-control" onChange={e=>setRpt(e.target.value)} type={"number"} id={"rpt"} value={rpt} />
             <label className="form-label" htmlFor={"ncsp"}>Nouveau Configuration spécial PC(Mac-IMAC-STATION):</label>
             <input className="form-control" onChange={e=>setNcsp(e.target.value)} type={"number"} id={"ncsp"} value={ncsp} />
             <label className="form-label" htmlFor={"rcsp"}>Remplacement Configuration spécial PC(Mac-IMAC-STATION):</label>
             <input className="form-control" onChange={e=>setRcsp(e.target.value)} type={"number"} id={"rcsp"} value={rcsp} />
             <label className="form-label" htmlFor={"npp"}>Nouveau Pc Portable:</label>
             <input className="form-control" onChange={e=>setNpp(e.target.value)} type={"number"} id={"npp"} value={npp} />
             <label className="form-label" htmlFor={"rpp"}>Remplacement Pc Portable:</label>
             <input className="form-control" onChange={e=>setRpp(e.target.value)} type={"number"} id={"rpp"} value={rpp} />
             <label className="form-label" htmlFor={"niind"}>Nouveau Imprimante Individuelle:</label>
             <input className="form-control" onChange={e=>setNiind(e.target.value)} type={"number"} id={"niind"} value={niind} />
             <label className="form-label" htmlFor={"riind"}>Remplacement Imprimante Individuelle:</label>
             <input className="form-control" onChange={e=>setRiind(e.target.value)} type={"number"} id={"riind"} value={riind} />
             <label className="form-label" htmlFor={"nim"}>Nouveau Imprimante MFP:</label>
             <input className="form-control" onChange={e=>setNim(e.target.value)} type={"number"} id={"nim"} value={nim} />
             <label className="form-label" htmlFor={"rim"}>Remplacement Imprimante MFP:</label>
             <input className="form-control" onChange={e=>setRim(e.target.value)} type={"number"} id={"rim"} value={rim} />
             <label className="form-label" htmlFor={"nic"}>Nouveau Imprimante Couleur:</label>
             <input className="form-control" onChange={e=>setNic(e.target.value)} type={"number"} id={"nic"} value={nic} />
             <label className="form-label" htmlFor={"ric"}>Remplacement Imprimante Couleur:</label>
             <input className="form-control" onChange={e=>setRic(e.target.value)} type={"number"} id={"ric"} value={ric} />
             <label className="form-label" htmlFor={"nimc"}>Nouveau Imprimante MFP Couleur:</label>
             <input className="form-control" onChange={e=>setNimc(e.target.value)} type={"number"} id={"nimc"} value={nimc} />
             <label className="form-label" htmlFor={"rimc"}>Remplacement Imprimante MFP Couleur:</label>
             <input className="form-control" onChange={e=>setRimc(e.target.value)} type={"number"} id={"rimc"} value={rimc} />
             <label className="form-label" htmlFor={"nscc"}>Nouveau Scanner avec chargeur:</label>
             <input className="form-control" onChange={e=>setNscc(e.target.value)} type={"number"} id={"nscc"} value={nscc} />
             <label className="form-label" htmlFor={"rscc"}>Remplacement Scanner avec chargeur:</label>
             <input className="form-control" onChange={e=>setRscc(e.target.value)} type={"number"} id={"rscc"} value={rscc} />
             <label className="form-label" htmlFor={"nsc"}>Nouveau Scanner:</label>
             <input className="form-control" onChange={e=>setNsc(e.target.value)} type={"number"} id={"nsc"} value={nsc} />
             <label className="form-label" htmlFor={"rsc"}>Remplacement Scanner:</label>
             <input className="form-control" onChange={e=>setRsc(e.target.value)} type={"number"} id={"rsc"} value={rsc} />
             <label className="form-label" htmlFor={"nci"}>Nouveau Cablage Informatique:</label>
             <input className="form-control" onChange={e=>setNci(e.target.value)} type={"number"} id={"nci"} value={nci} />
             <label className="form-label" htmlFor={"rci"}>Remplacement Cablage Informatique:</label>
             <input className="form-control" onChange={e=>setRci(e.target.value)} type={"number"} id={"rci"} value={rci} />
             <label className="form-label" htmlFor={"nptel"}>Nouveau Poste telefonique:</label>
             <input className="form-control" onChange={e=>setNptel(e.target.value)} type={"number"} id={"nptel"} value={nptel} />
             <label className="form-label" htmlFor={"rptel"}>Remplacement Poste telefonique:</label>
             <input className="form-control" onChange={e=>setRptel(e.target.value)} type={"number"} id={"rptel"} value={rptel} />
             <label className="form-label" htmlFor={"nlog"}>Nouveau Logiciel:</label>
             <input className="form-control" onChange={e=>setNlog(e.target.value)} type={"number"} id={"nlog"} value={nlog} />
             <label className="form-label" htmlFor={"rlog"}>Remplacement Logiciel:</label>
             <input className="form-control" onChange={e=>setRlog(e.target.value)} type={"number"} id={"rlog"} value={rlog} />
             </div>
            <div style={{textAlign:'center'}}>
             <input className="m-2 btn btn-primary" type={"submit"} value={"Enregistrer"}/>
             <br></br><button style={{backgroundColor:'#130f40'}} className="m-2" to='admin/gestioninvestissements/Siege'>&lt;Back</button>
                 </div>
        </form>
        </div>
        </div>

    )
}

export default SiegeEdit
