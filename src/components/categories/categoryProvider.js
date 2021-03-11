import React, { useState } from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState([]);

  const getCategories = () => {
    return fetch("http://localhost:8000/categories", {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then((res) => res.json())
      .then(setCategories);
  };

  const getCategory = (catId) => {
    return fetch(`http://localhost:8000/categories/${catId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    })
      .then(res => res.json())
      .then(setCategory);
  };

  const deleteCategory = (catId) => {
    return fetch(`http://localhost:8000/categories/${catId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
    }).then(getCategories);
  };

  const addCategory = (cat) => {
    return fetch("http://localhost:8000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(cat),
    }).then(getCategories);
  };

  const updateCategory = (newCat) => {
    return fetch(`http://localhost:8000/categories/${newCat.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("lu_token")}`,
      },
      body: JSON.stringify(newCat),
    }).then(getCategories);
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategories,
        category,
        setCategory,
        getCategory,
        addCategory,
        updateCategory,
        deleteCategory,
      }}
    >
      {props.children}
    </CategoryContext.Provider>
  );
};
