import React from 'react';
import {Link} from 'gatsby';
import {urlReplace} from '../../common/common'

import styles from './style.css'

const Card = ({item}) => {
    let newAlias = urlReplace(item.alias)

    return(
        <div className='card'>
            <Link to={newAlias.path}>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>
                        {item.description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Card;