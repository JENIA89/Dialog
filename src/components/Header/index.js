import './style.css';
import Theme from './Theme';
import UserInfo from './UserInfo';

const Header = () => {
  return (
    <div className='header'>
      <UserInfo />
      <Theme />
    </div>
  );
};

export default Header;
