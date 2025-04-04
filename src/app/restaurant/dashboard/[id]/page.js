'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Edit_fooditem = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [path, setPath] = useState('');
  const [description, setDescription] = useState('');
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    fetchItem();
  }, []); 

  const fetchItem = async () => {
    try {
      const response = await fetch(`/api/foods/edit/${id}`);
      const data = await response.json();

      if (data.success) {
        setName(data.result.name);
        setPrice(data.result.price);
        setPath(data.result.path);
        setDescription(data.result.description);
      }
    } catch (err) {
      console.error("Error fetching item:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !path || !description) {
      setInputError(true);
      return;
    }

    setInputError(false);

    const response = await fetch(`/api/foods/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, path, description }),
    });

    const result = await response.json();
    if (result.success) {
      
      alert('Item updated successfully!');
      router.push('../dashboard');
    } else {
      alert('Update failed');
    }
  };

  return (
    <div>
      <h1 className="display-6 text-center">Update Food Item</h1>
      <div className="container w-25">
        <div className="row mb-3 justify-content-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Food Name"
              className="mt-3 form-control"
            />
            {inputError && !name && <span style={{ color: 'red' }}>please enter item name</span>}

            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter Price"
              className="mt-3 form-control"
            />
            {inputError && !price && <span style={{ color: 'red' }}>please enter item price</span>}

            <input
              type="text"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              placeholder="Enter Path"
              className="mt-3 form-control"
            />
            {inputError && !path && <span style={{ color: 'red' }}>please enter item path</span>}

            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className="mt-3 form-control"
            />
            {inputError && !description && (
              <span style={{ color: 'red' }}>please enter item description</span>
            )}

            <button type="submit" className="mt-2 btn btn-success w-100">
              Update Food Item
            </button>
            <button
              onClick={() => router.push('../dashboard')}
              type="button"
              className="mt-2 btn btn-primary w-100"
            >
              Back To Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit_fooditem;
