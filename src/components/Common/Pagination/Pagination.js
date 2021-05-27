import React, {useState} from 'react';
import PropTypes from 'prop-types'
import classes from './pagination.module.css'


const Pagination = ({totalItemsCount, itemsPerPage, onPageChange, currentPage, portionSize}) => {
    let pageCount = Math.ceil(totalItemsCount / itemsPerPage)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPagePortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPagePortionNumber = portionNumber * portionSize

   return (
       <div>
           {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>left</button>}
            {pages.filter(page => page >= leftPagePortionNumber && page <= rightPagePortionNumber)
                .map(page => {
                    return (<button
                        onClick={() => onPageChange(page)}
                        className={currentPage === page ?
                            classes.selectedPage : ''} key={page}>{page}</button>)
                })}
           {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)}>right</button>}
        </div>
    )

}

Pagination.propTypes = {
    totalItemsCount: PropTypes.number,
    itemsPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    portionSize: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pagination;
