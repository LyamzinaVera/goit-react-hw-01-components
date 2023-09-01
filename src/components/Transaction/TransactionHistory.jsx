import PropTypes from 'prop-types';
import style from 'components/Transaction/TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
    
        <table className={style.transactionHistoryTable}>
   <thead className={style.headerRow}>
      <tr className={style.valuesRow}>
        <th className={style.columnHeader}>Type</th>
        <th className={style.columnHeader}>Amount</th>
        <th className={style.columnHeader}>Currency</th>
      </tr>
  </thead>
  <tbody>
    {items.map(item => (
     <tr key={item.id} className={style.valuesRow}>
       <td className={style.transactionData}>{item.type}</td>
       <td className={style.transactionData}>{item.amount}</td>
       <td className={style.transactionData}>{item.currency}</td>
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