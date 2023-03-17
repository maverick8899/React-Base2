import ReactPaginate from "react-paginate";

import "./TableUsers.scss";

const TableUsers = ({
  users,
  handleClickUpdateBtn = () => {},
  handleClickViewBtn = () => {},
  handleClickNextPage = () => {},
  getUser = () => {},
  pageCount,
}) => {
  //
  const handlePageClick = (event) => {
    handleClickNextPage(+event.selected + 1); //convert sang number
    console.log(`User requested page number ${event.selected + 1}`);
  };
  //
  return (
    <div>
      <table className="table table-border ">
        <thead>
          <tr className="table-info">
            <th scope="col">No</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => handleClickViewBtn(user)}
                >
                  View
                </button>
                <button
                  className="btn btn-outline-primary mx-3 btn-sm"
                  onClick={() => handleClickUpdateBtn(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => getUser(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount} //amount page
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default TableUsers;
