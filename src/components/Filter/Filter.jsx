import React from "react";
import s from './Filter.module.css'

// console.log(s);

const Filter = () => {

    return (
        <div> 
            <p>Find contacts by name</p>
            <label>
                <input></input>
            </label>
        </div>
    )
};

// Statistics.defaultProps = {
//     title: null,
// };

// Statistics.propTypes = {
//     stats: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         label: PropTypes.string.isRequired,
//         percentage: PropTypes.number.isRequired,
//         title: PropTypes.string,
//     })).isRequired,
// }
export default Filter;