import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import leftAboutImg from '../../assets/About/About_Left_Nurse.png';
import tab1 from '../../assets/About/tab1.png';
import tab2 from '../../assets/About/tab2.png';

const AboutSection = () => {
    return (
        <div className='container_width py-16'>
            <div className='flex gap-5 '>
                <div className='w-1/2'>
                    <img src={leftAboutImg} alt="" />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-3xl font-bold'>Our Services</h2>
                    <p className='py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>


                    <div className='mt-10'>
                        <Tabs>
                            <TabList>
                                <Tab><button className="btn btn-outline btn-accent">Cavity Protection</button></Tab>
                                <Tab><button className="btn btn-outline btn-accent">Cosmetic Dentisty</button></Tab>
                                <Tab><button className="btn btn-outline btn-accent">Oral Surgery</button></Tab>
                            </TabList>

                            <TabPanel>
                                <div className='mt-10'>
                                    <img src={tab1} alt="" />
                                    <h2 className='text-2xl font-bold mb-5 mt-8'>Our Electro  Gastrology Therapy</h2>

                                    <p className='py-5'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                                    </p>
                                    <p>
                                    Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>

                                    <button className="btn btn-outline btn-accent mt-16">More Details</button>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='mt-10'>
                                    <img src={tab2} alt="" />
                                    <h2 className='text-2xl font-bold mb-5 mt-8'>Our Electro  Gastrology Therapy</h2>

                                    <p className='py-5'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                                    </p>
                                    <p>
                                    Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>

                                    <button className="btn btn-outline btn-accent mt-16">More Details</button>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='mt-10'>
                                    <img src={tab1} alt="" />
                                    <h2 className='text-2xl font-bold mb-5 mt-8'>Our Electro  Gastrology Therapy</h2>

                                    <p className='py-5'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error 
                                    </p>
                                    <p>
                                    Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>

                                    <button className="btn btn-outline btn-accent mt-16">More Details</button>

                                </div>
                            </TabPanel>
                             
                        </Tabs>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;