import { NavLink } from 'react-router-dom';

function Root() {
  return (
    <>
      <p>Navigate to MyForm to experience router guard</p>
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
