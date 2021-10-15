import React from 'react';
import { Switch} from 'react-router-dom';
import PublicRoute from '../PublicRoute/PublicRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
const Home = React.lazy(() => import('../../pages/Home'));
const Welcome =React.lazy(() => import('../../pages/Welcome'));
const NotMatch =React.lazy(()=>import('../../pages/404/NotMatch'));
const Doctor= React.lazy(()=>import('../../pages/doctors'));
const AppRouter=()=>{
return (
    
        <Switch>
          /* PUBLIC ROUTE   */
          <PublicRoute  restricted={true} component={Welcome} path="/" exact />
          <PublicRoute component={Doctor} path="/doctors" exact />

          /* PRIVATE ROUTE */
          <PrivateRoute component={Home} path="/home" exact />
          <PublicRoute component={NotMatch} path="*" />
        </Switch>
     
  );
}
export default AppRouter;