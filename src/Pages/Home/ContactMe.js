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


    }
    return (
        <div className='my-12'>

            <h1 className='text-center text-2xl font-bold'>Contact Me</h1>

            <div className='flex justify-center items-center'>


                <form onSubmit={handleSubmit} >


                    <div class="form-control w-64 md:w-96 lg:w-96 max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Name</span>

                        </label>
                        <input type="text" placeholder="Type Your Name" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email Address</span>

                        </label>
                        <input type="text" placeholder="Type Email Address" class="input input-bordered w-full max-w-xs" />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Message</span>

                        </label>
                        <textarea type="text" placeholder="Type Your Message" class="input input-bordered w-full max-w-xs" />

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