import React from 'react';

import styles from './style.css'

const Card = ({item}) => {
    return(
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
            </div>
        </div>
    )
}

export default Card;