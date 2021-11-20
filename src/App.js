
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
    <Navbar title='React-Ninja-home' about="About React-Ninja"/>
    <div className='container' >
    <TextForm heading="Enter your text here to analyze"/>
    </div>
   
    </div>
  );
}

export default App;
// proptype 
Navbar.propTypes={
title: PropTypes.string.isRequired,
about: PropTypes.string,
blogNumber: PropTypes.number
}

//default props

Navbar.defaultProps = {
title: 'swapnil-React',
about: 'about-text here '
}
