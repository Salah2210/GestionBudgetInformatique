/*import React, { useState, useEffect } from 'react';
import './directions.css';

const Directions = () => {
  
  return (
    <div className="page-container">
      <header>
        <h1>Nous connaître</h1>
        <p>Partenaire bancaire de référence, le Groupe Banque Populaire dispose du plus vaste réseau d’agences au Maroc, pour répondre à tous les besoins de ses clients à travers une vaste gamme de solutions bancaires.</p>
      </header>
      <nav>
        <a href="#">Accueil</a> &gt; <a href="#">Filiales & Fondations</a> &gt; <a href="#">Fondations</a> &gt; Attawfiq Micro-Finance
      </nav>
      <main className="main-content">
        <h2>Attawfiq Micro-Finance</h2>
        <p>Nous utilisons des cookies pour notre site pour améliorer votre expérience de navigation et vous fournir des contenus et services adaptés à vos intérêts. En continuant à naviguer sur notre site, vous acceptez l’utilisation de ces cookies.</p>
        <p>Si vous souhaitez en savoir plus sur l'utilisation que nous faisons des cookies, vous pouvez consulter les mentions légales.</p>
        <section className="content-section">
          <h3>L’offre AMF se décline comme suit :</h3>
          <ul>
            <li>Micro-crédit professionnel AGR/ME(*) : Al Intilaka, Attakadoum, Al Moukabaka, Al Istikbal, Alfardi, Attaheih, Attahjiz.</li>
            <li>Micro-crédit à la TPE : Al Moukawil</li>
            <li>Micro-crédit rural : Al Karaoui, Al Karaoui Ikhlass</li>
            <li>Micro-crédit aux Coopératives : Attaouia</li>
            <li>Micro-crédit logement : Islah Assakane, Almilkia</li>
          </ul>
          <p>(*) AGR : Activité Génératrice de Revenu</p>
          <p>(*) ME : Micro-Entreprise</p>
          <h3>Maillage territorial :</h3>
          <p>500 points de vente repartis en 11 Directions Régionales.</p>
          <h3>Management :</h3>
          <p>Directeur Général : M. Hicham KHARROU</p>
          <h3>Coordonnées :</h3>
          <p>Siège social : 79, Avenue Hassan II, Casablanca</p>
          <p>Tél : 05 22 49 49 49/00</p>
          <p>Fax : 05 22 26 90 18</p>
          <p>Site Internet : <a href="https://www.fbp.mc.ma">https://www.fbp.mc.ma</a></p>
          <p>E-mail : <a href="mailto:communication@fbpmc.ma">communication@fbpmc.ma</a></p>
        </section>
      </main>
      <footer>
        <div className="footer-links">
          <div>
            <h4>Nous connaître</h4>
            <ul>
              <li><a href="#">Actualités</a></li>
              <li><a href="#">Le Groupe</a></li>
              <li><a href="#">Finance</a></li>
              <li><a href="#">Développement Durable</a></li>
              <li><a href="#">Filiales et fondations</a></li>
              <li><a href="#">Media center</a></li>
              <li><a href="#">Carrières</a></li>
            </ul>
          </div>
          <div>
            <h4>Particuliers</h4>
            <ul>
              <li><a href="#">Jeunes</a></li>
              <li><a href="#">Jeunes actifs</a></li>
              <li><a href="#">Fonctionnaires</a></li>
              <li><a href="#">Professions libérales</a></li>
              <li><a href="#">Banque privée</a></li>
            </ul>
          </div>
          <div>
            <h4>Entreprises</h4>
            <ul>
              <li><a href="#">Auto-entrepreneurs</a></li>
              <li><a href="#">TPE</a></li>
              <li><a href="#">PME</a></li>
              <li><a href="#">Grandes Entreprises</a></li>
            </ul>
          </div>
          <div>
            <h4>Marocains du monde</h4>
            <ul>
              <li><a href="#">Natifs</a></li>
              <li><a href="#">Nouveaux migrants</a></li>
              <li><a href="#">Migrants établis</a></li>
              <li><a href="#">Seniors</a></li>
            </ul>
          </div>
          <div>
            <h4>Aide & conseil</h4>
            <ul>
              <li><a href="#">Risques</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Bonnes pratiques</a></li>
              <li><a href="#">Centre de relation clientèle</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="#"><img src="facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="youtube.png" alt="YouTube" /></a>
          </div>
          <div className="footer-legal">
            <a href="#">Mentions légales</a> | 
            <a href="#">SOS urgence</a> | 
            <a href="#">Conditions générales d'utilisation</a> | 
            <a href="#">Confidentialité et sécurité</a> | 
            <a href="#">Politique de protection des données personnelles</a>
          </div>
        </div>
        <div className="footer-copyright">
          COPYRIGHT 2020 - GROUPE BANQUE POPULAIRE - TOUS DROITS RÉSERVÉS
        </div>
      </footer>
          </div>
    
    
  );
};

export default Directions;
*/import React from 'react';
import './directions.css';
import DirectionsLayout from '../../components/component.directions.layout';
import facebookicon from '../../components/images/facebook.png';
import twittericon from '../../components/images/twitter.png';
import linkedinicon from '../../components/images/linkedin.png';
import youtubeicon from '../../components/images/youtube.png';

