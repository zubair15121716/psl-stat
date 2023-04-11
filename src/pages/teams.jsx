import "../index.css";
import h1 from "./bg/1.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Pslchamp } from '../assets/data/pslchamp';

export const Teams = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        Pslchamp.getdata().then(data => setProducts(data));
    }, []);

    return(
        <div className="wrapper">
            <img src={h1} alt="" className="loginimg"/>
        <div className="homep">
            <div className="form2">
                <h1 className="head"><i>PSL Stats</i></h1>            
                    <Link to='/home' className='nav1'>
                        <a><h3>Home</h3></a>
                    </Link>
                    <Link to='/teams' className='nav1'>
                        <a><h3>Teams</h3></a>
                    </Link>
                    <a className="nav1"><h3>Players</h3></a>
                    <a className="nav1"><h3>About</h3></a>
            </div>
            <h1 id="heading1">Champions of PSL &#127881; </h1>
            <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="id" header=""></Column>
                    <Column field="year" header="YEAR"></Column>
                    <Column field="team" header="Champions"></Column>
                </DataTable>
        </div>
        </div>
    </div>
    );
}
