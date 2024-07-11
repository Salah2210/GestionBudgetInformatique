/** import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GestionProjects from './GestionProjects'; // Make sure to create this component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Select an option:</p>
          <Link to="/gestion-investissement">Gestion Investissement</Link>
          <Link to="/gestion-fonctionnel">Gestion Fonctionnel</Link>
          <Link to="/gestion-projects">Gestion Projects</Link>
        </header>
        <Switch>
          <Route path="/gestion-projects">
            <GestionProjects />
          </Route>
          {/* Define other routes here */  /*}*/
/*        </Switch>
      </div>
    </Router>
  );
}

export default App;
*/
// App.js
/*
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';
import Login from './pages/auth/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Directions from './pages/dashboard/directions';
import DirectionsLayout from './components/component.directions.layout';
import AdminLayout from './components/admin/component.admin.layout';
import ProjectList from './components/admin/gestionProject/component.projects.list';
import ProjectNew from './components/admin/gestionProject/component.projects.new';
import ProjectEdit from './components/admin/gestionProject/component.projects.edit';
import GestionInvestissement from './components/admin/gestionInvestissement/component.gestioninvestissements'
import GestionInvestissementSiege from './components/admin/gestionInvestissement/Siege/component.gestioninvestissement.siege'
import SiegeNew from './components/admin/gestionInvestissement/Siege/component.gestioninvestissement.siege.new';
import SiegeEdit from './components/admin/gestionInvestissement/Siege/component.gestioninvestissement.siege.edit';

import GestionInvestissementReseau from './components/admin/gestionInvestissement/component.gestioninvestissement.reseau'
import CasaSudAdmin from './components/admin/gestionInvestissement/CasaSud/component.gestioninvestissement.reseau.casasud'
import CasaSudNew from './components/admin/gestionInvestissement/CasaSud/component.gestioninvestissement.reseau.casasud.new'
import CasaSudEdit from './components/admin/gestionInvestissement/CasaSud/component.gestioninvestissement.reseau.casasud.edit';
import CasaNordAdmin from './components/admin/gestionInvestissement/CasaNord/component.gestioninvestissement.reseau.casanord'
import CasaNordNew from './components/admin/gestionInvestissement/CasaNord/component.gestioninvestissement.reseau.casanord.new'
import CasaNordEdit from './components/admin/gestionInvestissement/CasaNord/component.gestioninvestissement.reseau.casanord.edit';
import DoukkalaAbdaAdmin from './components/admin/gestionInvestissement/DoukkalaAbda/component.gestioninvestissement.reseau.doukkalaabda'
import DoukkalaAbdaNew from './components/admin/gestionInvestissement/DoukkalaAbda/component.gestioninvestissement.reseau.doukkalaabda.new'
import DoukkalaAbdaEdit from './components/admin/gestionInvestissement/DoukkalaAbda/component.gestioninvestissement.reseau.doukkalaabda.edit';
import FesMeknesAdmin from './components/admin/gestionInvestissement/FesMeknes/component.gestioninvestissement.reseau.fesmeknes'
import FesMeknesNew from './components/admin/gestionInvestissement/FesMeknes/component.gestioninvestissement.reseau.fesmeknes.new'
import FesMeknesEdit from './components/admin/gestionInvestissement/FesMeknes/component.gestioninvestissement.reseau.fesmeknes.edit';
import HaouzAdmin from './components/admin/gestionInvestissement/Haouz/component.gestioninvestissement.reseau.haouz'
import HaouzNew from './components/admin/gestionInvestissement/Haouz/component.gestioninvestissement.reseau.haouz.new'
import HaouzEdit from './components/admin/gestionInvestissement/Haouz/component.gestioninvestissement.reseau.haouz.edit';
import NordAdmin from './components/admin/gestionInvestissement/Nord/component.gestioninvestissement.reseau.nord'
import NordNew from './components/admin/gestionInvestissement/Nord/component.gestioninvestissement.reseau.nord.new'
import NordEdit from './components/admin/gestionInvestissement/Nord/component.gestioninvestissement.reseau.nord.edit';
import OrientalAdmin from './components/admin/gestionInvestissement/Oriental/component.gestioninvestissement.reseau.oriental'
import OrientalNew from './components/admin/gestionInvestissement/Oriental/component.gestioninvestissement.reseau.oriental.new'
import OrientalEdit from './components/admin/gestionInvestissement/Oriental/component.gestioninvestissement.reseau.oriental.edit';
import RabatTemaraAdmin from './components/admin/gestionInvestissement/RabatTemara/component.gestioninvestissement.reseau.rabattemara'
import RabatTemaraNew from './components/admin/gestionInvestissement/RabatTemara/component.gestioninvestissement.reseau.rabattemara.new'
import RabatTemaraEdit from './components/admin/gestionInvestissement/RabatTemara/component.gestioninvestissement.reseau.rabattemara.edit';
import SaleGharbAdmin from './components/admin/gestionInvestissement/SaleGharb/component.gestioninvestissement.reseau.salegharb'
import SaleGharbNew from './components/admin/gestionInvestissement/SaleGharb/component.gestioninvestissement.reseau.salegharb.new'
import SaleGharbEdit from './components/admin/gestionInvestissement/SaleGharb/component.gestioninvestissement.reseau.salegharb.edit';
import SudAdmin from './components/admin/gestionInvestissement/Sud/component.gestioninvestissement.reseau.sud'
import SudNew from './components/admin/gestionInvestissement/Sud/component.gestioninvestissement.reseau.sud.new'
import SudEdit from './components/admin/gestionInvestissement/Sud/component.gestioninvestissement.reseau.sud.edit';
import TadlaOuardighaAdmin from './components/admin/gestionInvestissement/TadlaOuardigha/component.gestioninvestissement.reseau.tadlaouardigha'
import TadlaOuardighaNew from './components/admin/gestionInvestissement/TadlaOuardigha/component.gestioninvestissement.reseau.tadlaouardigha.new'
import TadlaOuardighaEdit from './components/admin/gestionInvestissement/TadlaOuardigha/component.gestioninvestissement.reseau.tadlaouardigha.edit';


import BudgetfonctionnelList from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnel'
import BudgetfonctionnelNew from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.new';
import BudgetfonctionnelEdit from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.edit';
import BudgetfonctionnelDetail from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.detail';
import ContractprestationNew from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestations'
import ContractprestationEdit from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestations.edit';
import ContractprestationDetail from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestations.detail';
import ContractprestationFactureNew from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestationsFacture.new';
import ContractprestationFactureDetail from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestationsFacture.detail';
import ContractprestationFactureEdit from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestationsFacture.edit';

import ProjectDetail from './components/admin/gestionProject/component.projects.detail'
import FactureNew from './components/admin/gestionProject/component.projects.factures'
import FactureEdit from './components/admin/gestionProject/component.projects.factures.edit'
import FactureDetail from './components/admin/gestionProject/component.projects.factures.detail'

//import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
//import Dashboard from './pages/dashboard/dashboard';
import Header from './pages/header/header'

import CasaSudDir from './components/UsersDirections/CasaSud/component.casasud.list';
import CasaSudEditDir from './components/UsersDirections/CasaSud/component.casasud.edit';
import CasaNordDir from './components/UsersDirections/CasaNord/component.casanord.list';
import CasaNordEditDir from './components/UsersDirections/CasaNord/component.casanord.edit';
import DoukkalaAbdaDir from './components/UsersDirections/DoukkalaAbda/component.doukkalaabda.list';
import DoukkalaAbdaEditDir from './components/UsersDirections/DoukkalaAbda/component.doukkalaabda.edit';
import FesMeknesDir from './components/UsersDirections/FesMeknes/component.fesmeknes.list';
import FesMeknesEditDir from './components/UsersDirections/FesMeknes/component.fesmeknes.edit';
import HaouzDir from './components/UsersDirections/Haouz/component.haouz.list';
import HaouzEditDir from './components/UsersDirections/Haouz/component.haouz.edit';
import NordDir from './components/UsersDirections/Nord/component.nord.list';
import NordEditDir from './components/UsersDirections/Nord/component.nord.edit';
import OrientalDir from './components/UsersDirections/Oriental/component.oriental.list';
import OrientalEditDir from './components/UsersDirections/Oriental/component.oriental.edit';
import RabatTemaraDir from './components/UsersDirections/RabatTemara/component.rabattemara.list';
import RabatTemaraEditDir from './components/UsersDirections/RabatTemara/component.rabattemara.edit';
import SaleGharbDir from './components/UsersDirections/SaleGharb/component.salegharb.list';
import SaleGharbEditDir from './components/UsersDirections/SaleGharb/component.salegharb.edit';
import SudDir from './components/UsersDirections/Sud/component.sud.list';
import SudEditDir from './components/UsersDirections/Sud/component.sud.edit';
import TadlaOuardighaDir from './components/UsersDirections/TadlaOuardigha/component.tadlaouardigha.list';
import TadlaOuardighaEditDir from './components/UsersDirections/TadlaOuardigha/component.tadlaouardigha.edit';

import Consolide from './components/admin/gestionInvestissement/component.consolide'
import ConsolideReseau from './components/admin/gestionInvestissement/component.consolide.reseau'
import ConsolideSiege from './components/admin/gestionInvestissement/component.consolide.siege'
import ConsolideEdit from './components/admin/gestionInvestissement/component.reseau.consolide.edit'
import SiegeConsolideEdit from './components/admin/gestionInvestissement/component.siege.consolide.edit.js'


//import { AuthProvider } from './context/AuthProvider.js';
//import ProtectedRoute from './components/ProtectedRoute';
//import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

//import useAuth from './services/useAuth'; // Custom hook to get auth status and role
//import DirectionsLayout from './components/component.directions.layout.js';
//import Directions from './pages/dashboard/directions.js';
import Profile from './pages/dashboard/Profile.js';
import DirectionProfile from './pages/dashboard/DirectionProfile.js'

import GestionProjectsDir from './components/UsersDirections/gestionProjects/component.directions.gestionprojects.js';
import ProjectsDetailDir from './components/UsersDirections/gestionProjects/component.directions.projectsdetail.js';
import GestionFonctionnementDir from './components/UsersDirections/gestionFonctionnement/component.directions.gestionfonctionnement.js';
import FonctionnementDetailDir from './components/UsersDirections/gestionFonctionnement/component.directions.fonctionnementdetail.js';
import FonctionnementContractPrestationDetailDir from './components/UsersDirections/gestionFonctionnement/component.directions.fonctionnementcontractprestationdetail.js';


const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ user ? ( user.role === 'admin' ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/login" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={user && user.role === 'admin' ? <Dashboard /> : <Navigate to="/login" />} />
        <Route
          path="/directions/*"
          element={
            user &&
            (user.role === 'casasud' ||
              user.role === 'casanord' ||
              user.role === 'doukkalaabda' ||
              user.role === 'fesmeknes' ||
              user.role === 'haouz' ||
              user.role === 'nord' ||
              user.role === 'sud' ||
              user.role === 'rabattemara' ||
              user.role === 'salegharb' ||
              user.role === 'tadlaouardigha') ? (
              <Directions />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Add other routes here *//*}
        <Route path="*" element={<DirectionsLayout role={user?.role} />} />
        
      </Routes>
    </div>
  );
};

export default App;*/



