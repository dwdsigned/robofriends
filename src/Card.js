import React from 'react';
import { robots } from './robots';

const card = ({ name, email, id }) => {
    return (
        <div className='tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="robot" src={`https://robohash.org/${id}?set=set4&size=100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}







export default card;