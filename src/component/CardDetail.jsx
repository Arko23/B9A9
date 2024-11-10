import { useLoaderData, useParams } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { VscSymbolField } from "react-icons/vsc";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import 'animate.css';

const CardDetail = () => {
   const details = useLoaderData();
    const {id} = useParams();
    const detail = details.find(detail => detail.id === id);
    useEffect(()=>{
      Aos.init();
  },[])

    return (
        <div  data-aos ="fade-right">
          <Helmet>
            <title>Details
            </title>
          </Helmet>
            {detail ? (
                <div>
                  <section className="mt-20 ml-[100px] flex gap-10 h-[500px] w-[1200px] ">
            {/* <h2>Card Details Here : {bookId}</h2> */}
            <div className="h-[400px] w-[600px]">
                <img src={detail.image_url} className="ml-16 mt-16 h-[400px] w-[400px] rounded-xl" alt="" />
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-7 animate__animated animate__bounce animate__">{detail.estate_title}</h2>
                <p className="font-semibold text-lg mb-4"> {detail.description} </p>
                <div className="border-dotted border-b-2 border-gray-400 "></div>
                <div className="flex items-center gap-3">
                <p className="text-lg font-bold border border-solid border-green-500 w-[120px] text-center rounded-xl text-green-500 mt-5">{detail.segment_name}</p>
                <FcHome className="mt-4"></FcHome>
                </div>
                <div className="border-dotted border-b-2 border-gray-400 mt-4"></div>
                <div className="flex gap-64">
                <div className="flex mt-4 gap-3">
                < ImLocation></ImLocation>
                <p className="mb-4"> <span className="text-lg font-bold">{detail.location}</span></p>
                </div>
                <div className="flex mt-4 gap-3 items-center"> 
                    <VscSymbolField></VscSymbolField>
                <p className="mb-2"><span className="text-lg font-bold">{detail.area}</span> </p> </div>
                </div>
                <div className="flex gap-2 mb-3">
                <span className="text-lg font-bold"></span>
                <ul className="flex gap-16 text-blue-500 font-semibold">
                    <p className="text-black">Facilities : </p>
                        {detail.facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                 
                </div>
                <div className="border-dotted border-b-2 border-gray-400"></div>
                <p className="mb-2 border border-solid border-red-300 w-[70px] text-center rounded-xl mt-4 bg-red-500"><span className="text-lg font-bold text-white">{detail.status}</span> </p>
                <p className="mb-2">Price :  <span className="text-lg font-bold">{detail.price}</span></p>
                
               
                 <div className="flex gap-10 mt-4">


                 <button
           
            className="btn text-lg font-bold border border-solid border-black bg-blue-400 w-[100px]"
          >
            Pay
          </button>
         


                    


                 </div>
                 

            </div>
            
         
        </section>
                    
                </div>
            ) : (
                <p>No data found for ID: {id}</p>
            )}
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

export default CardDetail;
