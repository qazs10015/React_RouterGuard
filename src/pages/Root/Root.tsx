import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';

function Root() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <NavLink to="/home">Home</NavLink>
      </div>
      <div>
        <NavLink to="/myForm">MyForm</NavLink>
      </div>
    </>
  );
}

export default Root;
