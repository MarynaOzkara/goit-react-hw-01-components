import PropTypes from 'prop-types';
import {Section, Title, StatList, StatItem, Label, Percentage} from './Statistics.styled';


const Statistics = ({ stats }) => (
    <Section>
      <Title>Upload stats</Title>

      <StatList>
        {stats.map(stat => (
           <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
);

Statistics.propTypes = {
   stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
   ).isRequired
}

export default Statistics;