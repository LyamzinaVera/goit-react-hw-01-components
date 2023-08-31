import PropTypes from 'prop-types';
import style from 'components/Transaction/TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
 <table className={style.transactionHistory}>
   <thead>
      <tr >
        <th className={style.tableHead}>Type</th>
        <th className={style.tableHead}>Amount</th>
        <th className={style.tableHead}>Currency</th>
      </tr>
  </thead>
  <tbody>
    {items.map(item => (
     <tr key={id} className={style.tableData}>
       <td className={style.tableDataCell}>{item.type}</td>
       <td className={style.tableDataCell}>{item.amount}</td>
       <td className={style.tableDataCell}>{item.currency}</td>
     </tr>
    ))}
  
  </tbody>
  
  
 
</table>
    )
}

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
         id: PropTypes.string.isRequired,
         type: PropTypes.string.isRequired,
         amount: PropTypes.number.isRequired,
         currency: PropTypes.string.isRequired,
        })
    )
}