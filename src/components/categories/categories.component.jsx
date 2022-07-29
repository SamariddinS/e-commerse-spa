import CategoryItem from '../category-item/category-item.component';
import './categories.style.scss';

const Categories = ({ categories }) => (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
);

export default Categories;