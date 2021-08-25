import React, {useState, useEffect} from 'react';
import {isAuthenticated} from "../../authentication/index";
import {getSCByClient, assignTeamMember} from "./clientapi";
import {Button, Card, Skeleton, BackTop, Empty} from 'antd';
import { useParams } from "react-router-dom";
import AddGC from './addGC';
import swal from 'sweetalert';

const GCDisplay= () => {
    const [gc, setGC]= useState([]);
    const [loading, setLoading] = useState(true);
    const {projectId} = useParams();

    useEffect(() => {
        const token = isAuthenticated().token;
        const clientId= isAuthenticated().client._id;
        console.log("Client ID", clientId);
        setLoading(true);
        getSCByClient(token, clientId).then((data) => {
            console.log("data")
            console.log(data)
            if (data.error) {
                console.log(data.error);
            } else {
                setGC(data)
                setLoading(false)
                console.log("test", data)
            }
        });
    },[]);

    const clickEvent = (subId) => {
        const token = isAuthenticated().token;
        const subContractor = subId;
        assignTeamMember(token, projectId, subContractor)
        .then((data) => {
        if(data.error) {
            console.log(data.error);
        } else {
            console.log("Assigned", data)
            //dispatch fresh list of team members
            swal("Assigned!", "Subcontractor is assigned to this project!", "success");
            setTimeout(()=> {
                window.location.reload();
            }, 3000)         
        }
        })

    }

    const updateGc = gc => {
        setGC(gc)
    }

    const renderAssigned = (gcs) => {
        return (
            <div>
                <div className="table-responsive">  
                <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th>Sr. No</th>   
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">CNIC</th>
                    <th scope="col">Age</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {gcs.length ? gcs.map((gc,i)=>{
                    if(gc.projects.includes(projectId))
                    return(
                        <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{gc.name}</td>
                        <td>{gc.email}</td>
                        <td>{gc.cnic}</td>
                        <td>{gc.age}</td>
                        <td>{gc.phone}</td>
                        <td>{gc.address}</td>
                        <td>{gc.gender}</td>
                        <td>Action</td>
                        </tr>
                    );
                }): <Empty />}
                </tbody>
                </table>
                </div>
            </div>
        );
    };


    const renderGC = (gcs) => {
        return (
            <div>
                {gcs.length ? gcs.map((gc,i)=>{
                     if(!gc.projects.includes(projectId))
                        return (    
                            <Card
                                className="card-display"
                                key={i}
                            >
                            <p className="card-title">{gc.name}</p>
                            <p className="card-text">Email: {gc.email}.</p>
                            <p className="card-text">CNIC: {gc.cnic}.</p>
                            <p className="card-text">
                                Age: {gc.age} years.
                            </p>
                            <p className="card-text">Phone: {gc.phone}.</p>
                            <p className="card-text">
                                Address: {gc.address}.
                            </p>
                            <p className="card-text">
                                Gender: {gc.gender}.
                            </p>
                            <Button
                                type="primary"
                                size="middle"
                                onClick= {() => clickEvent(gc._id)}
                            >
                                Assign to project
                            </Button>  
                            </Card>
                        );
                    })
            : <Empty />}
            </div>
        );
    };

    if(loading){
        return(
            <Skeleton active />
        )
    }
    return(
            <div>
                <div style={{
                    marginBottom: 10
                }}>
                <h5
                style={{
                    textAlign: 'center', 
                    backgroundColor: "#FEFFF2", 
                    fontFamily: 'Montserrat', 
                    textTransform: 'uppercase', 
                    fontWeight: 800}}
                >
                    Team members associated with this project
                </h5>
                {renderAssigned(gc)}
                </div>
                <h5
                style={{
                    textAlign: 'center', 
                    backgroundColor: "#FEFFF2", 
                    fontFamily: 'Montserrat', 
                    textTransform: 'uppercase', 
                    fontWeight: 800}}
                >
                    Sub-contractors created by {isAuthenticated().client.name}
                </h5>
                <div>
                <AddGC />
                {renderGC(gc)}
                </div>
                <BackTop />
            </div>
    );
}

export default GCDisplay;