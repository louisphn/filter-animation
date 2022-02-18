import { useCallback } from "react";

const Filter = ({ popular, setFiltered, active, setActive }) => {
  const categories = [
    {
      label: "All",
      id: 0,
    },
    {
      label: "Comedy",
      id: 35,
    },
    {
      label: "Action",
      id: 28,
    },
  ];

  const handleClick = useCallback(
    (category) => {
      setActive(category.id);
      const filteredData =
        category.id === 0
          ? popular
          : popular.filter((movie) => movie.genre_ids.includes(category.id));
      setFiltered(filteredData);
    },
    [popular, setActive, setFiltered]
  );

  return (
    <div className="filter-container">
      {categories.map((category) => (
        <button
          key={category.id}
          className={active === category.id ? "active" : null}
          onClick={() => handleClick(category)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
