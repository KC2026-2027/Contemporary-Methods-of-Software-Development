import { Link } from 'react-router-dom';
 
/**
 * Main menu
 * 
 * This will be the main navigation component in 
 * the app, with links to all main pages
 * 
 * @author first last 
 */
function Menu() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/films">films</Link></li>
            <li><Link to="/actors">actors</Link></li>
        </ul>
    )
}
 
export default Menu;