// == Import
import './listTechnologies.scss';
import Technology from 'src/components/ListTechnologies/Technology';
// == Composant
const ListTechnologies = () => (
    <div className='listTechnologies'>
        <h2 className="listTechnologies-title">3D</h2>
        <Technology />
        <Technology />
        <Technology />
        <Technology />
    </div>
);

// == Export
export default ListTechnologies;