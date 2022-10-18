import PropTypes from 'prop-types';
import {
  Label,
  Percentage,
  StatisticInfo,
  StatList,
  Title,
  ListItem,
} from './Statistics.styled';

const mapStats = stats => {
  return stats.map(({ id, label, percentage }) => (
    <ListItem perc={percentage} key={id}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </ListItem>
  ));
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticInfo>
      {title && <Title> {title}</Title>}

      <StatList stats={stats}>{mapStats(stats)}</StatList>
    </StatisticInfo>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
