import "./TableUsers.scss";

const TableUsers = ({
  users,
  handleClickUpdateBtn = () => {},
  handleClickViewBtn = () => {},
  getUser = () => {},
}) => {
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
    </div>
  );
};

export default TableUsers;
