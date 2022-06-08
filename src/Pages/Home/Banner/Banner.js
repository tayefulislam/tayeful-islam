
import React from "react";


const Banner = () => {

    return (
        <div className='text-center'>

            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse mt-5">
                    <div class="avatar">
                        <div class="w-48 lg:w-64 mask mask-hexagon">
                            <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1640512633829.jpg" />
                        </div>
                    </div>
                    <div className="mx-12">
                        <h1 class="text-4xl font-bold ">Hello I'm Kazi Tayeful Islam</h1>
                        <p class="py-6">Hello I'm a MERN Stack Developer.</p>
                        <button class="btn btn-primary">Donwload Resume</button>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Banner;