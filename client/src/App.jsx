import { Route, Routes, useParams } from "react-router";
import NotFound from "./pages/NotFound";
import Mistake1 from "./pages/Mistake1";
import Mistake2 from "./pages/Mistake2";
import Mistake3 from "./pages/Mistake3";
import Mistake4 from "./pages/Mistake4";
import Mistake5 from "./pages/Mistake5";
import Mistake6 from "./pages/Mistake6";
import Mistake7 from "./pages/Mistake7";
import Mistake8 from "./pages/Mistake8";
import Mistake9 from "./pages/Mistake9";
import Navbar from "./pages/Navbar";

const App = () => {

  const DynamicMistake = () => {
    
    const { id } = useParams();

    if (id === "1") return <Mistake1 />;
    if (id === "2") return <Mistake2 />;
    if (id === "3") return <Mistake3 />;
    if (id === "4") return <Mistake4 />;
    if (id === "5") return <Mistake5 />;
    if (id === "6") return <Mistake6 />;
    if (id === "7") return <Mistake7 />;
    if (id === "8") return <Mistake8 />;
    if (id === "9") return <Mistake9 />;

    return <Mistake />;

  };

  return (
    <section>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Mistake1 />} />
        <Route path="/mistake/:id" element={<DynamicMistake />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </section>
  );
};

export default App;