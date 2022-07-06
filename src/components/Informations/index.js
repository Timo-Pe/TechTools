// == Import
import './information.scss';

// == Composant
const Informations = ({desc, compatibility, name}) => (
    <div className='informations'>
            <h2 className="informations-title">{name}</h2>
            <h3 className="informations-compatibility">Compatibilité :</h3>
            <ul className="informations-listCompatibility">
            {compatibility.map((os, i) => (
                <li key={i}>{os}</li>
            ))}
            </ul>
        <p className="informations-description">
           {desc}
        </p>
    </div>
);

// == Export
export default Informations;