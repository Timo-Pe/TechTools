// == Import
import './listTechnologies.scss';

// == Composant
const ListTechnologies = ({tools, categoryName, categoryColor, handleClick}) => (
    <div className='listTechnologies'>
        <h2 className={`listTechnologies-title listTechnologies-title-${categoryColor}`}>{categoryName}</h2>
            {tools.map((tool) => (
                <a href="#" id={tool.id} className={`technology technology-${categoryColor}`} key={tool.id} onClick={handleClick}>
                    <span className="technologies-title">{tool.name}</span>
                </a>
            ))}
            
    </div>
);

// == Export
export default ListTechnologies;