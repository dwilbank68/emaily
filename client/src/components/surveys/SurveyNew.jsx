import React, { Component } from 'react';
import SurveyForm from './SurveyForm.jsx';

// const validate = v => {	
//     // v is the formValues
//     const errors = {};
//     if (!v.title) errors.title = 'Enter a title';
//     if (!v.categories) errors.categories = 'Enter a category';
//     if (!v.content) errors.content = 'Enter some content';
//     return errors;									// if 'errors' is still empty, the form will submit
// }

// const formOptions = {
//     form: 'NameOfForm',						// 0
//     destroyOnUnmount: false, 				// 1
//     validate
// }

class SurveyNew extends Component {

    // constructor(props, context){
    //     super(props, context);
    //     this.state = {
    //         whatever:{}
    //     }
    //    this.handleClick = this.handleClick.bind(this)
    // }

    // state = { whatever: false }; // if using create-react-app

    // handleClick(e) {
    //    
    //    this.setState({
    //        dispatch is available under props.dispatch
    //    })
    // }

    /////////// ALTERNATIVE 1 ///////////
    // using create-react-app
    // state = { whatever: false };

    /////////// ALTERNATIVE 2 ///////////
    // using ES2016 property initializer
    // no more constructor or 'this' binding required
    //
    // state = { whateve': false }
    //
    // handleClick = (e) => {
    //    this.setState(prevState => {
    //        return {}
    //    })
    // }

    render() {
        return (
            <div className="CLASS_NAME">
                <SurveyForm/>
            </div>
        );
    }
}

// SurveyNew.defaultProps = {};
// SurveyNew.propTypes = {
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

export default SurveyNew;
// export default reduxForm(formOptions)(NameOfComponent)
// or if you're already connected to redux
// const connectedComponent = connect(null, {createPost})(PostsNew);
// export default connect()(SurveyNew);
// if 'import * as actions from '../actions/actionsIndex';'
//     export default connect(null, actions)(SurveyNew);

// export default connect(mapStateToProps, () => ({}))(SurveyNew);
// export default connect(mapStateToProps, mapDispatchToProps)(SurveyNew);
// export default connect(mapStateToProps, { nameOfImportedAction })(SurveyNew);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
// 5. see ALTERNATIVE 2 above - no 'this' binding required