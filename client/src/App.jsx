import { Link, Route, Routes, useParams } from "react-router";
import MistakeList from "./MistakeList";
import NotFound from "./pages/NotFound";
import Mistake1 from "./pages/Mistake1";
import Mistake2 from "./pages/Mistake2";

const App = () => {

  const DynamicMistake = () => {

    const {id} = useParams();

    if(id === "1")
      return <Mistake1/>

    if(id === "2")
      return <Mistake2/>

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

        <Route path = "/mistake" element = {<MistakeList/>}/> 
        <Route path = "/mistake/:id" element = {<DynamicMistake/>}/> 
        <Route path = "*" element = {<NotFound/>}/> 

      </Routes>

    </div>

  );
};

export default App;