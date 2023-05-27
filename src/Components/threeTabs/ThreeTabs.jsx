import React from 'react';

import {FaStopwatch, FaWatchmanMonitoring} from "react-icons/fa";

const ThreeTabs = () => {
    return (
        <div className='container_width'>
            <div className='flex gap-10 mt-16'>
                <div>
                    <div className="card w-96 border bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Opening Hours</h2>
                            <p>Open 9.00 am to 5.00pm Everyday</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary"><FaStopwatch /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 border bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Our Locations</h2>
                            <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 border bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Contact Us</h2>
                            <p>+88 01750 00 00 00
                              <br /> +88 01750 00 00 00
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeTabs;