import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu-items';

export function Menu({ options }: { options: aMenuItems }) {
    return;
    // return (
    //     <nav>
    //         <ul>
    //             {options.map((item) => (
    //                 <li key={item.label}>
    //                     <Link to={item.path}>
    //                         <h3>{item.label}</h3>
    //                     </Link>
    //                 </li>
    //             ))}
    //         </ul>
    //     </nav>
    // );
}
