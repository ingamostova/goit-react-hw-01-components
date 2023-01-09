import PropTypes from 'prop-types';
import { StatList, StatListItem, Label } from './Statistics.styled';
import { getRandomColor } from 'Utils/getrandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <StatList>
        {stats.map(stat => (
          <StatListItem key={stat.id} style={{backgroundColor: getRandomColor()}}>
            <Label>{stat.label} </Label>
            <Label className="percentage">{stat.percentage}%</Label>
          </StatListItem>
        ))}
      </StatList>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
