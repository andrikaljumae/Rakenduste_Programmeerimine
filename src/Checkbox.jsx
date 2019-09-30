import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({name, onChange, checked}) => (
    <div>
        <div>
            <label for="toggle"></label>
        </div>
    </div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
};

export default Checkbox;