///hada te7t howa li 5dam
import './App.css';
import {Route,Routes,Navigate } from "react-router-dom";
import ProjectList from './components/admin/gestionProject/component.projects.list';
import ProjectNew from './components/admin/gestionProject/component.projects.new';
import ProjectEdit from './components/admin/gestionProject/component.projects.edit';
import GestionInvestissement from './components/admin/gestionInvestissement/component.gestioninvestissements'
import GestionInvestissementSiege from './components/admin/gestionInvestissement/Siege/component.gestioninvestissement.siege'
import SiegeNew from './components/admin/gestionInvestissement/Siege/component.gestioninvestissement.siege.new';
import SiegeEdit from './components/admin/gestionInvestissement/Siege/component.gestioninvestissement.siege.edit';

import GestionInvestissementReseau from './components/admin/gestionInvestissement/component.gestioninvestissement.reseau'
import CasaSudAdmin from './components/admin/gestionInvestissement/CasaSud/component.gestioninvestissement.reseau.casasud'
import CasaSudNew from './components/admin/gestionInvestissement/CasaSud/component.gestioninvestissement.reseau.casasud.new'
import CasaSudEdit from './components/admin/gestionInvestissement/CasaSud/component.gestioninvestissement.reseau.casasud.edit';
import CasaNordAdmin from './components/admin/gestionInvestissement/CasaNord/component.gestioninvestissement.reseau.casanord'
import CasaNordNew from './components/admin/gestionInvestissement/CasaNord/component.gestioninvestissement.reseau.casanord.new'
import CasaNordEdit from './components/admin/gestionInvestissement/CasaNord/component.gestioninvestissement.reseau.casanord.edit';
import DoukkalaAbdaAdmin from './components/admin/gestionInvestissement/DoukkalaAbda/component.gestioninvestissement.reseau.doukkalaabda'
import DoukkalaAbdaNew from './components/admin/gestionInvestissement/DoukkalaAbda/component.gestioninvestissement.reseau.doukkalaabda.new'
import DoukkalaAbdaEdit from './components/admin/gestionInvestissement/DoukkalaAbda/component.gestioninvestissement.reseau.doukkalaabda.edit';
import FesMeknesAdmin from './components/admin/gestionInvestissement/FesMeknes/component.gestioninvestissement.reseau.fesmeknes'
import FesMeknesNew from './components/admin/gestionInvestissement/FesMeknes/component.gestioninvestissement.reseau.fesmeknes.new'
import FesMeknesEdit from './components/admin/gestionInvestissement/FesMeknes/component.gestioninvestissement.reseau.fesmeknes.edit';
import HaouzAdmin from './components/admin/gestionInvestissement/Haouz/component.gestioninvestissement.reseau.haouz'
import HaouzNew from './components/admin/gestionInvestissement/Haouz/component.gestioninvestissement.reseau.haouz.new'
import HaouzEdit from './components/admin/gestionInvestissement/Haouz/component.gestioninvestissement.reseau.haouz.edit';
import NordAdmin from './components/admin/gestionInvestissement/Nord/component.gestioninvestissement.reseau.nord'
import NordNew from './components/admin/gestionInvestissement/Nord/component.gestioninvestissement.reseau.nord.new'
import NordEdit from './components/admin/gestionInvestissement/Nord/component.gestioninvestissement.reseau.nord.edit';
import OrientalAdmin from './components/admin/gestionInvestissement/Oriental/component.gestioninvestissement.reseau.oriental'
import OrientalNew from './components/admin/gestionInvestissement/Oriental/component.gestioninvestissement.reseau.oriental.new'
import OrientalEdit from './components/admin/gestionInvestissement/Oriental/component.gestioninvestissement.reseau.oriental.edit';
import RabatTemaraAdmin from './components/admin/gestionInvestissement/RabatTemara/component.gestioninvestissement.reseau.rabattemara'
import RabatTemaraNew from './components/admin/gestionInvestissement/RabatTemara/component.gestioninvestissement.reseau.rabattemara.new'
import RabatTemaraEdit from './components/admin/gestionInvestissement/RabatTemara/component.gestioninvestissement.reseau.rabattemara.edit';
import SaleGharbAdmin from './components/admin/gestionInvestissement/SaleGharb/component.gestioninvestissement.reseau.salegharb'
import SaleGharbNew from './components/admin/gestionInvestissement/SaleGharb/component.gestioninvestissement.reseau.salegharb.new'
import SaleGharbEdit from './components/admin/gestionInvestissement/SaleGharb/component.gestioninvestissement.reseau.salegharb.edit';
import SudAdmin from './components/admin/gestionInvestissement/Sud/component.gestioninvestissement.reseau.sud'
import SudNew from './components/admin/gestionInvestissement/Sud/component.gestioninvestissement.reseau.sud.new'
import SudEdit from './components/admin/gestionInvestissement/Sud/component.gestioninvestissement.reseau.sud.edit';
import TadlaOuardighaAdmin from './components/admin/gestionInvestissement/TadlaOuardigha/component.gestioninvestissement.reseau.tadlaouardigha'
import TadlaOuardighaNew from './components/admin/gestionInvestissement/TadlaOuardigha/component.gestioninvestissement.reseau.tadlaouardigha.new'
import TadlaOuardighaEdit from './components/admin/gestionInvestissement/TadlaOuardigha/component.gestioninvestissement.reseau.tadlaouardigha.edit';


