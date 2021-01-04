import React from 'react'
import style from './css/Navbar.module.css'
import {AppBar,Toolbar} from '@material-ui/core'

function Navbar() {
    return (
      <div>
          <AppBar position="absolute" className={style.nav}>
            <Toolbar>
              <h2>
                <span className={style.logo}>Status</span>
                <b> Tracker</b>
              </h2>
            </Toolbar>
          </AppBar>
        <Toolbar />
      </div>
    );
}

export default Navbar
