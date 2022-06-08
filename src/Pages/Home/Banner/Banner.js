
import React from "react";


const Banner = () => {

    return (
        <div className='text-center'>
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Hello I'm Kazi Tayeful Islam</h1>
                        <p class="py-6">Hello I'm Kazi Tayeful Islam.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;