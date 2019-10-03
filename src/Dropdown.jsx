import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({direction, onChange}) => (
    <div>
        <select value={direction} onChange={onChange}>
            <option value={-1}>Price high to low</option>
            <option value={1}>Price low to high</option>
        </select>
    </div>
);

Dropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Dropdown;