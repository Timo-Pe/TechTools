import React, { useState } from 'react';
// == Import composants
import ListCategory from 'src/components/ListCategory';
import ListTechnologies from 'src/components/ListTechnologies';
import Informations from 'src/components/Informations';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';


// import Styles
import './styles.scss';


//import datas
import datas from 'src/Datas/datas';

// Composant App
const App = () => {


const [nameCategory, setNameCategory] = useState("");
const [colorCategory, setColorCategory] = useState("");
const [toolsCategory, setToolsCategory] = useState([]);

const [nameTechnology, setNameTechnology] = useState("");
const [compatibilityTechnology, setCompatibilityTechnology] = useState([]);
const [descriptionTechnology, setDescriptionTechnology] = useState("");



const handleClickCategory = (e) => {
e.preventdefault;
let idSelect = e.target.id;
  
  for (let category of datas){
    
    if (idSelect == category.id){

      setNameCategory(category.name);
      setColorCategory(category.color);
      setToolsCategory(category.tools);
    };
  }
  
}

const handleClickTechnology = (e) => {
  e.preventdefault;
  for (let technology of toolsCategory){
      
    if (e.target.id == technology.id){

      setNameTechnology(technology.name);
      setCompatibilityTechnology(technology.compatibility);
      setDescriptionTechnology(technology.description);
    };
}

}

  return (
      <div className="container-app">
            <Header />
          <div className="app">
                <ListCategory selected={nameCategory} updateCategories={handleClickCategory} datas={datas} />
            <section className="container-technologies">
              <ListTechnologies tools={toolsCategory} categoryName={nameCategory} categoryColor={colorCategory} handleClick={handleClickTechnology}/>
                <Informations desc={descriptionTechnology} compatibility={compatibilityTechnology} name={nameTechnology}/>
            </section>
          </div>
          <Footer />
        </div>
    );
};

// == Export
export default App;
