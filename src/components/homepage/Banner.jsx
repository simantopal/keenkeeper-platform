import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 mt-20 mb-10 container mx-auto">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="mt-5">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br> relationships that matter most.
                        </p>
                        <button className="btn text-white bg-green-950 font-semibold px-4 py-3 mt-8"><FaPlus /> Add a Friend</button>
                    </div>
                </div>
            </div>

            <div className='mt-10 mb-10 bg-base-100 container mx-auto text-center'>
            
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    
                    <div className="card bg-base-200 shadow-sm  rounded-2xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-semibold text-3xl mt-8">12</h2>
                            <p className='mb-8 text-lg'>Total Friends</p>
                        </div>
                    </div>       

                    <div className="card bg-base-200 shadow-sm  rounded-2xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-semibold text-3xl mt-8">3</h2>
                            <p className='mb-8 text-lg'>On Track</p>
                        </div>
                    </div>          

                    <div className="card bg-base-200 shadow-sm  rounded-2xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-semibold text-3xl mt-8">6</h2>
                            <p className='mb-8 text-lg'>Need Attention</p>
                        </div>
                    </div>            

                    <div className="card bg-base-200 shadow-sm  rounded-2xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-semibold text-3xl mt-8">12</h2>
                            <p className='mb-8 text-lg'>Interactions This Month</p>
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    );
};

export default Banner;