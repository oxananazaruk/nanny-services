import { Link } from 'react-router-dom';

export const HomeComponent = () => {
  return (
    <div>
      <h1>Make Life Easier for the Family:</h1>
      <p>Find Babysitters Online for All Occasions</p>
      <Link to="/nannies">Get started</Link>
    </div>
  );
};
