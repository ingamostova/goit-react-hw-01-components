import PropTypes from 'prop-types';
import { TransactionsHistory, TableHead, Name, ItemInfo, Row } from './TransactionsHistory.styled';

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
          <Row key={item.id}>
            <ItemInfo>{item.type}</ItemInfo>
            <ItemInfo>{item.amount}</ItemInfo>
            <ItemInfo>{item.currency}</ItemInfo>
          </Row>
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
