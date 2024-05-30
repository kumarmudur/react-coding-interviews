import MenuItem from './menu-item';

import './style.css';


const MenuList = ({ list = []}) => {
    return (
        <ul className="menu-list-container">
            {
                list && list.length ? 
                list.map(listItem => <MenuItem key={listItem} item={listItem} />) : null
            }
        </ul>
    );
};

export default MenuList;