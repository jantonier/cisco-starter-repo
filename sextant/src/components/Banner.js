import React from 'react';
//import { motion } from 'framer-motion';
// import './Banner.css';



function Banner({ tittle }) {
    return (
        <div className="w-screen z-10 bg-gradient-to-r from-yellow-50 shadow-sm fixed ">
            <div>
                <h1 className="text-5xl indent-5 italic font-edu font-bold align-text-bottom">{tittle}</h1>
            </div>
        </div>
    );
}

export default Banner;