import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3dPin'
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
    return (
        <div className='py-20' id="projects">
            <h1 className="heading">
                Un Aperçu De {' '}
                <span className="text-purple">Mes Récents Projets</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="sm:h-[41rem] h-[25rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                        <PinContainer title={link} href={link}>

                            <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[20vh] mb-10'>
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <Image
                                        src="/bg.png"
                                        alt="bg-img"
                                        objectFit="cover" 
                                        layout="fill" 
                                    />
                                </div>
                                <Image
                                    src={img}
                                    alt={title}
                                    width={600} 
                                    height={600}
                                    className="z-10 absolute top-0"
                                    layout="fixed"
                                />
                            </div>

                            <h1 className='font-bold lg:text-2xl md:text-2xl text-base line-clamp-1 '>
                                {title}
                            </h1>

                            <p className="lg:text-xl lg:font-normal font font-light text-sm line-clamp-2">
                                {des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">

                                <div className="flex items-center">

                                    {iconLists.map((icon, index) => (

                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                            style={{ transform: `translateX(-${5 * index * 2}px)` }}>

                                            <Image
                                                src={icon}
                                                alt={icon}
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects