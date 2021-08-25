import React, {useState, useEffect} from 'react';
import {getclients,deleteclient} from "./adminapi";
import RenderClient from "./admin-components/renderData";

const ClientDisplay= () => {
    const [clients, setClients]= useState([]);
    useEffect(() => {
        getclients().then((data) => {
            console.log("data")
            console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                setClients(data.client)
            }
        });
    },[]);

    return(
        <div>
            <div>
                <p className="page-title">Clients</p>
                <RenderClient props={clients} deleteuser={deleteclient}  />
            </div>
            </div>
    );
}

export default ClientDisplay;