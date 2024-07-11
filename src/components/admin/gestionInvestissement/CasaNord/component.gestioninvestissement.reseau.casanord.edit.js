import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCasaNordById, updateCasaNord } from "../../../../services/directions/casanord_service"


function CasaNordEdit(){
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
    
    const {id}=useParams()
    useEffect(()=>{
        getCasaNord()
    },[])

    async function getCasaNord(){
        const rep= await getCasaNordById(id)
        setCode(rep.data.code)
        setBranche(rep.data.branche)
        setDireg(rep.data.direg)
        setType(rep.data.type)
        setClassf(rep.data.classf)
        setBpt(rep.data.bpt)
        setEpt(rep.data.ept)
        setBpp(rep.data.bpp)
        setEpp(rep.data.epp)
        setBimfp(rep.data.bimfp)
        setEimfp(rep.data.eimfp)
        setBiind(rep.data.biind)
        setEiind(rep.data.eiind)
        setBic(rep.data.bic)
        setEic(rep.data.eic)
        setBsc(rep.data.bsc)
        setEsc(rep.data.esc)
        setBpabx(rep.data.bpabx)
        setEpabx(rep.data.epabx)
        setBptel(rep.data.bptel)
        setEptel(rep.data.eptel)
        setBci(rep.data.bci)
        setEci(rep.data.eci)
        setComent(rep.data.coment)
    }

    async function submitCasaNord(e){
        e.preventDefault()
        const casanord={"_id":id,"code":code,"branche":branche,"direg":direg,"type":type,"classf":classf,
                        "bpt":bpt,"ept":ept,"bpp":bpp,"epp":epp,"bimfp":bimfp,"eimfp":eimfp,
                        "biind":biind,"eiind":eiind,"bic":bic,"eic":eic,"bsc":bsc,"esc":esc,
                        "bpabx":bpabx,"epabx":epabx,"bptel":bptel,"eptel":eptel,"bci":bci,
                        "eci":eci,"coment":coment}
        await updateCasaNord(casanord)
        navigate("/admin/gestioninvestissements/reseau/casanord")
    }

    return (
        <div className="container" id="form-contact">
            <h2>{branche}</h2>
            <form onSubmit={(e)=> submitCasaNord(e)}>
            <label className="form-label" htmlFor="coment">Commentaire:</label>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <input
                            className="me-1"
                            style={{
                                width: '50%', // Adjust the width as needed
                                padding: '12px', // Increase padding for larger input
                                boxSizing: 'border-box',
                                borderRadius: '10px', // Use 'px' instead of '%'
                                fontSize: '16px', // Increase font size for better visibility
                                paddingBottom: '120px', // Fixed paddingBottom value in pixels
                              }}
                            onChange={e => setComent(e.target.value)}
                            type="text"
                            id="coment"
                            value={coment}
                        />
                        <div style={{ marginBottom:'35px', marginLeft: '30px' }}>
                            <b >Poste de Travail:</b> {bpt}<br />
                            <b>PC Portable:</b> {bpp}<br />
                            <b>Imprimante MFP:</b> {bimfp}<br />
                            <b>Imprimante individuelle:</b> {biind}<br />
                            <b>Imprimante couleur:</b> {bic}<br />
                            <b>Scanner:</b> {bsc}<br />
                            <b>PABX:</b> {bpabx}<br />
                            <b>Poste Téléphonique:</b> {bptel}<br />
                            <b>Câblage informatique:</b> {bci}<br />
                        </div>
                        </div>
            
            <input className="m-2 btn btn-primary" type={"submit"} value={"Enregistrer"}/>
             <button style={{backgroundColor:'#130f40',marginBottom:'15px'}} className="m-2" to='admin/gestioninvestissements/reseau/casanord'>&lt;Back</button>
                

            
            <label className="form-label" htmlFor={"code"}>Code:</label>
             <input className="form-control" onChange={e=>setCode(e.target.value)} type={"text"} id={"code"} value={code} readOnly/>
             <label className="form-label" htmlFor={"branche"}>Branche:</label>
             <input className="form-control" onChange={e=>setBranche(e.target.value)} type={"text"} id={"branche"} value={branche} readOnly/>
             <label className="form-label" htmlFor={"direg"}>Direction régionale:</label>
             <input className="form-control" onChange={e=>setDireg(e.target.value)} type={"text"} id={"direg"} value={direg} readOnly/>
             <label className="form-label" htmlFor={"type"}>Type:</label>
             <input className="form-control" onChange={e=>setType(e.target.value)} type={"text"} id={"type"} value={type} readOnly/>
             <label className="form-label" htmlFor={"classf"}>Classification PV:</label>
             <input className="form-control" onChange={e=>setClassf(e.target.value)} type={"text"} id={"classf"} value={classf} readOnly/>
             <label className="form-label" htmlFor={"bpt"}>Besoin Poste de Travail:</label>
             <input className="form-control" onChange={e=>setBpt(e.target.value)} type={"number"} id={"bpt"} value={bpt} readOnly/>
             <label className="form-label" htmlFor={"ept"}>Explication Poste de Travail:</label>
             <input className="form-control" onChange={e=>setEpt(e.target.value)} type={"text"} id={"ept"} value={ept} readOnly/>
             <label className="form-label" htmlFor={"bpp"}>Besoin PC Portable:</label>
             <input className="form-control" onChange={e=>setBpp(e.target.value)} type={"number"} id={"bpp"} value={bpp} readOnly/>
             <label className="form-label" htmlFor={"epp"}>Explication PC Portable:</label>
             <input className="form-control" onChange={e=>setEpp(e.target.value)} type={"text"} id={"epp"} value={epp} readOnly/>
             <label className="form-label" htmlFor={"bimfp"}>Besoin Imprimante MFP:</label>
             <input className="form-control" onChange={e=>setBimfp(e.target.value)} type={"number"} id={"bimfp"} value={bimfp} readOnly/>
             <label className="form-label" htmlFor={"eimfp"}>Explication Imprimante MFP:</label>
             <input className="form-control" onChange={e=>setEimfp(e.target.value)} type={"text"} id={"eimfp"} value={eimfp} readOnly/>
             <label className="form-label" htmlFor={"biind"}>Besoin Imprimante individuelle:</label>
             <input className="form-control" onChange={e=>setBiind(e.target.value)} type={"number"} id={"biind"} value={biind} readOnly/>
             <label className="form-label" htmlFor={"eiind"}>Explication Imprimante individuelle:</label>
             <input className="form-control" onChange={e=>setEiind(e.target.value)} type={"text"} id={"eiind"} value={eiind} readOnly/>
             <label className="form-label" htmlFor={"bic"}>Besoin Imprimante couleur:</label>
             <input className="form-control" onChange={e=>setBic(e.target.value)} type={"number"} id={"bic"} value={bic} readOnly/>
             <label className="form-label" htmlFor={"eic"}>Explication Imprimante couleur:</label>
             <input className="form-control" onChange={e=>setEic(e.target.value)} type={"text"} id={"eic"} value={eic} readOnly/>
             <label className="form-label" htmlFor={"bsc"}>Besoin Scanner:</label>
             <input className="form-control" onChange={e=>setBsc(e.target.value)} type={"number"} id={"bsc"} value={bsc} readOnly/>
             <label className="form-label" htmlFor={"esc"}>Explication Scanner:</label>
             <input className="form-control" onChange={e=>setEsc(e.target.value)} type={"text"} id={"esc"} value={esc} readOnly/>
             <label className="form-label" htmlFor={"bpabx"}>Besoin PABX:</label>
             <input className="form-control" onChange={e=>setBpabx(e.target.value)} type={"number"} id={"bpabx"} value={bpabx} readOnly/>
             <label className="form-label" htmlFor={"epabx"}>Explication PABX:</label>
             <input className="form-control" onChange={e=>setEpabx(e.target.value)} type={"text"} id={"epabx"} value={epabx} readOnly/>
             <label className="form-label" htmlFor={"bptel"}>Besoin Poste Téléphonique:</label>
             <input className="form-control" onChange={e=>setBptel(e.target.value)} type={"number"} id={"bptel"} value={bptel} readOnly/>
             <label className="form-label" htmlFor={"eptel"}>Explication Poste Téléphonique:</label>
             <input className="form-control" onChange={e=>setEptel(e.target.value)} type={"text"} id={"eptel"} value={eptel} readOnly/>
             <label className="form-label" htmlFor={"bci"}>Besoin Câblage informatique:</label>
             <input className="form-control" onChange={e=>setBci(e.target.value)} type={"number"} id={"bci"} value={bci} readOnly/>
             <label className="form-label" htmlFor={"eci"}>Explication Câblage informatique:</label>
             <input className="form-control" onChange={e=>setEci(e.target.value)} type={"text"} id={"eci"} value={eci} readOnly/>
             
        </form>
        </div>
    )
}

export default CasaNordEdit
