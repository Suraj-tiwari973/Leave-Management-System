import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Nopage.css'

const Nopage = () => {
  return (
    <>
        <Navbar/>
        <div className='pnf'> 
          <h1 className='pnf-title'>404</h1>
          <h2 className='pnf-heading'>Oops ! Page not found</h2>
          <Link to="/" className='pnf-button'>
            Go back
          </Link>
        </div>
    </>
  )
}

export default Nopage;