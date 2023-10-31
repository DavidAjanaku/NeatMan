import React, { useState } from 'react';
import Button from '../Button';
import Sidebar from './Sidebar';

export default function EditCategories() {
  const [newCategory, setNewCategory] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [existingCategories, setExistingCategories] = useState([
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
    // Add more categories as needed
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleEditedCategoryChange = (categoryId, value) => {
    setEditedCategory(value);
  };

  const saveNewCategory = (e) => {
    e.preventDefault(); // Prevent the form from submitting and page refreshing
    const newCategoryObject = { id: existingCategories.length + 1, name: newCategory };
    setExistingCategories([...existingCategories, newCategoryObject]);
    setNewCategory('');

    // Log the new category to the console
    console.log('New Category Added:', newCategoryObject);
  };

  const saveEditedCategory = (categoryId) => {
    setExistingCategories((categories) =>
      categories.map((category) =>
        category.id === categoryId ? { ...category, name: editedCategory } : category
      )
    );
    setEditedCategory('');
  };

  const openDeleteConfirmation = (categoryId) => {
    setCategoryToDelete(categoryId);
    setShowDeleteModal(true);
  };

  const closeDeleteConfirmation = () => {
    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  const deleteCategory = () => {
    if (categoryToDelete !== null) {
      setExistingCategories(existingCategories.filter((category) => category.id !== categoryToDelete));
      closeDeleteConfirmation();
    }
  };

  return (
    <div className="flex">
      <div className="sidebar bg-gray-200 w-1/4 border border-gray-300 h-[100vh]">
        <Sidebar />
      </div>
      <div className="main-content flex-1 bg-white h-[100vh] overflow-scroll p-4">
        <section className="in-page__cell bg-slate-200 rounded-lg shadow-lg p-4">
          <h1>Edit Categories</h1>
          <div className="mb-4">
            <form onSubmit={saveNewCategory}>
              <label className="block text-gray-700 font-semibold">New Category:</label>
              <input
                type="text"
                className="border rounded w-full p-2"
                value={newCategory}
                onChange={handleNewCategoryChange}
                required
              />
              <div>
                <Button text="Save New Category" type="submit" />
              </div>
            </form>
          </div>
          {existingCategories.map((category) => (
            <div key={category.id}>
              <input
                type="text"
                className="border rounded w-full p-2"
                value={category.name}
                onChange={(e) => handleEditedCategoryChange(category.id, e.target.value)}
              />
              <Button text="Save" onClick={() => saveEditedCategory(category.id)} />
              <Button text="Delete" onClick={() => openDeleteConfirmation(category.id)} />
            </div>
          ))}
        </section>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay">
            <div className="bg-slate-400 p-4 rounded-lg shadow-md">
              <p className="mb-4">Are you sure you want to delete this category?</p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 mr-2"
                  onClick={deleteCategory}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2"
                  onClick={closeDeleteConfirmation}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
