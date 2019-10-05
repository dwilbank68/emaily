import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
// import { connect } from 'react-redux';
import SurveyField from './SurveyField.jsx';

const validate = v => {	
    // v is the formValues
    const errors = {};
    if (!v.title) errors.title = 'Enter a title';
    if (!v.categories) errors.categories = 'Enter a category';
    if (!v.content) errors.content = 'Enter some content';
    return errors;									// if 'errors' is still empty, the form will submit
}

const formOptions = {
    form: 'surveyForm',
    destroyOnUnmount: false, 				// 1
    validate
}



class SurveyForm extends Component {

    renderFields = () => {
        return (
            <div>
                <Field  type='text'
                        name='title'
                        label='Survey Title'
                        component={SurveyField}/>
                <Field  type='text'
                        name='subject'
                        label='Subject Line'
                        component={SurveyField}/>
                <Field  type='text'
                        name='body'
                        label='Email Body'
                        component={SurveyField}/>
                <Field  type='text'
                        name='emails'
                        label='Recipient List'
                        component={SurveyField}/>
            </div>
        )
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="CLASS_NAME">
                <form onSubmit={handleSubmit(vals => console.log(vals))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

// SurveyForm.defaultProps = {};
// SurveyForm.propTypes = {
//     name:        PropTypes.string.isRequired,
//     id:          PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
//     message:     PropTypes.shape({ title: PropTypes.string, text: PropTypes.string }).isRequired,
//     comments:    PropTypes.arrayOf(React.PropTypes.object),
//     date:        PropTypes.instanceOf(Date)
// };
//
// PropTypes -> array, bool, func, number, object, string, symbol

///////////////////////////// mapDispatchToProps //////////////////////////////
//
// Option 1. Skip it - dispatch is on props anyway
// -----------> this.props.dispatch(loadCourses());
//
//
// Option 2. Wrap props manually
//
// function mapDispatchToProps(dispatch) {
//     return {
//         loadCourses: () => {dispatch(loadCourses())},
//         createCourse: (course) => {dispatch(createCourse(course))},
//     };
// }
// -> this.props.loadCourses, this.props.createCourse
//
//
// Option 3. use bindActionCreators (which is just a shortcut method)
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(
//         { nameYouWantOnProps:nameOfImportedAction },
//         dispatch
//     );
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actions, dispatch)
//     };
// }
//
// -> this.props.actions.loadCourses();

///////////////////////////// mapStateToProps //////////////////////////////

// function mapStateToProps(state, ownProps) {
//     return { whatever: state.whatever }
// }
//
// const mapStateToProps = state => ({
//     articles: state.articles
// });

///////////////////////////// context //////////////////////////////

// ManageCoursePage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }
// (lets you do 'this.context.router.push('/wherever');

// export default SurveyForm;
// export default reduxForm(formOptions)(NameOfComponent)
// or if you're already connected to redux
// const connectedComponent = connect(null, {createPost})(PostsNew);
export default reduxForm(formOptions)(SurveyForm);
// export default connect()(SurveyForm);
// if 'import * as actions from '../actions/actionsIndex';'
//     export default connect(null, actions)(SurveyForm);

// export default connect(mapStateToProps, () => ({}))(SurveyForm);
// export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);
// export default connect(mapStateToProps, { nameOfImportedAction })(SurveyForm);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
// 5. see ALTERNATIVE 2 above - no 'this' binding required