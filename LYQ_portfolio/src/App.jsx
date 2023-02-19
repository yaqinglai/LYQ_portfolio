import React from 'react';
import styles from './style';
import { Navbar, Hero, Dazz, Record, TeddysLane, Contact, Footer } from './components'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          < Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          < Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          < Projects /> 
          < Contact /> 
          < Footer />
        </div>
      </div>
    </div>
  )
}

export default App
