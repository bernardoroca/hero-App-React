import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroeById'

export const HeroScreen = ({history}) => {

    const {heroID}  =useParams()

    const hero = useMemo(() => getHeroesById( heroID ),[ heroID])
 

    if( !hero){
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if(history.lenght <= 2 ){
            history.push("/")
        }else{
            history.goBack()
        }

        
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero 

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                src={`../assets/heroes/${heroID}.jpg`}
                alt={superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearence: </b> {first_appearance}
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button 
                    onClick={handleReturn}
                    className="btn btn-outline-info">
                    Return 
                </button>

            </div>
        </div>
    )
}
