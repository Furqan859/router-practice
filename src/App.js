import Navbar from './component/Navbar'
import { RoutesComp } from './RoutesCom';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
   <div>
   <BrowserRouter>
   
   <RoutesComp/>
   </BrowserRouter>
   </div>
  );
}

export default App;
