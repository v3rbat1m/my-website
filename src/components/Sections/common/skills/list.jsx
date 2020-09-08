import React from "react";

const List = ({
  currentType,
  onTypeChange,
  onPageChange,
  types,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {types.map((type) => (
        <button
          onClick={() => {
            onPageChange(1);
            onTypeChange(type);
          }}
          className={
            type === currentType
              ? " list-group-item list-group-item-dark list-group-item-action active"
              : " list-group-item list-group-item list-group-item-action"
          }
          key={type[valueProperty]}
        >
          {type[textProperty]}
        </button>
      ))}
    </ul>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default List;
