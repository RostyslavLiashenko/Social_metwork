import React from "react";

const Preloader = () => {
    const styles = {
        maxWidth: '120px',
        borderRadius: '50%',
    }
    return (
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
            style={styles}
            alt="loader"/>
        )
}
export default Preloader;