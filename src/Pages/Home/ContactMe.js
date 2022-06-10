import axios from 'axios';
import React from 'react';

const ContactMe = () => {

    const handleSubmit = (event) => {

        event.preventDefault()

        const email = event.target.email.value;
        const name = event.target.name.value;
        const message = event.target.message.value;

        const mail = {
            email,
            name,
            message
        }

        console.log(mail)
        const url = `https://tayefulapi1.priyopathshala.com/sendmail`
        axios.post(url, mail)
            .then(function (respones) {
                console.log(respones)

            })


    }
    return (
        <div className='my-12'>

            <h1 className='text-center text-2xl font-bold'>Contact Me</h1>

            <div className='flex justify-center items-center'>


                <form onSubmit={handleSubmit} >


                    <div className="form-control w-64 md:w-96 lg:w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>

                        </label>
                        <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email Address</span>

                        </label>
                        <input type="email" name='email' placeholder="Type Email Address" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Message</span>

                        </label>
                        <textarea type="text" name='message' placeholder="Type Your Message" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className='flex justify-center '>
                        <input type="submit" value='Send' className='btn btn-error hover:btn-success text-white w-full mt-2' />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ContactMe;