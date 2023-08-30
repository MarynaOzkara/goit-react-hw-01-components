import styled from 'styled-components';

export const TableTransactions = styled.table`
  margin: 0 auto;
  width: 340px;
  background-color: #fff;
  box-shadow: 7px 5px 15px 0px rgba(160, 158, 160, 0.6);
  margin-bottom: 40px;
  border-collapse: collapse;
`;
export const TableHead = styled.tr`
  height: 60px;
  background-color: turquoise;
`;
export const TableHeadTitle = styled.th`
  color: #ffffff;
`;
export const TableCollumn = styled.td`
  text-align: center;
  height: 40px;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #8cc1c1;
  }
`;
