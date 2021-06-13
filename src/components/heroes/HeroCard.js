import React from 'react'
import { Link } from 'react-router-dom'
import {heroesIMGcard} from "../../helpers/heroImage"



export const HeroCard = ( { 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, } ) => {

    return (
                    <div className="col" >
                        <div className="card">
                            <img className="card-img-top" src={heroesIMGcard(`./${id}.jpg`).default}  alt={ superhero}/>
                            
                                <div className="card-body">
                                    <h5 className="card-title">{superhero}</h5>
                                    <p className="card-text">{alter_ego}</p>

                                    {
                                        (alter_ego !== characters)
                                            && <p className="card-text"> {characters}</p>
                                    }

                                    <p className="card-text">
                                        <small className="text-muted">{first_appearance}</small>
                                    </p>

                                    <Link to={`./hero/${id}`}>
                                        Mas...
                                    </Link>
                    
                            </div>

                        </div>
                        
                    </div>

    )
}
