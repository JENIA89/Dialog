import propTypes from 'prop-types';
import dayjs from 'dayjs';
import Calendar from 'dayjs/plugin/calendar';
import './style.css';

dayjs.extend(Calendar);

const Title = ({ date }) => (
  <div className='title'>
    {dayjs(date).calendar(null, {
      sameDay: '[Сегодня]',
      lastWeek: 'DD MMMM',
      sameElse: 'DD MMMM YYYY',
    })}
  </div>
);

Title.propTypes = {
  date: propTypes.string.isRequired,
};

export default Title;
