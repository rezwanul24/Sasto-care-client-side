import React from 'react';
import { Link } from 'react-router-dom';
import HeadTitle from '../HeadTitle';
import './Review.css';
const Review = () => {
    return (
        <div>
            <HeadTitle
                title='Reviews'
                
            />

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/doctor-giving-advice-to-patient-2527798-2117453.png" />
    <div>
      <h3 className="text-5xl font-bold">Rezwanul Haque</h3>
      <p className="py-6">He is careful and dedicated for his work. He is very good. You can helpful form here</p>
      <button className="btn btn-primary"><Link to="/services">Servecis</Link></button>
    </div>
  </div>
</div>

            

            
        </div>
    );
};

export default Review;