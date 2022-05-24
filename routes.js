import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout/layout';


function RoutesMy () {
    return(
        <Layout>    {/* toto vola najprv header az potom home*/}
            <Routes>
                <Route path="/" exact element={<Home />}/>
            </Routes>
        </Layout>

    )

}
 export default RoutesMy;