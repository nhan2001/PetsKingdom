import './LoginUi.css';
import profile from "../../assets/images/275801831_504262154742148_4582866294198810923_n.jpg";
import email from "../../assets/images/email.jpg";
import pass from "../../assets/images/pass.png";
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
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user name" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>


         </div>
       </div>


     </div>
    </div>
  );
}

export default LoginUi;