import React, { useMemo } from 'react'
import queryString  from 'query-string'
import { useLocation } from 'react-router'
import { useForm } from '../../Mis-custom-hooks-main/useForm/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesbyName } from '../../selectors/getHeroesbyName'

export const SearchScreen = ({ history }) => {

    const location = useLocation()
    // console.log(location.search)
    const {q = ""} = queryString.parse( location.search)
    
    const [ formValues, handleInputChange ] = useForm({
        heroSearch: q
    })
    
    const {heroSearch } = formValues

    const heroesFiltered = useMemo(() => getHeroesbyName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`?q=${heroSearch}`)
         
        
    }
    return (
        <div>
            <h1>Search Hero</h1>
            <hr/>

            <div className="row">
                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Find your favorite hero"
                            className="form-control mb-2"
                            name="heroSearch"
                            value={heroSearch}
                            onChange={handleInputChange}
                            autoComplete="off"
                        
                        ></input>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="submit">Search</button>
                            
                        </div>
        
                    </form>




                </div>

                <div className="col-7">

                    <h4>Results</h4>
                    <hr/>

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                                />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
