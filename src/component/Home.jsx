import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import 'animate.css';


const Home = () => {
    const now =useLoaderData();
    console.log(now);
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="mt-10 h-[600px] " data-aos ="fade-up">
            <Helmet>
                <title>UrbanNest Home</title>
            </Helmet>
            <div className="carousel lg:w-[1300px] lg:h-[600px] lg:ml-14 rounded-xl relative overflow-hidden"  data-aos ="fade-right">
                <div id="slide1" className="carousel-item relative w-full"  >
                    <img src="https://i.ibb.co/N2JZD27/mathilde-ro-mzbx-YHf-TMWI-unsplash.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"  >
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 mx-auto" >
                        <p className="text-white lg:text-4xl mb-28 text-center font-bold animate__animated animate__bounce animate__ ">Discover the tranquility of this beautiful countryside retreat.</p>
                        <label className="input input-bordered flex items-center gap-2 lg:w-[400px] mx-auto">
                          <input type="text" className="grow" placeholder="Search" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       </label>
                    </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/pxTGj7v/vacation-luxury-resort-with-swimming-pool-hammock-umbrellas-ai-generative.jpg" className="w-full bg-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 mx-auto">
                        <p className="text-white text-4xl mb-28 text-center font-bold animate__animated animate__bounce animate__ ">Luxury beachfront villa with stunning ocean views.</p>
                        <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto">
                          <input type="text" className="grow" placeholder="Search" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       </label>
                    </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CnNQ1rS/scyscraper-city-evening-sunset-view-concept.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 mx-auto">
                        <p className="text-white text-4xl mb-28 text-center font-bold animate__animated animate__bounce animate__ ">Modern city apartment with panoramic skyline views.</p>
                        <label className="input input-bordered flex items-center gap-2 w-[400px] mx-auto">
                          <input type="text" className="grow" placeholder="Search" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                       </label>
                    </div>
                </div> 
            </div>
            <section className="mx-auto text-center mt-20"  data-aos ="fade-right">
                <h1 className="text-black text-3xl font-bold ">Overview of Esates</h1>
                <p className="text-lg font-semibold">Explore the Dream estate for you!!!</p>
             
            </section>
            <div className="grid lg:grid-cols-3 gap-6  lg:gap-6 mt-24 lg:ml-10 animate__animated animate__bounce animate__ " data-aos ="fade-right">
            {
                now.map(anow=><Card
                key={anow.id}
                now={anow}>
                </Card>)
            }
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

export default Home;
