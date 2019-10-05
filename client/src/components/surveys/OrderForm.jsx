import React, { Component } from 'react';
import _ from 'lodash';
// import {reduxForm} from 'redux-form';
import OrderBox from './OrderBox.jsx';
import OrderSummary from './OrderSummary.jsx';
import PRODUCTS from '../../constants/productLinks.js';
// const validate = v => {	
//     // v is the formValues
//     const errors = {};
//     if (!v.title) errors.title = 'Enter a title';
//     if (!v.categories) errors.categories = 'Enter a category';
//     if (!v.content) errors.content = 'Enter some content';
//     return errors;									// if 'errors' is still empty, the form will submit
// }

// const formOptions = {
//     form: 'orderForm',
//     destroyOnUnmount: false
//     // validate
// }



class OrderForm extends Component {


    state = {};

    handleChange = e => {
        const {name, value} = e.target;

        console.log('value', value);
        console.log('name', name);
       
        this.setState({...this.state, [name]: value})
    }

    handleSize = size => {
        this.setState({
            [size.value]: 0
        });
        this.lastSizeChosen = size.value;
    }

    handleCount = (num,b,element) => {
        if (!this.lastSizeChosen) return;
        const item = element.dataset.item;
        if (this.lastSizeChosen.split('_')[0] === item) {
            if (num === 0) {
                const newState = this.state;
                delete newState[this.lastSizeChosen];
                this.setState(newState);
                return;
            }
            this.setState({
                [this.lastSizeChosen]: num
            });
        }
    }

    removeItem = (e, key) => {
        const newState = this.state;
        delete newState[key];
        this.setState(newState);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(JSON.stringify(this.state , null, 2));
    }

    renderFields = () => {
        return (
            Object
                .keys(PRODUCTS)
                .map((k,i) =>(
                    <OrderBox   code={k}
                                handleChange={this.handleChange}
                                handleCount={this.handleCount}
                                handleSize={this.handleSize}
                                key={i}
                                lastSizeChosen={this.lastSizeChosen}
                                product={PRODUCTS[k]}
                                size={this.state.pendingSize}/>
                ))
        )
    }

    render() {
        
        return (
            <div>
                
                <div>
                    {this.renderFields()}
                </div>
            
                <OrderSummary   cartState={this.state}
                                removeItem={this.removeItem}
                                showTable={!_.isEmpty(this.state)}/>

                <div style={{textAlign: 'center', paddingBottom:'15px', paddingTop:'15px'}}>
                    <button className="btn-flat btn-med green white-text"
                            onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>

            </div>
            
        );
    }
}

// OrderForm.defaultProps = {};
// OrderForm.propTypes = {
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

export default OrderForm;
// export default reduxForm(formOptions)(NameOfComponent)
// or if you're already connected to redux
// const connectedComponent = connect(null, {createPost})(PostsNew);
// export default reduxForm(formOptions)(OrderForm);
// export default connect()(OrderForm);
// if 'import * as actions from '../actions/actionsIndex';'
//     export default connect(null, actions)(OrderForm);

// export default connect(mapStateToProps, () => ({}))(OrderForm);
// export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
// export default connect(mapStateToProps, { nameOfImportedAction })(OrderForm);

// remember to use 'this' binding now (choose one, #1 is best)
// 1. In constructor (see constructor above)
// 2. .bind(this) in your render ( onClick={this.onClick.bind(this)} )
// 3. Arrow functions in your render ( onClick={() => {}} )
// 4. _.bindAll(this,'methodName','...')
// 5. see ALTERNATIVE 2 above - no 'this' binding required