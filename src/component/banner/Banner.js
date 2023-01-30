import React from 'react';
import heroImg from '../assets/Executive-Health-Check-Up-2.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='' src={heroImg} className="w-full rounded-lg" />
    <div>
      <h1 className="text-4xl font-bold">Protect Your Health <br/>And Take Care To Of Your Health</h1>
      <p className="py-6">I Provide All Health Care Solution</p>
      <button className="btn btn-success">Read more</button>
    </div>
  </div>
</div>
    );
};

export default Banner;