import React from 'react';

const AboutMe = () => {
    return (
        <div className='flex justify-center items-center'>

            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1640512633829.jpg" />
                        </div>
                    </div>

                    <h2 className="card-title text-xl ">Kazi Tayeful Islam</h2>

                    <p>Department of Marketing <br />
                        Khilgaon Model University<br />
                        November 2021 - Current
                    </p>
                    <p><span className='font-bold'>My SKills</span> : CSS, Tailwind ,Bootstrap, JavaScript (ES6), React.js , Node.js, Express.js, MongoDB, Web Hosting.</p>

                    <p><span className='font-bold'>About Me :</span>Hello Guys, I'm Kazi Tayeful Islam. I'm a Full Stack Web Developer. I love learning about new technology. In My free time, I explore new technology. My hobby is tree planting.</p>




                </div>
            </div>
        </div>
    );
};

export default AboutMe;