import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import 'aos/dist/aos.css'
import { ImProfile } from "react-icons/im";
const Update = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");

    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    };

    const handlePhotoURLChange = (e) => {
        setPhotoURL(e.target.value);
    };

    const handleSubmit = () => {
        updateUserProfile(displayName, photoURL)
            .then(() => {
                console.log("Profile updated successfully");
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
            });
    };
    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <div>
            <Helmet><title>Update-Profile</title></Helmet>
        <div className="flex justify-center" data-aos ="fade-right">
            <div className="w-full max-w-md">
                <div className="border border-dotted border-blue-600 mt-9 rounded-xl bg-blue-100">
 
                <ImProfile className="mx-auto mt-8 w-[50px] h-[50px]"></ImProfile>
                <h1 className="text-center text-xl font-bold mt-10">Update Your Profile</h1>
                
                <div className="mt-4 mb-8 flex items-center justify-center">
                    <img src={user.photoURL} alt="Profile" className="w-20 h-20 rounded-full" />
                    <p className="ml-4 text-lg font-semibold">{user.displayName}</p>
                </div>
                </div>
                <form onSubmit={handleSubmit} className="mt-10">
                    <div className="mb-4">
                        <label htmlFor="displayName" className="block">Display Name:</label>
                        <input
                            type="text"
                            id="displayName"
                            value={displayName}
                            onChange={handleDisplayNameChange}
                            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block">Photo URL:</label>
                        <input
                            type="text"
                            id="photoURL"
                            value={photoURL}
                            onChange={handlePhotoURLChange}
                            className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                        />
                    </div>
                    <button type="submit" className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Profile</button>
                </form>
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
        </div>
    );
};

export default Update;
