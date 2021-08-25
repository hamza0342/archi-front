import {Route, Switch} from 'react-router-dom';
import AdminRouter from "./authentication/AdminRouter";
import ClientRouter from "./authentication/ClientRouter";
import GCRouter from "./authentication/GcRouter";
import Home from './pages';
import SigninPage from './pages/Admin/signin';
import AdminDashboard from "./pages/Admin/admindashboard";
import ClientDashboard from "./pages/Client/clientdashboard";
import GCDashboard from "./pages/GC/gcdashbaord";
import ProjectDetails from './pages/Client/projectDetails';
import ClientSignin from "./pages/Client/clientSignin";
import Model_window from './pages/Client/New_windows/Model_window';
import SubContractorSignIn from "./pages/GC/gcSignin";
import ProfileScreen from "./pages/Client/ProfileScreen";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EditClient from "./pages/Client/EditClient"
import Files from './pages/Client/Files';
import Delete from './pages/Client/Delete';
import Files_360 from './pages/Client/Files_360';
import Mir_file from './pages/Client/Mir_file';
//import Forge from './pages/Client/Forge/Forge';


const MainRouter = () => {
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component = {SigninPage} />
            <Route path="/client/signin" component={ClientSignin} />
            <Route  path="/model" component={Model_window}/>
            <Route path="/back/:_id" component={ProjectDetails}> </Route>
            <Route path="/del/:_id" component={Delete}></Route>
            <Route path="/folder/:_id" component={Files}></Route>
            <Route path="/360files/:id" component={Files_360}></Route>
            <Route path="/mirfile/:id" component={Mir_file}></Route>
            <Route path="/gc/signin" component={ SubContractorSignIn } />
            <Route path="/client/dashboard/edit/:clientId" component={EditClient} />
            <ClientRouter path="/project/:projectId" component = {ProjectDetails} exact/>
            <AdminRouter path="/admin/dashboard" component={AdminDashboard} />
            <ClientRouter path="/client/dashboard" component={ClientDashboard} />
            <ClientRouter path="/client/profile" component={ProfileScreen} />
            <GCRouter path="/gc/dashboard" component={GCDashboard} />
            <Route><ErrorPage /></Route>
       </Switch>
    );
}

export default MainRouter;