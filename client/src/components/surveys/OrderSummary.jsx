import React from 'react';
import PRODUCTS from '../../constants/productLinks.js';
// import OrderSummaryItem from './OrderSummaryItem';

const styles = {
    deleteButton: {
        textAlign:'center',
        color:'#ccc',
        hover: {
            cursor:'pointer'
        }
    },
    OrderSummaryItem: {
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '11px',
        fontFamily: 'Courier',
        marginBottom: '24px',
        marginTop: '24px',
        width: '60%'
    }
}



export default
({cartState={}, removeItem, showTable, user}) => {
    let total = 0;
    const renderItems = () => {
        const keys = Object.keys(cartState);
        return keys.map(key => {
            const [shortKey, size] = key.split('_');
            const count = cartState[key];
            const {name='', points, sizes} = PRODUCTS[shortKey];
            total += (+points * +count);
            return (
                <tr key={key}>
                    <td>
                        <a href={sizes[key]} target='_blank' rel="noopener noreferrer">
                            {name}
                        </a>    
                    </td>
                    <td style={{textAlign:'right'}}>{size}</td>
                    <td style={{textAlign:'right'}}>{points}</td>
                    <td style={{textAlign:'right'}}>{count}</td>
                    <td style={{textAlign:'right'}}>{points * count}</td>
                    <td className='deleteButton'
                        onClick={e => removeItem(e, key)}>
                        &#x2715;
                    </td>
                </tr>

            )
        })
    }

    return (
        <div>
            {showTable &&
            <div style={styles.OrderSummaryItem}>
                <table className="striped">
                    <thead style={{height:'24px', fontSize:'14px'}}>
                        <tr>
                            <th>Item</th>
                            <th>Size</th>
                            <th style={{textAlign:'right'}}>Pts</th>
                            <th style={{textAlign:'right'}}>Count</th>
                            <th style={{textAlign:'right'}}>SubTotal</th>
                            <th style={{textAlign:'center'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItems()}
                    </tbody>
                </table>

                <div style={{textAlign:'center', height:'36px', fontSize:'14px', fontWeight:'bold', paddingTop:'7px'}}>
                    Total Points: {total}
                </div>
            </div>}
        </div>
    );
};