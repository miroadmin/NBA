import React, { useState} from 'react';
import './layout.css';
import Header from '../../components/Header/header.js'

function Layout (props) {
    const [state, showState] = useState(false);
    const zmena = () => {
     showState = () => {
         return true;
     }
    }

    return (
        <div>
            <Header />
            {props.children}

        </div>
    )

}

export default Layout;