// import PropTypes from 'prop-types';
import {TableTransactions, TableHead, TableHeadTitle, TableCollumn, TableRow} from './TransactionHistory.styled';

const TransactionHistory = ({items}) => (
    <TableTransactions>
  <thead>
    <TableHead>
      <TableHeadTitle>Type</TableHeadTitle>
      <TableHeadTitle>Amount</TableHeadTitle>
      <TableHeadTitle>Currency</TableHeadTitle>
    </TableHead>
  </thead>

  <tbody>
    {items.map(item => (
       <TableRow key={item.id}>
       <TableCollumn>{item.type}</TableCollumn>
       <TableCollumn>{item.amount}</TableCollumn>
       <TableCollumn>{item.currency}</TableCollumn>
     </TableRow>
    ))}
  </tbody>
</TableTransactions>
);

export default TransactionHistory;