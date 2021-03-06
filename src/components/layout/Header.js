import Nav from './Nav';

const Header = () => {

  return (

      <header >
        <div className="heading">
          <h1>WebDeveloper</h1>
          <Nav />
        </div> 
        <aside className="heading-tag">
          <h3>Front-End UI Development</h3>
          <h4>HTML / CSS / Javascript</h4>
        </aside>
      </header> 

  );
}

export default Header;