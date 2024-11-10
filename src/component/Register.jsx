import { useContext, useEffect, useState } from "react";
import { Link,useLocation, useNavigate  } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import 'aos/dist/aos.css'
import 'animate.css';
import { FaEye,FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

    const { createUser,updateUserProfile } =useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();
    const [passwordError, setPasswordError] = useState("");
    const [showP,setShowP]=useState(false);

    const handleRegister= e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('photo');
        const email=form.get('email');
        const password=form.get('password');

        console.log(name,photo,email,password);
      //   if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
      //     setPasswordError("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      //     toast.error('Password Error',passwordError);
      //     return;
      // }
      if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/)) {
        const errorMessage = "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.";
        setPasswordError(errorMessage);
        toast.error('Password Error', errorMessage); // Directly use the errorMessage variable
        return;
       }

        createUser(email,password,photo,name)
        .then(result=>{
            updateUserProfile(name,photo)
            console.log(result.user);
            toast.success('Registered successfully');
            navigate(location?.state? location.state : '/');
           
            e.target.reset();
        })
        .catch(error=>{
            console.error(error)
        })
   }

  //  const handletoast=()=>
  //  {
  //    toast('Registered successfully');
  //  }
  useEffect(()=>{
    Aos.init();
},[])

    return (
        <div>
          <Helmet><title>Register</title></Helmet>
           <div className="hero min-h-screen bg-base-200" data-aos ="fade-right">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-semibold animate__animated animate__bounce animate__"> Please Register with appropiate information,<span className="text-blue-500">Thanks!</span></h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name ="name" placeholder="name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input type="text" required name ="photo" placeholder="photo-url" className="input input-bordered"  />
        </div>        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" required name ="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
           
          </label>
          <div className="relative ">
          <input
          className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
           type={showP ? "text":"password"}
           required name ="password" 
           placeholder="password" 
           />
          <span className="absolute top-3 right-2" onClick={()=>setShowP(!showP)}>
            {
              showP ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
            }
          </span>
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  className="btn btn-primary bg-blue-500 font-semibold">Register</button>
        </div>
      </form>
      <p className="text-center mb-2">Already have an account then <Link to="/log"><span className="text-blue-700 font-bold">Log-In</span></Link></p>
    </div>
  </div>
</div>
<div className="mt-[20px]">
            <footer className="footer p-10 bg-black text-base-content">
  <nav>
    <h6 className="footer-title text-white">Services</h6> 
    <a className="link link-hover  text-white">Branding</a>
    <a className="link link-hover  text-white">Design</a>
    <a className="link link-hover  text-white">Marketing</a>
    <a className="link link-hover  text-white">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title  text-white">Company</h6> 
    <a className="link link-hover  text-white">About us</a>
    <a className="link link-hover  text-white">Contact</a>
    <a className="link link-hover  text-white">Jobs</a>
    <a className="link link-hover  text-white">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title  text-white">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
</div>
<ToastContainer />
        </div>
    );
};

export default Register;