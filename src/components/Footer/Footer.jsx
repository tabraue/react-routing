import './Footer.css';
import { PropTypes } from 'prop-types';

const Footer = ({ title }) => {
  return (
    <div className="footer">
      <p>{title} - © All rights reserved</p>
      <p>Made with 🧁 by DTR</p>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  title: PropTypes.string,
};
