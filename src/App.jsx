//import logo from './logo.svg';
import './App.css';
import React from 'react'
import styles from './styles.tsx' 
//import HWCard1 from './components/HWCard1.tsx';
import ManageCard from './components/ManageCard.tsx';
//import Billing from './components/Billing'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Stats
        Business
        Billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>

    <div>
      <header className="App-header">
        <ManageCard title="Manage Healthcare Wokers" backgroundColor="" />
        <ManageCard title="Manage Medical Centers" backgroundColor="" />
      </header>
    </div>
  </div>
);


export default App;
