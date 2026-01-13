import React from 'react';
import styles from "./_button.module.scss";

const Button = ({title}) => {
    return (
        <button className={styles.btn} >
            {title}
        </button>
    )
}
export default Button;