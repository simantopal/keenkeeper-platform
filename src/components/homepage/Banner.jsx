import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-20 mb-10 container mx-auto">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                    <p className="py-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br> relationships that matter most.
                    </p>
                    <button className="btn text-white bg-green-950 font-semibold px-4 py-3"><FaPlus /> Add a Friend</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;