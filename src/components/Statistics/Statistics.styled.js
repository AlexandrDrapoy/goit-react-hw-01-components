import styled from 'styled-components';

export const StatisticInfo = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  background-color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  color: grey;
`;

export const StatList = styled.ul`
  display: flex;
  height: 50%;
`;

export const Label = styled.span`
  color: white;
  font-size: 25px;
`;

export const Percentage = styled.span`
  color: white;
  font-size: 30px;
`;
const variantColor = p => {
  if (p.perc < 10) return p.theme.colors.critical;
  if (p.perc < 20) return p.theme.colors.worning;
  if (p.perc < 40) return p.theme.colors.normal;
  if (p.perc < 100) return p.theme.colors.good;
};
export const ListItem = styled.li`
  background-color: ${p => variantColor(p)};
  display: flex;
  justify-content: center;
  width: 100%;
`;
