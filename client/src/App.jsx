import { Link, Route, Routes, useParams } from "react-router";
import MistakeList from "./MistakeList";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Mistake1 from "./pages/Mistake1";
import Mistake2 from "./pages/Mistake2";
import Mistake3 from "./pages/Mistake3";
import Mistake4 from "./pages/Mistake4";
import Mistake5 from "./pages/Mistake5";

const App = () => {

  const DynamicMistake = () => {

    const {id} = useParams();

    if(id === "1")
      return <Mistake1/>

    if(id === "2")
      return <Mistake2/>
    
    if(id === "3")
      return <Mistake3/>

    if(id === "4")
      return <Mistake4/>

    if(id === "5")
      return <Mistake5/>

    return <Mistake/>

  };

  return(

    <div className="p-2">
    
      <nav>

        <ul className="font-bold text-lg">

          <li><Link to="/mistake"><h1>MISTAKES</h1></Link></li> 

        </ul>

      </nav>

      <Routes>

        <Route path = "/" element = {<Home/>} />
        <Route path = "/mistake" element = {<MistakeList/>}/> 
        <Route path = "/mistake/:id" element = {<DynamicMistake/>}/> 
        <Route path = "*" element = {<NotFound/>}/> 

      </Routes>

    </div>

  );
};

export default App;