import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css'

const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path !== '');
    paths.shift()

    return (
        <ul className='breadcrumbs_container'>

            {paths.map((path, index) => {
                const route = `/${paths.slice(0, index + 1).join('/')}`;
                const formattedPath = path.charAt(0)
                    .toUpperCase() + path.slice(1)

                return (
                    <li key={index} className='breadcrumbs_item'>
                        <span className='separator'> &gt; </span>
                        {index === paths.length - 1 ? (
                            <span>{decodeURI(formattedPath).replace(/%20/g, " ")}</span>
                        ) : (
                            <Link to={"/sociedad-de-mejoras-y-ornato-bogota" + route}>{decodeURI(formattedPath).replace(/%20/g, " ")}</Link>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Breadcrumbs;