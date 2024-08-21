import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image';

const Clients = () => {
  return (
    <div className='py-20' id="testimonials">
      <h1 className="heading">
        Témoignages Des
        <span className="text-purple"> Clients Satisfaits</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex items-center md:max-x-60 max-w-32 gap-2'>
              <div className="relative w-5 h-5 md:w-10 md:h-10">
                <Image
                  src={img}
                  alt={name}
                  layout="fill" // Remplit le conteneur tout en respectant les proportions
                  objectFit="contain" // Ajuste l'image pour qu'elle soit contenue dans le conteneur sans déformation
                  className="" // Optionnel: Ajoute des coins arrondis si nécessaire
                />
              </div>

              <div className="relative w-20 h-16 md:w-24 md:h-20">
                <Image
                  src={nameImg}
                  alt={name}
                  layout="fill" // Remplit le conteneur tout en respectant les proportions
                  objectFit="contain" // Ajuste l'image pour qu'elle soit contenue dans le conteneur sans déformation
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients