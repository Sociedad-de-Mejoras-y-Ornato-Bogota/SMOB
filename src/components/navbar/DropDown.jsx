import MenuItems from './MenuItems';

const DropDown = ({submens,dropdown,dephtlevel}) =>{
    dephtlevel=dephtlevel+1;
    const dropdownClass = dephtlevel>1 ? 'dropdown-submenu':"";

    return(
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {
                submens.map((submenu, index) =>(
                    <MenuItems items={submenu} key={index} dephtlevel={dephtlevel}/>
                ))
            }
        </ul>
    )
}
export default DropDown