const Directions = () => {
  return (
    <div>
      <DirectionsLayout />
    <div className="page-container">
      <header>
        <h1>Nous connaître</h1>
        <p>Partenaire bancaire de référence, le Groupe Banque Populaire dispose du plus vaste réseau d’agences au Maroc, pour répondre à tous les besoins de ses clients à travers une vaste gamme de solutions bancaires.</p>
      </header>
      <nav>
        <b>Vous êtes ici: </b><a href="https://www.groupebcp.com/fr">Accueil</a> &gt; Attawfiq Micro-Finance
      </nav>
      <main className="main-content">
        <h2>Attawfiq Micro-Finance</h2>
        <p>Nous utilisons des cookies pour notre site pour améliorer votre expérience de navigation et vous fournir des contenus et services adaptés à vos intérêts. En continuant à naviguer sur notre site, vous acceptez l’utilisation de ces cookies.</p>
        <p>Si vous souhaitez en savoir plus sur l'utilisation que nous faisons des cookies, vous pouvez consulter les mentions légales.</p>
        <section className="content-section">
          <h3>L’offre AMF se décline comme suit :</h3>
          <ul>
            <li>Micro-crédit professionnel AGR/ME(*) : Al Intilaka, Attakadoum, Al Moukabaka, Al Istikbal, Alfardi, Attaheih, Attahjiz.</li>
            <li>Micro-crédit à la TPE : Al Moukawil</li>
            <li>Micro-crédit rural : Al Karaoui, Al Karaoui Ikhlass</li>
            <li>Micro-crédit aux Coopératives : Attaouia</li>
            <li>Micro-crédit logement : Islah Assakane, Almilkia</li>
          </ul>
          <p>(*) AGR : Activité Génératrice de Revenu</p>
          <p>(*) ME : Micro-Entreprise</p>
          <h3>Maillage territorial :</h3>
          <p>500 points de vente repartis en 11 Directions Régionales.</p>
          <h3>Management :</h3>
          <p>Directeur Général : M. Hicham KHARROU</p>
          <h3>Coordonnées :</h3>
          <ul>
          <li>Siège social : 79, Avenue Hassan II, Casablanca</li>
          <li>Tél : 05 22 49 49 49/00</li>
          <li>Fax : 05 22 26 90 18</li>
          <li>Site Internet : <a href="https://www.fbpmc.ma">https://www.fbpmc.ma</a></li>
          <li>E-mail : <a href="mailto:communication@fbpmc.ma">communication@fbpmc.ma</a></li>
          </ul>
        </section>
      </main>
      <div className="after-main">
       <div className="bef">
        <div className="footer-links">
          <div>
            <h4>Nous connaître</h4>
            <ul>
              <li><a href="https://www.groupebcp.com/fr/espace-communication/actualit%C3%A9s">Actualités</a></li>
              <li><a href="https://www.groupebcp.com/FR/nous-conna%C3%AEtre/le-groupe/vision">Le Groupe</a></li>
              <li><a href="https://www.groupebcp.com/fr/Pages/Finance.aspx">Finance</a></li>
              <li><a href="https://www.groupebcp.com/fr/d%C3%A9veloppement-durable">Développement Durable</a></li>
              <li><a href="https://www.groupebcp.com/FR/filiales-fondations/fondations/fondation-banque-populaire">Filiales et fondations</a></li>
              <li><a href="https://www.groupebcp.com/fr/media-centre">Media center</a></li>
              <li><a href="https://www.groupebcp.com/fr/carri%C3%A8res">Carrières</a></li>
            </ul>
          </div>
          <div>
            <h4>Particuliers</h4>
            <ul>
              <li><a href="https://particulier.groupebcp.com/fr/Pages/jeune.aspx">Jeunes</a></li>
              <li><a href="https://particulier.groupebcp.com/fr/Pages/Jeunes-Actifs-Seg.aspx">Jeunes actifs</a></li>
              <li><a href="https://particulier.groupebcp.com/fr/Pages/Fonctionnaires.aspx">Fonctionnaires</a></li>
              <li><a href="https://particulier.groupebcp.com/fr/Pages/professions-liberales.aspx">Professions libérales</a></li>
              <li><a href="#">Banque privée</a></li>
            </ul>
          </div>
          <div>
            <h4>Entreprises</h4>
            <ul>
              <li><a href="https://entreprise.groupebcp.com/fr/Pages/Auto-Entrepreneur.aspx">Auto-entrepreneurs</a></li>
              <li><a href="https://entreprise.groupebcp.com/fr/Pages/Tres-petite-entreprise.aspx">TPE</a></li>
              <li><a href="https://entreprise.groupebcp.com/fr/Pages/petite-moyenne-entreprise.aspx">PME</a></li>
              <li><a href="https://entreprise.groupebcp.com/fr/Pages/grande-entreprise.aspx">Grandes Entreprises</a></li>
            </ul>
          </div>
          <div>
            <h4>Marocains du monde</h4>
            <ul>
              <li><a href="https://mdm.groupebcp.com/fr/Pages/Natifs.aspx">Natifs</a></li>
              <li><a href="https://mdm.groupebcp.com/fr/Pages/nouveaux-migrants.aspx">Nouveaux migrants</a></li>
              <li><a href="https://mdm.groupebcp.com/fr/Pages/migrants-etablis.aspx">Migrants établis</a></li>
              <li><a href="https://mdm.groupebcp.com/fr/Pages/Seniors.aspx">Seniors</a></li>
            </ul>
          </div>
          <div>
            <h4>Aide & conseil</h4>
            <ul>
              <li><a href="https://particulier.groupebcp.com/fr/aide-et-conseils/risques">Risques</a></li>
              <li><a href="https://particulier.groupebcp.com/fr/aide-et-conseils/solutions">Solutions</a></li>
              <li><a href="https://particulier.groupebcp.com/fr/aide-et-conseils/bonnes-pratiques">Bonnes pratiques</a></li>
              <li><a href="https://particulier.groupebcp.com/fr/aide-et-conseils/centre-de-relation-client%C3%A8le">Centre de relation clientèle</a></li>
            </ul>
          </div>
          <div>  
            <h4>Trouver une Agence</h4>
            <ul>
              <li><a href="https://www.groupebcp.com//fr/map?tags=Agence,Banque%20Populaire%20R%C3%A9gionale,Succursale">Trouver une agence au Maroc</a></li>
              <li><a href="https://www.groupebcp.com//fr/map?tags=France,Belgique,Espagne,Allemagne,Grande%20Bretagne,Pays%20Bas,Italie,Bureau%20de%20repr%C3%A9sentation,Filiale%20en%20Afrique">Trouver une agence à l'étranger</a></li>
              <li><a href="https://www.groupebcp.com//fr/map?tags=Centre%20d%27Affaires">Trouver un centre d'affaires</a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className='btm'>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.facebook.com/PopulaireEtDigitale">
            <img src={facebookicon} alt="Facebook Icon" style={{width: '50px', height: '44px', objectFit: 'cover', borderRadius: '50%' , marginRight: '8px'// Adjust margin as needed for spacing between icon and name
                                      }} className="Facebook-icon" /></a>            
            <a href="https://x.com/BP_Maroc">
            <img src={twittericon} alt="Twitter Icon" style={{width: '50px', height: '44px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' // Adjust margin as needed for spacing between icon and name
                                      }} className="Twitter-icon" /></a>
            <a href="https://www.linkedin.com/company/bcp-bank">
            <img src={linkedinicon} alt="LinkedIn Icon" style={{width: '50px', height: '44px', objectFit: 'cover', borderRadius: '90%', marginRight: '8px' // Adjust margin as needed for spacing between icon and name
                                      }} className="LinkedIn-icon" /></a>
            <a href="https://www.youtube.com/channel/UCOrSrjmPtk_z5ZByBSkubwA">
            <img src={youtubeicon} alt="YouTube Icon" style={{width: '50px', height: '44px', objectFit: 'cover', borderRadius: '50%', marginRight: '8px' // Adjust margin as needed for spacing between icon and name
                                      }} className="YouTube-icon" /></a>
        </div></div><br></br>
        
          <div className="footer-legal">
            <a href="https://www.groupebcp.com/fr/Pages/mentions-legales.aspx">Mentions légales</a> | 
            <a href="https://www.groupebcp.com/fr/Pages/sosurgence.aspx">SOS urgence</a> | 
            <a href="https://www.groupebcp.com/fr/Pages/conditions-generales-utilisation.aspx">Conditions générales d'utilisation</a> | 
            <a href="https://www.groupebcp.com/fr/Pages/confidentialite-et-securite.aspx">Confidentialité et sécurité</a> | 
            <a href="https://www.groupebcp.com/fr/Documents%20partages/Politique-de-protection-des-donnees-personnelles-du-Groupe-BCP.pdf">Politique de protection des données personnelles</a>
          </div>
        
        <div className="footer-copyright">
          COPYRIGHT 2024 - GROUPE BANQUE POPULAIRE - TOUS DROITS RÉSERVÉS
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Directions;
