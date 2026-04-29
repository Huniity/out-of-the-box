import { Link } from 'react-router-dom';


function Homepage() {
    return (
        <>
            <div>
            <h1>Welcome to the Homepage!</h1>
            <p>This is the homepage of our React application.</p>
            </div>
            <p>Go back <Link to="/">Home</Link></p>
        </>
    );
}

export default Homepage;