import React, { useState } from "react";
import "../../scss/_360tour.scss";
import { Link } from "react-router-dom";
import Pop_up_newFolder from "./Pop_up/Pop_up_newFolder_Documents";
import DeleteIcon from "@material-ui/icons/Delete";
import { Login } from '@microsoft/mgt-react';

function Model() {
  const [getfolder, setfolder] = useState([]);

  const folder = (folder) => {
    setfolder(folder);
    console.log(getfolder);
  };

  const deleteFolder = (id) => {
    alert("are you really want to delete this folder");
    const updateFolder = getfolder.filter((ele, ID) => {
      return ID !== id;
    });

    setfolder(updateFolder);
  };

  /// Microsft login

  return (
    <>
      <div className="tour">
        <button style={{border:"none" , backgroundColor:"burlywood" , padding:10 , float:"right"}}>
      <a href="http://localhost:4000/" style={{color:"black"}}>Click To Open Forge Viewer</a>
      </button>
      
      </div>
      {/* <div className="folders">
        {getfolder.map((fold, id) => {
          return (
            <>
              <div className="btn">
                <div className="fold" key={id}>
                  <a href="http://localhost:5000/">
                    <div className="name">{fold}</div>
                  </a>
                  <a href="http://localhost:5000/">
                    <div className="upload_btn">
                      <div className="content"> Model View</div>
                    </div>{" "}
                  </a>
                  <div className="delete">
                    <DeleteIcon onClick={() => deleteFolder(id)} />
                  </div>
                </div>
                <div></div>
              </div>
            </>
          );
        })}
      </div> */}
    </>
  );
}

export default Model;
