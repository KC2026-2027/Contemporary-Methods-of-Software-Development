import { Link } from "react-router-dom";

/**
 * Actors page 
 * 
 * This page will display information about actors
 * 
 * @author first last
 */
function Actors() {
    return (
        <>
            <h1>Actors</h1>
            <p>Welcome to the Actors page!</p>
            <p>See the <Link to="/films">Films</Link> page</p>
        </>
    )
}

export default Actors