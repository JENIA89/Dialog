import Theme from './Theme';
import UserInfo from './UserInfo';
import './style.css';

const Header = () => {
  return (
    <div className='header'>
      <UserInfo />
      <Theme />
    </div>
  );
};

export default Header;
