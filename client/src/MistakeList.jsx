import { Link } from "react-router";

const MistakeList = () => {
  return (
    <nav className="p-4">
      <ul className="space-y-4">
        <li>
          <Link
            to="/mistake/1"
            className= "darthList"
          >
            Mistake 1
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/2"
            className= "darthList"
          >
            Mistake 2
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/3"
            className= "darthList"
          >
            Mistake 3
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/4"
            className= "darthList"
          >
            Mistake 4
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/5"
            className= "darthList"
          >
            Mistake 5
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/6"
            className= "darthList"
          >
            Mistake 6
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/7"
            className= "darthList"
          >
            Mistake 7
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/8"
            className= "darthList"
          >
            Mistake 8
          </Link>
        </li>
        <li>
          <Link
            to="/mistake/9"
            className= "darthList"
          >
            Mistake 9
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MistakeList;