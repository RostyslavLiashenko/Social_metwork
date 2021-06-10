import React, {useState} from 'react';
import PropTypes from 'prop-types'
import classes from './pagination.module.css'
import useWindowSize from "../../../helpers/useWindowSize";

const Pagination = ({totalItemsCount, itemsPerPage, onPageChange, currentPage, portionSize}) => {
    const widthSize = useWindowSize().width
    if (widthSize <= 850) portionSize = 5
    if (widthSize <= 450) portionSize = 4
    let pageCount = Math.ceil(totalItemsCount / itemsPerPage)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPagePortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPagePortionNumber = portionNumber * portionSize

    return (
        <div className={classes.pagination}>
            {portionNumber > 1 &&
            <button className={classes.arrowBtn} onClick={() => setPortionNumber(portionNumber - 1)}>
                &#129044;
            </button>}
            {pages.filter(page => page >= leftPagePortionNumber && page <= rightPagePortionNumber)
                .map(page => {
                    return (<span
                        onClick={() => onPageChange(page)}
                        className={currentPage === page ?
                            `${classes.selectedPage} ${classes.pageBtn}` : classes.pageBtn} key={page}>{page}</span>)
                })}
            {portionNumber < portionCount &&
            <button className={classes.arrowBtn} onClick={() => setPortionNumber(portionNumber + 1)}>
                &#129046;
            </button>}
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
