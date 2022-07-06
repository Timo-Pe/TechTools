// == Import
import './listCategory.scss';
//import PropTypes from 'prop-types';



// == Composant
const ListCategory = ({selected, updateCategories, datas}) => 
(
        <div className='category-list'>
            {datas.map((category) => (
            <a href="#" id ={category.id} className={ `category ${selected === category.name ? "active" : ""} ${category.color}`} key={category.id} onClick={updateCategories} >
                <h2 className='category-title'>{category.name}</h2>
            </a>
        ))}
        </div>
);

//ListCategory.propTypes ={
    //nom de la prop : type attendu
    // tableau qui contient des chaines de caracteres
 //   datas: PropTypes.arrayOf(PropTypes.string).isRequired,
   // updateCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
//};
    
export default ListCategory;
