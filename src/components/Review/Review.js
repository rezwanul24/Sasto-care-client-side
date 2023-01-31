import React from 'react';
import HeadTitle from '../HeadTitle';
import './Review.css';
const Review = () => {
    return (
        <div>
            <HeadTitle
                title='Reviews'
                comment='See What Are The Patients
            Saying About me'
            />

            <div className="flex">
                <div className="comments">
                    Rezwanul is a best doctor in my life ever. She is careful.
                </div>
                <div className="profile">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pinimg.com/originals/47/b1/47/47b147b6d88fea4bcd32344251784b24.jpghttps://srv.carbonads.net/ads/click/x/GTND42JUCWYIP23LCVSLYKQNCABIKK37CT7I6Z3JCYSIV2QYFTYDCK7KCABDE2JUFTAICK7JCYAI5KJUFTYDP53KC6SD52QJCEBDEK3EHJNCLSIZ?segment=placement:daisyuicom" alt='' />
                        </div>
                    </div>

                    
                    <a href="#"></a>
                    <span>Rezwanul Haque</span>
                </div>
            </div>

            
        </div>
    );
};

export default Review;