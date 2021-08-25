import React from 'react';
import { Tabs } from 'antd';
import GCDisplay from './gcdisplay';
import SingleProject from './singleProject';
import '../../scss/client.scss';
import MainLayout from './client-components/Layout';
import Comments from "./client-components/comments";
import { useParams } from 'react-router-dom';
import File from "./file"
import Document from './Document';
import Model from './Model';
import Assests from './Assests';
import Mir from './M_i_r'
const { TabPane } = Tabs;

const ProjectDetails = (props) => {
    const callback = (key) => {
        console.log(key);
    }
    const { projectId } = useParams();
    console.log("Props ==>", props) //remove it later
    console.log("Project_ID ==>", projectId)
    return (
        <MainLayout
            component={
                <div className="flex-container">
                    <Tabs defaultActiveKey="3" onChange={callback} className="flex-child">
                        <TabPane tab="Project Overview" key="2">
                            <SingleProject {...props} />
                        </TabPane>
                      
                        <TabPane tab="Models" key="3">
                            <div>
                                <Model />
                            </div>
                        </TabPane>
                        <TabPane tab="360 Tour" key="1">
                            <div>
                            <Assests {...props}/>
                            </div>
                        </TabPane>
                        <TabPane tab="Documents" key="4">
                            <div>
                                
                                <Document {...props}/>
                            </div>
                        </TabPane>
                        <TabPane tab="M.I.R" key="5">
                            <div>
                                <Mir {...props} />
                            </div>
                        </TabPane>
                        <TabPane tab="Vendors" key="6">
                            <div>
                                Vendors 
                            </div>
                        </TabPane>
                        <TabPane tab="Sub Contractors" key="7">
                            <GCDisplay />
                            
                        </TabPane>
                    </Tabs>
                    {/* <div className="flex-childs">
                       <  Comments project={projectId} />
                       </div> */}
                </div>
            }
           
        />
    )
}

export default ProjectDetails;