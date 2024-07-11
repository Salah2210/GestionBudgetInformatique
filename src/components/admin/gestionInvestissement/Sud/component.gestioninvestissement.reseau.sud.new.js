import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { addSud } from "../../../../services/directions/sud_service" 

function SudNew(){
    const [code,setCode]=useState("")
    const [branche,setBranche]=useState("")
    const [direg,setDireg]=useState("")
    const [type,setType]=useState("")
    const [classf,setClassf]=useState("")
    const [bpt,setBpt]=useState("")
    const [ept,setEpt]=useState("")
    const [bpp,setBpp]=useState("")
    const [epp,setEpp]=useState("")
    const [bimfp,setBimfp]=useState("")
    const [eimfp,setEimfp]=useState("")
    const [biind,setBiind]=useState("")
    const [eiind,setEiind]=useState("")
    const [bic,setBic]=useState("")
    const [eic,setEic]=useState("")
    const [bsc,setBsc]=useState("")
    const [esc,setEsc]=useState("")
    const [bpabx,setBpabx]=useState("")
    const [epabx,setEpabx]=useState("")
    const [bptel,setBptel]=useState("")
    const [eptel,setEptel]=useState("")
    const [bci,setBci]=useState("")
    const [eci,setEci]=useState("")
    const [coment,setComent]=useState("")

    const navigate= useNavigate()
    
    async function handleForm(event){
        event.preventDefault()
        const sud={"code":code,"branche":branche,"direg":direg,"type":type,"classf":classf,
                        "bpt":bpt,"ept":ept,"bpp":bpp,"epp":epp,"bimfp":bimfp,"eimfp":eimfp,
                        "biind":biind,"eiind":eiind,"bic":bic,"eic":eic,"bsc":bsc,"esc":esc,
                        "bpabx":bpabx,"epabx":epabx,"bptel":bptel,"eptel":eptel,"bci":bci,
                        "eci":eci,"coment":coment
                        }
        addSud(sud)
        navigate("/admin/gestioninvestissements/reseau/sud")
    }
    return (
        <div className="container" id="form-contact">
                                                <h2>Sud</h2>

            <form onSubmit={event=> handleForm(event)}>
             <label className="form-label" htmlFor={"code"}>Code:</label>
             <input className="form-control" onChange={e=>setCode(e.target.value)} type={"text"} id={"code"}/>
             <label className="form-label" htmlFor={"branche"}>Branche:</label>
             <input className="form-control" onChange={e=>setBranche(e.target.value)} type={"text"} id={"branche"}/>
             <label className="form-label" htmlFor={"direg"}>Direction régionale:</label>
             <input className="form-control" onChange={e=>setDireg(e.target.value)} type={"text"} id={"direg"}/>
             <label className="form-label" htmlFor={"type"}>Type:</label>
             <input className="form-control" onChange={e=>setType(e.target.value)} type={"text"} id={"type"}/>
             <label className="form-label" htmlFor={"classf"}>Classification PV:</label>
             <input className="form-control" onChange={e=>setClassf(e.target.value)} type={"text"} id={"classf"}/>
             <label className="form-label" htmlFor={"bpt"}>Besoin Poste de Travail:</label>
             <input className="form-control" onChange={e=>setBpt(e.target.value)} type={"number"} id={"bpt"}/>
             <label className="form-label" htmlFor={"ept"}>Explication Poste de Travail:</label>
             <input className="form-control" onChange={e=>setEpt(e.target.value)} type={"text"} id={"ept"}/>
             <label className="form-label" htmlFor={"bpp"}>Besoin PC Portable:</label>
             <input className="form-control" onChange={e=>setBpp(e.target.value)} type={"number"} id={"bpp"}/>
             <label className="form-label" htmlFor={"epp"}>Explication PC Portable:</label>
             <input className="form-control" onChange={e=>setEpp(e.target.value)} type={"text"} id={"epp"}/>
             <label className="form-label" htmlFor={"bimfp"}>Besoin Imprimante MFP:</label>
             <input className="form-control" onChange={e=>setBimfp(e.target.value)} type={"number"} id={"bimfp"}/>
             <label className="form-label" htmlFor={"eimfp"}>Explication Imprimante MFP:</label>
             <input className="form-control" onChange={e=>setEimfp(e.target.value)} type={"text"} id={"eimfp"}/>
             <label className="form-label" htmlFor={"biind"}>Besoin Imprimante individuelle:</label>
             <input className="form-control" onChange={e=>setBiind(e.target.value)} type={"number"} id={"biind"}/>
             <label className="form-label" htmlFor={"eiind"}>Explication Imprimante individuelle:</label>
             <input className="form-control" onChange={e=>setEiind(e.target.value)} type={"text"} id={"eiind"}/>
             <label className="form-label" htmlFor={"bic"}>Besoin Imprimante couleur:</label>
             <input className="form-control" onChange={e=>setBic(e.target.value)} type={"number"} id={"bic"}/>
             <label className="form-label" htmlFor={"eic"}>Explication Imprimante couleur:</label>
             <input className="form-control" onChange={e=>setEic(e.target.value)} type={"text"} id={"eic"}/>
             <label className="form-label" htmlFor={"bsc"}>Besoin Scanner:</label>
             <input className="form-control" onChange={e=>setBsc(e.target.value)} type={"number"} id={"bsc"}/>
             <label className="form-label" htmlFor={"esc"}>Explication Scanner:</label>
             <input className="form-control" onChange={e=>setEsc(e.target.value)} type={"text"} id={"esc"}/>
             <label className="form-label" htmlFor={"bpabx"}>Besoin PABX:</label>
             <input className="form-control" onChange={e=>setBpabx(e.target.value)} type={"number"} id={"bpabx"}/>
             <label className="form-label" htmlFor={"epabx"}>Explication PABX:</label>
             <input className="form-control" onChange={e=>setEpabx(e.target.value)} type={"text"} id={"epabx"}/>
             <label className="form-label" htmlFor={"bptel"}>Besoin Poste Téléphonique:</label>
             <input className="form-control" onChange={e=>setBptel(e.target.value)} type={"number"} id={"bptel"}/>
             <label className="form-label" htmlFor={"eptel"}>Explication Poste Téléphonique:</label>
             <input className="form-control" onChange={e=>setEptel(e.target.value)} type={"text"} id={"eptel"}/>
             <label className="form-label" htmlFor={"bci"}>Besoin Câblage informatique:</label>
             <input className="form-control" onChange={e=>setBci(e.target.value)} type={"number"} id={"bci"}/>
             <label className="form-label" htmlFor={"eci"}>Explication Câblage informatique:</label>
             <input className="form-control" onChange={e=>setEci(e.target.value)} type={"text"} id={"eci"}/>
             <label className="form-label" htmlFor={"coment"}>Commentaire:</label>
             <input className="form-control" onChange={e=>setComent(e.target.value)} type={"text"} id={"coment"} readOnly/>


             <input className="m-2 btn btn-primary mt-2" type={"submit"} value={"Enregistrer"}/>
             <input className="m-2 btn btn-secondary" type={"reset"} value={"Annuler"}/>
             <button
          style={{ backgroundColor: "#130f40", color: "#fff", border: "none", cursor: "pointer" }}
          className="m-2"
          onClick={() => navigate("/admin/gestioninvestissements/reseau/sud")}
        >&lt; Back</button>
        </form>
        </div>
    )
}

export default SudNew