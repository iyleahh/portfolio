const { BrowserRouter, Routes, Route, NavLink } = ReactRouterDOM;

const NavBar = () => (
  <nav>
    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
    <NavLink to="/hobbies" className={({ isActive }) => isActive ? 'active' : ''}>Hobbies</NavLink>
    <NavLink to="/accolades" className={({ isActive }) => isActive ? 'active' : ''}>Accolades</NavLink>
    <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
    <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
    <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}>Favorites</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
  </nav>
);

const Layout = ({ children }) => (
  <div>
    <header>Mi Portafolio</header>
    <NavBar />
    <main>{children}</main>
    <div className="footer">&copy; 2025 My Name</div>
  </div>
);

const Home = () => (
  <div>
    <h1>Bienvenido!</h1>
    <p>Welcome to my bold, modern Hispanic-themed portfolio.</p>
  </div>
);

const Hobbies = () => (
  <div>
    <h2>Hobbies</h2>
    <p>Here I share my favorite pastimes and passions.</p>
  </div>
);

const Accolades = () => (
  <div>
    <h2>Accolades</h2>
    <p>A showcase of awards and achievements.</p>
  </div>
);

const Resume = () => (
  <div>
    <h2>Resume</h2>
    <p>Download my resume <a href="#">here</a>.</p>
  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <p>An overview of my most exciting work.</p>
  </div>
);

const Favorites = () => (
  <div>
    <h2>Favorite Sites</h2>
    <ul>
      <li><a href="https://example.com" target="_blank">Example</a></li>
      <li><a href="https://example2.com" target="_blank">Example2</a></li>
      <li><a href="https://example3.com" target="_blank">Example3</a></li>
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>Reach me at <a href="mailto:me@example.com">me@example.com</a>.</p>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
