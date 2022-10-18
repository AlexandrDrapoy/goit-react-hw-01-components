import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
`;

export const FriendListItem = styled.li`
  border: 1px solid tomato;
  border-radius: 7%;
  background-color: blueviolet;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  gap: 10px;
`;
export const ListStatus = styled.span`
  background-color: ${p => (p.status ? 'green' : 'red')};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  height: 100%;
  width: 48px;
`;
export const Name = styled.p`
  font-size: 20px;
`;
