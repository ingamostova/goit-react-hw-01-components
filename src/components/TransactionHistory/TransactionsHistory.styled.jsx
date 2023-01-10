import styled from "@emotion/styled";

export const TransactionsHistory = styled.table`
border: 2px solid black;
border-collapse: collapse;
padding: 10px;
display: table-caption;
table-layout: fixed;
`

export const TableHead = styled.thead`
    border: 2px solid black;
    padding: 10px;
`

export const Name = styled.th`
padding: 15px;
border: 2px solid black;
`

export const ItemInfo = styled.td`
padding: 8px;
`

export const Row = styled.tr`
:nth-child(odd) {
    background-color: #ff33cc;
  };
  :nth-child(even) {
    background-color: #e495e4;
  };
`