import BudgetfonctionnelList from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnel'
import BudgetfonctionnelNew from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.new';
import BudgetfonctionnelEdit from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.edit';
import BudgetfonctionnelDetail from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.detail';
import ContractprestationNew from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestations'
import ContractprestationEdit from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestations.edit';
import ContractprestationDetail from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestations.detail';
import ContractprestationFactureNew from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestationsFacture.new';
import ContractprestationFactureDetail from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestationsFacture.detail';
import ContractprestationFactureEdit from './components/admin/gestionBudgetFonctionnel/component.budgetfonctionnels.contractprestationsFacture.edit';

import ProjectDetail from './components/admin/gestionProject/component.projects.detail'
import FactureNew from './components/admin/gestionProject/component.projects.factures'
import FactureEdit from './components/admin/gestionProject/component.projects.factures.edit'
import FactureDetail from './components/admin/gestionProject/component.projects.factures.detail'

import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import Dashboard from './pages/dashboard/dashboard';

import CasaSudDir from './components/UsersDirections/CasaSud/component.casasud.list';
import CasaSudEditDir from './components/UsersDirections/CasaSud/component.casasud.edit';
import CasaNordDir from './components/UsersDirections/CasaNord/component.casanord.list';
import CasaNordEditDir from './components/UsersDirections/CasaNord/component.casanord.edit';
import DoukkalaAbdaDir from './components/UsersDirections/DoukkalaAbda/component.doukkalaabda.list';
import DoukkalaAbdaEditDir from './components/UsersDirections/DoukkalaAbda/component.doukkalaabda.edit';
import FesMeknesDir from './components/UsersDirections/FesMeknes/component.fesmeknes.list';
import FesMeknesEditDir from './components/UsersDirections/FesMeknes/component.fesmeknes.edit';
import HaouzDir from './components/UsersDirections/Haouz/component.haouz.list';
import HaouzEditDir from './components/UsersDirections/Haouz/component.haouz.edit';
import NordDir from './components/UsersDirections/Nord/component.nord.list';
import NordEditDir from './components/UsersDirections/Nord/component.nord.edit';
import OrientalDir from './components/UsersDirections/Oriental/component.oriental.list';
import OrientalEditDir from './components/UsersDirections/Oriental/component.oriental.edit';
import RabatTemaraDir from './components/UsersDirections/RabatTemara/component.rabattemara.list';
import RabatTemaraEditDir from './components/UsersDirections/RabatTemara/component.rabattemara.edit';
import SaleGharbDir from './components/UsersDirections/SaleGharb/component.salegharb.list';
import SaleGharbEditDir from './components/UsersDirections/SaleGharb/component.salegharb.edit';
import SudDir from './components/UsersDirections/Sud/component.sud.list';
import SudEditDir from './components/UsersDirections/Sud/component.sud.edit';
import TadlaOuardighaDir from './components/UsersDirections/TadlaOuardigha/component.tadlaouardigha.list';
import TadlaOuardighaEditDir from './components/UsersDirections/TadlaOuardigha/component.tadlaouardigha.edit';

