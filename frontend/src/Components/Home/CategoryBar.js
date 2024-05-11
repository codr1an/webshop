import "./CategoryBar.css"
const CategoryBar = () => {
    return (
      <div className="categories-bar">
        <a href="/phones" className="category">Phones</a>
        <a href="/tablets" className="category">Tablets</a>
        <a href="/laptops" className="category">Laptops</a>
        <a href="/tvs" className="category">TVs</a>
        <a href="/monitors" className="category">Monitors</a>
      </div>
    );
  };

  export default CategoryBar;