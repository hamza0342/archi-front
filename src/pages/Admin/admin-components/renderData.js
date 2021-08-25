import React, {useState} from 'react';
import {isAuthenticated} from "../../../authentication/index";
import {Button, Card} from 'antd';
import {Redirect} from 'react-router-dom';
import swal from "sweetalert";

//This component contains display and delete functionalities of admin and general contributor
const RenderUser = ({props, deleteuser}) => {
    const deleteAccount = (clientId) => {
        const token = isAuthenticated().token;
        deleteuser(clientId, token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                swal("Deleted!", "Doctor is deleted!", "success").then( 
                    setTimeout(function() {
                    window.location.reload();
                }, 1500)   );
            }
        });
    };
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {props.map((user, i) => {
                return (
                    <Card
                        className="card-display"
                        key={i}
                    >
                        <p className="card-title">{user.name}</p>
                        <p className="card-text">Email: {user.email}.</p>
                        <p className="card-text">CNIC: {user.cnic}.</p>
                        <p className="card-text">
                            Age: {user.age} years.
                        </p>
                        <p className="card-text">Phone: {user.phone}.</p>
                        <p className="card-text">
                            Address: {user.address}.
                        </p>
                        <p className="card-text">
                            Gender: {user.gender}.
                        </p>
                            <Button
                                type="danger"
                                size="large"
                                style={{marginTop: 2}}
                                onClick={() => deleteAccount(user._id)
                                }
                            >
                                Delete
                            </Button>
                    </Card>
                );
            })}
        </div>
    );
};

export default RenderUser;