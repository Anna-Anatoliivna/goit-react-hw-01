import styles from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
 return <table className={styles.table}>
  <thead className={styles.thead}>
    <tr>
      <th className={styles.headBox}>Type</th>
      <th className={styles.headBox}>Amount</th>
      <th className={styles.headBox}>Currency</th>
    </tr>
  </thead>

     <tbody>
         {items.map(({ id, type, amount, currency }) => (    
    <tr className={styles.item} key={id} >
      <td className={styles.box}>{type}</td>
      <td className={styles.box}>{amount}</td>
      <td className={styles.box}>{currency}</td>
    </tr>
))}
  </tbody>
</table>  
}
