import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroeList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher),[ publisher])
    
    // const heroes = getHeroesByPublisher(publisher)
    
        return (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 animate__animated animate__fadeIn" >
                {
                    heroes.map( hero => (
                        <HeroCard 
                        key={hero.id}
                            {... hero}>
                        </HeroCard>
                ))
            }
        </div>
    )
}