import Consolide from './components/admin/gestionInvestissement/component.consolide'
import ConsolideReseau from './components/admin/gestionInvestissement/component.consolide.reseau'
import ConsolideSiege from './components/admin/gestionInvestissement/component.consolide.siege'
import ConsolideEdit from './components/admin/gestionInvestissement/component.reseau.consolide.edit'
import SiegeConsolideEdit from './components/admin/gestionInvestissement/component.siege.consolide.edit.js'


import {useAuth} from './services/useAuth'; // Custom hook to get auth status and role
import Directions from './pages/dashboard/directions.js';
import Profile from './pages/dashboard/Profile.js';
import DirectionProfile from './pages/dashboard/DirectionProfile.js'

import GestionProjectsDir from './components/UsersDirections/gestionProjects/component.directions.gestionprojects.js';
import ProjectsDetailDir from './components/UsersDirections/gestionProjects/component.directions.projectsdetail.js';
import GestionFonctionnementDir from './components/UsersDirections/gestionFonctionnement/component.directions.gestionfonctionnement.js';
import FonctionnementDetailDir from './components/UsersDirections/gestionFonctionnement/component.directions.fonctionnementdetail.js';
import FonctionnementContractPrestationDetailDir from './components/UsersDirections/gestionFonctionnement/component.directions.fonctionnementcontractprestationdetail.js';
import React, { useEffect, useState } from 'react';

