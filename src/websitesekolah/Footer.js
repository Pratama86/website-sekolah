import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Footer = ()=> {
    return (
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="#home">SMK Kita Semua</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Copyright Allright reserved: <a href="#login" className='text-decoration-none'>2024,10,17</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Footer;