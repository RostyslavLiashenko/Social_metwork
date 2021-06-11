import React, {useState} from 'react';
import PropTypes from 'prop-types'
import classes from './pagination.module.css'
import useWindowSize from "../../../helpers/useWindowSize";
import {IconButton, Button} from "@material-ui/core";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        background: '#2b3120',
        color: '#fff',
        borderRadius: '4px',
        maxHeight: "36px",
        maxWidth: '40px',
        margin: "0 5px",
        transition: '.2s ease-in-out',
        '&:hover': {
            color: '#2b3120',
            background: '#fff'
        }
    }
})

const Pagination = ({totalItemsCount, itemsPerPage, onPageChange, currentPage, portionSize}) => {
    const classes1 = useStyles();
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
            <IconButton className={classes1.root}
                disabled={portionNumber <= 1} onClick={() => setPortionNumber(portionNumber - 1)}>
                <ArrowBackOutlinedIcon fontSize='small'/>
            </IconButton>
            {pages.filter((page) => (page) >= leftPagePortionNumber && page <= rightPagePortionNumber)
                .map(page => {
                    return (<Button
                        style={{
                            background: "#fff",
                            fontWeight: "600",
                            margin: "0 3px",
                            minWidth: '42px'
                        }}
                        onClick={() => onPageChange(page)}
                        className={currentPage === page ? classes.selectedPage : ''} key={page}>{page}</Button>)
                })}
            <IconButton
                className={classes1.root}
                disabled={portionNumber > portionCount} onClick={() => setPortionNumber(portionNumber + 1)}>
                <ArrowForwardOutlinedIcon fontSize='small'/>
            </IconButton>
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
