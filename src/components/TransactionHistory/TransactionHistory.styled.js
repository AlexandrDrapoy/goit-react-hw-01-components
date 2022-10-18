import styled from 'styled-components';

export const Table = styled.table`
  width: 50%;
  border: 1px solid yellow;
  border-collapse: collapse;
  margin-top: 40px;
`;

export const HeadTable = styled.thead`
  width: 100%;
  border: 1px solid yellow;
  font-size: 30px;
  color: ${p => p.theme.colors.worning};
  font-weight: 900;
`;

export const BodyTable = styled.tbody`
  border: 1px solid yellow;
`;
export const LineTable = styled.tr`
  border: 1px solid red;
`;
export const Type = styled.td`
  border: 1px solid yellow;
`;
export const Amount = styled.td`
  border: 1px solid yellow;
`;
export const Currency = styled.td`
  border: 1px solid yellow;
`;
