import CategoryItem from '../category-item/category-item.component';

import './mainmenu.styles.scss';

const Mainmenu = ({ categories }) => {
    return (
        <div className='mainmenu-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div> 
    );
};

export default Mainmenu;