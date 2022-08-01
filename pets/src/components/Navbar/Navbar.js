import PetLogo from '../../assets/images/275801831_504262154742148_4582866294198810923_n.jpg';
import { MdSearch } from 'react-icons/md'
import './Navbar.css';
function Navbar(props){
    return(
        
            <div className="container">
                <div className="logo">
                    <img src={PetLogo} alt=""/>
                </div>
                <div className="iconSearch">
                    <MdSearch />
                    <input type="text" placeholder="search..."/>
                </div>
                <div className="Login"></div>
            </div>

        
    )
}
export default Navbar;