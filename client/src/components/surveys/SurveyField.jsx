import React from 'react';

// import SurveyField from './SurveyField.jsx';
// const SurveyField = (props) => {
export default ({input, label}) => {
    

    return (
        <div className="SurveyField">
            <label>{label}</label>
            <input {...input}/>
        </div>
    );
};


// SurveyField.defaultProps = {};
// SurveyField.propTypes = {
//     name:        PropTypes.string.isRequired,
//     hndleIptChg: PropTypes.func,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({
//          title: PropTypes.string.isRequired,
//          text: PropTypes.string.isRequired
//     }).isRequired,
//     comments:    PropTypes.arrayOf(PropTypes.object),
//     todos:       PropTypes.array,
//     isComplete:  PropTypes.bool,
//     id:          PropTypes.number,
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

