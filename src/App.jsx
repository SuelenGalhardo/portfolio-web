//import { useState, } from 'react'
//import { useState, useRef, useState } from 'react'
import suelenLogo from './assets/logosuelen.png'

import '../src/styles/main.scss';


function App() {
  

  return (
<>
 <div className='header__container'>

        <header>
        <a href="https://github.com/SuelenGalhardo" target="_blank">
          <img src={suelenLogo} className="logo__suelen" alt="suelen logo" />
                  </a>
                  <div></div>
                  
     </header>


       
        <main>


        </main>
        <footer className='footer'>
          <small>
            <p className='footer__copy'>&copy; Suelen Galhardo</p>
          </small>
        </footer>
      </div>

        </>
    )
    }
export default App
