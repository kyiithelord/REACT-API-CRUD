import React from "react";

const List = ({ course: { id, title, fee, studentCount, status } }) => {
  return (
    <div className="bg-gray-400 border-2 p-5 mb-3 flex">
      <div>
        <p>
          {title} ({fee})
        </p>
      </div>
    </div>
  );
};

export default List;