import EstimationList from './pages/EstimationsList.js';
import EstimationEdit from './pages/EstimationsEdit.js';
import ErrorPage from './pages/ErrorPage.js';
function App() {
  
  const { user } = useAuth();
  console.log({user});
  return (
        <>
          <Routes>

          <Route element={user && user.role ==='casasud'? <CasaSudDir/> :<Login/>} path={'/casasud'}></Route>
          <Route element={user && user.role ==='casasud'? <CasaSudEditDir/> :<Login/>} path={"casasud/edit/:id"}></Route>
        
          <Route element={user && user.role ==='casanord'? <CasaNordDir/> :<Login/>} path={'/casanord'}></Route>
          <Route element={user && user.role ==='casanord'? <CasaNordEditDir/> :<Login/>} path={"casanord/edit/:id"}></Route>
        
          <Route element={user && user.role ==='doukkalaabda'? <DoukkalaAbdaDir/> :<Login/>} path={'/doukkalaabda'}></Route>
          <Route element={user && user.role ==='doukkalaabda'? <DoukkalaAbdaEditDir/> :<Login/>} path={"doukkalaabda/edit/:id"}></Route>
        
          <Route element={user && user.role ==='fesmeknes'? <FesMeknesDir/> :<Login/>} path={'/fesmeknes'}></Route>
          <Route element={user && user.role ==='fesmeknes'? <FesMeknesEditDir/> :<Login/>} path={"fesmeknes/edit/:id"}></Route>
      
          <Route element={user && user.role ==='haouz'? <HaouzDir/> :<Login/>} path={'/haouz'}></Route>
          <Route element={user && user.role ==='haouz'? <HaouzEditDir/> :<Login/>} path={"haouz/edit/:id"}></Route>
        
          <Route element={user && user.role ==='nord'? <NordDir/> :<Login/>} path={'/nord'}></Route>
          <Route element={user && user.role ==='nord'? <NordEditDir/> :<Login/>} path={"nord/edit/:id"}></Route>
        
          <Route element={user && user.role ==='oriental'? <OrientalDir/> :<Login/>} path={'/oriental'}></Route>
          <Route element={user && user.role ==='oriental'? <OrientalEditDir/> :<Login/>} path={"oriental/edit/:id"}></Route>
        
          <Route element={user && user.role ==='rabattemara'? <RabatTemaraDir/> :<Login/>} path={'/rabattemara'}></Route>
          <Route element={user && user.role ==='rabattemara'? <RabatTemaraEditDir/> :<Login/>} path={"rabattemara/edit/:id"}></Route>
      
          <Route element={user && user.role ==='salegharb'? <SaleGharbDir/> :<Login/>} path={'/salegharb'}></Route>
          <Route element={user && user.role ==='salegharb'? <SaleGharbEditDir/> :<Login/>} path={"salegharb/edit/:id"}></Route>
      
          <Route element={user && user.role ==='sud'? <SudDir/> :<Login/>} path={'/sud'}></Route>
          <Route element={user && user.role ==='sud'? <SudEditDir/> :<Login/>} path={"sud/edit/:id"}></Route>
      
          <Route element={user && user.role ==='tadlaouardigha'? <TadlaOuardighaDir/> :<Login/>} path={'/tadlaouardigha'}></Route>
          <Route element={user && user.role ==='tadlaouardigha'? <TadlaOuardighaEditDir/> :<Login/>} path={"tadlaouardigha/edit/:id"}></Route>
        
          <Route element={user && user.role ==='admin'? <GestionInvestissement/> :<Login/>} path={'/admin/gestioninvestissements'}></Route>
          <Route element={user && user.role ==='admin'? <GestionInvestissementSiege/> :<Login/>} path={"/admin/gestioninvestissements/Siege"}></Route>
          <Route element={user && user.role ==='admin'? <SiegeNew/> :<Login/>} path={"/admin/gestioninvestissements/Siege/new"}></Route>
          <Route element={user && user.role ==='admin'? <SiegeEdit/> :<Login/>} path={"/admin/gestioninvestissements/Siege/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <Consolide/> :<Login/>} path={"/admin/gestioninvestissements/Consolide"}></Route>
          <Route element={user && user.role ==='admin'? <ConsolideReseau/> :<Login/>} path={"/admin/gestioninvestissements/Consolide/reseau"}></Route>
          <Route element={user && user.role ==='admin'? <ConsolideSiege/> :<Login/>} path={"/admin/gestioninvestissements/Consolide/siege"}></Route>
          <Route element={user && user.role ==='admin'? <ConsolideEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/Consolide/:id"}></Route>
          <Route element={user && user.role ==='admin'? <SiegeConsolideEdit/> :<Login/>} path={"/admin/gestioninvestissements/siege/Consolide/:id"}></Route>
          <Route element={user && user.role ==='admin'? <GestionInvestissementReseau/> :<Login/>} path={"/admin/gestioninvestissements/reseau"}></Route>
          <Route element={user && user.role ==='admin'? <CasaSudAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/casasud"}></Route>
          <Route element={user && user.role ==='admin'? <CasaSudNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/casasud/new"}></Route>
          <Route element={user && user.role ==='admin'? <CasaSudEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/casasud/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <CasaNordAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/casanord"}></Route>
          <Route element={user && user.role ==='admin'? <CasaNordNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/casanord/new"}></Route>
          <Route element={user && user.role ==='admin'? <CasaNordEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/casanord/edit/:id"}></Route>
        
          <Route element={user && user.role ==='admin'? <DoukkalaAbdaAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/doukkalaabda"}></Route>
          <Route element={user && user.role ==='admin'? <DoukkalaAbdaNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/doukkalaabda/new"}></Route>
          <Route element={user && user.role ==='admin'? <DoukkalaAbdaEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/doukkalaabda/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <FesMeknesAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/fesmeknes"}></Route>
          <Route element={user && user.role ==='admin'? <FesMeknesNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/fesmeknes/new"}></Route>
          <Route element={user && user.role ==='admin'? <FesMeknesEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/fesmeknes/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <HaouzAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/haouz"}></Route>
          <Route element={user && user.role ==='admin'? <HaouzNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/haouz/new"}></Route>
          <Route element={user && user.role ==='admin'? <HaouzEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/haouz/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <NordAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/nord"}></Route>
          <Route element={user && user.role ==='admin'? <NordNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/nord/new"}></Route>
          <Route element={user && user.role ==='admin'? <NordEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/nord/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <OrientalAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/oriental"}></Route>
          <Route element={user && user.role ==='admin'? <OrientalNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/oriental/new"}></Route>
          <Route element={user && user.role ==='admin'? <OrientalEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/oriental/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <RabatTemaraAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/rabattemara"}></Route>
          <Route element={user && user.role ==='admin'? <RabatTemaraNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/rabattemara/new"}></Route>
          <Route element={user && user.role ==='admin'? <RabatTemaraEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/rabattemara/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <SaleGharbAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/salegharb"}></Route>
          <Route element={user && user.role ==='admin'? <SaleGharbNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/salegharb/new"}></Route>
          <Route element={user && user.role ==='admin'? <SaleGharbEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/salegharb/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <SudAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/sud"}></Route>
          <Route element={user && user.role ==='admin'? <SudNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/sud/new"}></Route>
          <Route element={user && user.role ==='admin'? <SudEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/sud/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <TadlaOuardighaAdmin/> :<Login/>} path={"/admin/gestioninvestissements/reseau/tadlaouardigha"}></Route>
          <Route element={user && user.role ==='admin'? <TadlaOuardighaNew/> :<Login/>} path={"/admin/gestioninvestissements/reseau/tadlaouardigha/new"}></Route>
          <Route element={user && user.role ==='admin'? <TadlaOuardighaEdit/> :<Login/>} path={"/admin/gestioninvestissements/reseau/tadlaouardigha/edit/:id"}></Route>
            
          <Route element={user && user.role ==='admin'? <BudgetfonctionnelList/> :<Login/>} path={"/admin/budgetfonctionnels"}></Route>
          <Route element={user && user.role ==='admin'? <BudgetfonctionnelNew/> :<Login/>} path={"/admin/budgetfonctionnels/new"}></Route>
          <Route element={user && user.role ==='admin'? <BudgetfonctionnelEdit/> :<Login/>} path={"/admin/budgetfonctionnels/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <BudgetfonctionnelDetail/> :<Login/>} path={"/admin/budgetfonctionnels/:id/contractprestations"}></Route>

          <Route element ={user && user.role ==='admin'? <ContractprestationNew/> :<Login/>} path={"/admin/budgetfonctionnels/:id/"}></Route> 
          <Route element ={user && user.role ==='admin'? <ContractprestationEdit/> :<Login/>} path={"/admin/budgetfonctionnels/:id/edit/:contractprestationId"}></Route>
          <Route element={user && user.role ==='admin'? <ContractprestationFactureNew/> :<Login/>} path={"/admin/budgetfonctionnels/:id/contractprestations/:contractprestationId"}></Route>
          <Route element={user && user.role ==='admin'? <ContractprestationDetail/> :<Login/>} path={"/admin/budgetfonctionnels/:id/contractprestations/:contractprestationId/factures"}></Route>
          <Route element={user && user.role ==='admin'? <ContractprestationFactureDetail/> :<Login/>} path={"/admin/budgetfonctionnels/:id/contractprestations/:contractprestationId/factures/:factureId"}></Route>
          <Route element={user && user.role ==='admin'? <ContractprestationFactureEdit/> :<Login/>} path={"/admin/budgetfonctionnels/:id/contractprestations/:contractprestationId/edit/:factureId"}></Route>

          <Route element={user && user.role ==='admin'? <ProjectList/> :<Login/>} path={"/admin/projects"}></Route>
          <Route element={user && user.role ==='admin'? <ProjectNew/> :<Login/>} path={"/admin/projects/new"}></Route>
          <Route element={user && user.role ==='admin'? <ProjectEdit/> :<Login/>} path={"/admin/projects/edit/:id"}></Route>
          <Route element={user && user.role ==='admin'? <ProjectDetail/> :<Login/>} path={"/admin/projects/:id/factures"}></Route>

          <Route element ={user && user.role ==='admin'? <FactureNew/> :<Login/>} path={"/admin/projects/:id/"}></Route> 
          <Route element ={user && user.role ==='admin'? <FactureEdit/> :<Login/>} path={"/admin/projects/:id/edit/:factureId"}></Route>
          <Route element={user && user.role ==='admin'? <FactureDetail/> :<Login/>} path={"/admin/projects/:id/factures/:factureId"}></Route>
          
          
           <Route element={user ?<GestionFonctionnementDir/> : <Login/>} path={"/directions/gestionFonctionnement"}></Route>
           <Route element={user ? <FonctionnementDetailDir/> : <Login/>} path={"/directions/budgetfonctionnels/:id/contractprestations"}></Route>
           <Route element={user ? <FonctionnementContractPrestationDetailDir/> : <Login/>} path={"directions/budgetfonctionnels/:id/contractprestations/:contractprestationId/factures"}></Route>
           <Route element={user ? <GestionProjectsDir/> : <Login/>} path={"/directions/gestionProjects"}></Route>
           <Route element={user ? <ProjectsDetailDir/> : <Login/>} path={"/directions/projects/:id/factures"}></Route>
       
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />

            <Route path="*" element={<ErrorPage />} />
            <Route element={user && user.role ==='admin'? <EstimationList/> : <Login/>} path={'/admin/estimations'} />
            <Route element ={user && user.role ==='admin'? <EstimationEdit/> : <Login/>} path={"/admin/estimations/:id/"}></Route> 

            <Route element={user && user.role ==='admin' ? <Dashboard /> : <Login/> }  path='/admin' />
           

            <Route element={user ? <Directions /> : <Login/> } path="/directions"/>
            <Route element={user && user.role ==='admin' ? <Profile/> : <Login/>} path="/admin/profile"  />
            <Route element={user ? <DirectionProfile /> : <Login/>} path="/direction/profile"/>
          </Routes>
        </>
  );
}

export default App;///

/*
import React from 'eact';
import { BrowserRouter as Router, Routes, Route } from 'eact-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/auth/login/login';
import Signup from './pages/auth/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import Header from './pages/header/header';
// Import other components and routes...

function App() {
  return (
    <>
      <Header />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <ProtectedRoute path="/dashboard" element={<Dashboard />} />

            {/* Add more protected routes here *//*}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;*/