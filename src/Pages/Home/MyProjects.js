import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
const MyProjects = () => {
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-5'>


                <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/Lv98drc/focus-tools.png" alt="Focus Tools" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Focus Tools</h2>
                        <p>Focus Tools is a manufacturer tool website. Users can sign up and social login. They can make orders and payments. Cancel order if is't pay yet. If paid they can't cancel the order.</p>
                        <div class="card-actions">
                            <button class="btn">Details</button>
                        </div>
                    </div>
                </div>

                <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/hZGr6bv/square-inventory.png" alt="Square Inventory" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Square Inventory</h2>
                        <p>Square Inventory warehouse management or inventory management web application.You can easily handle your warehouse by it. You can track,add ,update,delete your item.</p>
                        <div class="card-actions">
                            <button class="btn">Details</button>
                        </div>
                    </div>
                </div>
                <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://i.ibb.co/X5Vfsj2/doctors-portal.png" alt="Doctors Portal" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Doctors Portal</h2>
                        <p>Doctors Portal is an Appointment booking website, Anyone can book a doctor's appointment.</p>
                        <div class="card-actions">
                            <button class="btn">Details</button>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default MyProjects;