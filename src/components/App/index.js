// == Import
import ListCategory from 'src/components/ListCategory';
import ListTechnologies from 'src/components/ListTechnologies';
import Informations from 'src/components/Informations';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import './styles.scss';

// == Composant
const App = () => (
  <div className="container-app">
        <Header />
      <div className="app">
            <ListCategory />
        <section className="container-technologies">
            <ListTechnologies />
            <Informations />
        </section>
      </div>
      <Footer />
    </div>
    
);

// == Export
export default App;
