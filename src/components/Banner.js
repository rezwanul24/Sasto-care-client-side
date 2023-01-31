import React from 'react';
import banner from '../assets/Executive-Health-Check-Up-2.jpg';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen  bg-base-200">
                <div className=" grid grid-cols-12  w-10/12 mx-auto  ">

                <img src={banner} alt='' className=" w-11/12 mx-auto col-span-12 lg:col-span-6" />

                    <div className=' col-span-10 lg:col-span-6  my-auto'>
                        <p className="py-6 text-2xl">We provide Health Care Service</p>
                        <h3 className="text-3xl font-bold leading-[50px] ">Tack care your health for long time good health balance </h3>
                        <button className="btn btn-primary mt-10">Read more</button>
                    </div>


                    
                </div>
            </div>
        </div>
    );
};

export default Banner;