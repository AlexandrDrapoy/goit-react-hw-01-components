import PropTypes from 'prop-types';

import {
  Amount,
  BodyTable,
  Currency,
  HeadTable,
  LineTable,
  Table,
  Type,
} from './TransactionHistory.styled';
const OneTableItem = p => {
  return p.item.transactions.map(({ id, type, amount, currency }) => (
    <LineTable key={id}>
      <Type>{type}</Type>
      <Amount>{amount}</Amount>
      <Currency>{currency}</Currency>
    </LineTable>
  ));
};
export const TransactionHistory = p => {
  return (
    <Table>
      <HeadTable>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HeadTable>

      <BodyTable>
        <OneTableItem item={p} />
      </BodyTable>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
