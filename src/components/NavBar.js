import { Link } from "react-router-dom";
const navBar = () => {
  return (
    <div className="nav-bar">
      <h3>
        <Link to="/myhome">Main Page</Link>
      </h3>
      <h3>
        <Link to="/users">Client List</Link>
      </h3>
      <h4>
        <Link to="/client">Clear Page</Link>
      </h4>
    </div>
  );
};
export default navBar;