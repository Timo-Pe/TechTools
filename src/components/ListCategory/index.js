// == Import
import './listCategory.scss';
import Category from 'src/components/ListCategory/Category';


// == Composant
const ListCategory = () => (
    <div className='list-category'>
        <Category />
        <Category />
        <Category />
        <Category />
    </div>
);

// == Export
export default ListCategory;
