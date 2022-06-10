import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query'

const ProjectDetail = () => {

    const { id } = useParams('')

    const naviagte = useNavigate()

    const { isLoading, error, data } = useQuery('projectDetails', () =>
        fetch('/projects.json').then(res =>
            res.json()
        )
    )

    console.log(data)

    const project = data?.find(project => project?.nameId === id);

    return (
        <div className='mt-4'>

            <h1 className='text-center text-4xl font-semibold'>{project?.name}</h1>

            <div class="card w-full bg-base-100 shadow-xl mt-3">

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 bg-black'>

                    {
                        project?.image?.map(img => <figure><img src={img.png} alt="Shoes" className='p-3'
                            data-aos="zoom-in"
                            data-aos-duration="3000"

                        /></figure>)
                    }



                </div>

                <div class="card-body">
                    <h2 class="card-title">
                        {project?.name}

                    </h2>
                    <div><h1 className='text-xl font-semibold'>
                        Summary</h1>

                        <p className=''>{project?.summary}</p>
                    </div>

                    <div>
                        <h1 className='text-xl font-semibold'>Details</h1>
                        <div>
                            <ul>
                                {project?.details?.map((point, index) => <li>{`${index + 1}. `}{point.point}</li>)}

                            </ul>

                        </div>
                    </div>

                    <div class="card-actions justify-end">

                        <a href={project?.liveLink} class="badge badge-outline"> Live Website</a>
                        <a href={project?.clientSide} class="badge badge-outline"> Client Side</a>
                        <a href={project?.serverLink} class="badge badge-outline">Server Side</a>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProjectDetail;