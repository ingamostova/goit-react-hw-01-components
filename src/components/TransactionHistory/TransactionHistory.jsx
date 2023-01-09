import PropTypes from 'prop-types';
import { TransactionsHistory, TableHead, Name, ItemInfo } from './TransactionsHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsHistory>
      <TableHead>
        <tr>
          <Name>Type</Name>
          <Name>Amount</Name>
          <Name>Currency</Name>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <ItemInfo>{item.type}</ItemInfo>
            <ItemInfo>{item.amount}</ItemInfo>
            <ItemInfo>{item.currency}</ItemInfo>
          </tr>
        ))}
      </tbody>
    </TransactionsHistory>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
