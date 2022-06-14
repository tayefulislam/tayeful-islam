import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { useNavigate } from 'react-router-dom';
const MyProjects = () => {
    const navigate = useNavigate()


    const [projects, setProjects] = useState([]);


    // fetch('/projects.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })


    return (
        <div>

            <h1 className='text-2xl text-center font-bold'>My Recents Full Stack Projects</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5'
            >

                <div className="card w-full bg-base-100 shadow-xl"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-easing="ease-out-cubic"
                >
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Lv98drc/focus-tools.png" alt="Focus Tools" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Focus Tools</h2>
                        <p>Focus Tools is a manufacturer tool website. Users can sign up and social login. They can make orders and payments. Cancel order if is't pay yet. If paid they can't cancel the order.</p>
                        <div className="card-actions">
                            <button onClick={() => navigate('/projectDetail/focus-tools')} className="btn">Details</button>
                        </div>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-easing="ease-out-cubic">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/hZGr6bv/square-inventory.png" alt="Square Inventory" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Square Inventory</h2>
                        <p>Square Inventory warehouse management or inventory management web application.You can easily handle your warehouse by it. You can track,add ,update,delete your item.</p>
                        <div className="card-actions">
                            <button onClick={() => navigate('/projectDetail/square-inventory')} className="btn">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-easing="ease-out-cubic">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/X5Vfsj2/doctors-portal.png" alt="Doctors Portal" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Doctors Portal</h2>
                        <p>Doctors Portal is an Appointment booking website, Anyone can book a doctor's appointment.</p>
                        <div className="card-actions">
                            <button onClick={() => navigate('/projectDetail/doctors-portal')} className="btn">Details</button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default MyProjects;