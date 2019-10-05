import React from 'react';
import NumericInput from 'react-numeric-input';

import OrderSizeDropDown from './OrderSizeDropDown.jsx';
// import './OrderBox.css';

// NumericInput.style.b.height = '16px';
NumericInput.style.border = '0px';
NumericInput.style.input.border = '0px';
NumericInput.style.input.height = '26px';
NumericInput.style.input.marginLeft = '5px';
NumericInput.style.input.textAlign = 'center';
// NumericInput.style.input.paddingLeft = '5px';
NumericInput.style.input.width = '74px';


export default ({handleCount, handleSize, lastSizeChosen='', product}) => {
    const {code, color, image, name, points} = product;

    const styles = {
        img: {
            height:'50px', width:'40px'
        },
        numInput: {
            marginRight: '10px'
        }
    }

    return (
        <div className='wrapper' >

            <div    className='imgBox'>
                <img src={image} alt={code} style={styles.img}/>
            </div>
            
            <div className='codeBox'>{code}</div>
            <div className='nameBox'>{name}</div>
            <div className='pointsBox'>{points} pts</div>

            <div className='dropdown'>

                <OrderSizeDropDown  product={product}
                                    code={code}
                                    onChange={handleSize}/>
            </div>

            <div className='numberBox'>
                {
                <NumericInput   className='form-control'
                                data-item={code}
                                disabled={lastSizeChosen.split('_')[0] !== code}
                                min={0} max={100}
                                name={`${code}_count`}
                                onChange={handleCount}
                                size={18}/>}
            </div>

        </div>
    );
};