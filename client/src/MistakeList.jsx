import { Link } from "react-router";

const MistakeList = () => {

  return (
    <nav>

      <ul>

        <li><Link to = "/mistake/1">Mistake 1</Link></li>
        <li><Link to = "/mistake/2">Mistake 2</Link></li>
        <li><Link to = "/mistake/3">Mistake 3</Link></li>
        <li><Link to = "/mistake/4">Mistake 4</Link></li>
        <li><Link to = "/mistake/5">Mistake 5</Link></li>
        <li><Link to = "/mistake/6">Mistake 6</Link></li>
        <li><Link to = "/mistake/7">Mistake 7</Link></li>
        <li><Link to = "/mistake/8">Mistake 8</Link></li>

      </ul>
      
    </nav>
  );
};

export default MistakeList;