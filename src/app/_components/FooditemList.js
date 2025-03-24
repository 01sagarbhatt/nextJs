const FooditemList = () => {
  return (
    <div>
      <div>
        <h1 className="display-6">Item List</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Path</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pizza</td>
              <td>120</td>
              <td>http://localhost:3000/restaurant/dashboard</td>
              <td>I LOVE PIZZA</td>
              <td>---------</td>
          <td>
                    <button className="btn btn-primary">Edit</button>                                                              
                    <button className="btn btn-danger ms-2">Delete</button>                                                              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FooditemList;
