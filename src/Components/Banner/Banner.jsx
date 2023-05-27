import React from 'react';

import bannerBg from '../../assets/Banner/banner.png';
import vector from '../../assets/Banner/Vector.png';

const Banner = () => {
    return (
        <div className='max-w-full h-[800px] relative bg-[#07332F]'>
        <img className='absolute' src={vector} alt="" />
             <div className='container_width h-[800px] flex gap-5 justify-center items-center'>
                  <div className='text-white'>
                    <h2 className='text-6xl font-semibold'>Your Best Medical<br /> Help  Center</h2>
                    <p className='py-10'>Lorem Ipsum is simply dummy text they are printing typesetting <br /> has been the industry’s stardard.</p>
                    <button className="btn btn-secondary">All Service</button>

                  </div>
                  <div className=''>
                    <img src={bannerBg} alt="" />
                
                  </div>
             </div>
        </div>
    );
};

export default Banner;