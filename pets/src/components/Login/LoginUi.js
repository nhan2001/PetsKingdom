import './LoginUi.css';
import profile from "../../assets/images/275801831_504262154742148_4582866294198810923_n.jpg";
import { FaRegEnvelope } from 'react-icons/fa'
import { BsKey } from 'react-icons/bs'
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <div className="email"> <FaRegEnvelope size={25} /> </div> 
             <input type="text" placeholder="User name" className="name"/>
           </div>
           <div className="second-input">
             <div className="email"> <BsKey size={25} /> </div>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#"> Sign Up</a>
            </p>


         </div>
       </div>


     </div>
    </div>
  );
}

export default LoginUi;