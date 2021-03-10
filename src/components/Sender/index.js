import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Sender = ({ onAddMessage }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    onAddMessage({
      id: Date.now(),
      avatar:
        'https://sun2.velcom-by-minsk.userapi.com/s/v1/if2/_p9B4qv16SuqH9BzxVlHqII0p5wS2cNXiHUtYOU4mSZ66S2_4mw5IyT7dCHF1HuM0KID_pS-p-F5mfL465Yqa1CX.jpg?size=200x0&quality=96&crop=5,5,1066,1066&ava=1',
      message: value,
      date: new Date().toISOString(),
      is: 'my',
      status: 'sended',
    });
    setValue('');
  };

  return (
    <form className='sender' onSubmit={onSubmit}>
      <input
        placeholder='Введите сообщение'
        value={value}
        onChange={onChange}
        required
      />
      <button>Отправить</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default Sender;
