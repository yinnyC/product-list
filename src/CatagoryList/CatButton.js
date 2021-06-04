import React from 'react';

function CatButton(props) {
  const {
    name, count, className, onClick,
  } = props;
  return (
    <button
      type="button"
      key={name}
      className={className}
      onClick={onClick}
    >
      {name}
      <span>
        {count}
      </span>
    </button>
  );
}

export default CatButton;
