import { users, user } from "../Signals/Store";

export function UserTable() {
  //   const setUser = (u) => {
  //     users.value = u;
  //   };
  const deleteUser = (id) => {
    users.value = users.value.map((i) => {
      if (id !== i._id) {
        return i;
      }
    });
  };
  return (
    <>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Name</th>
            <th className="w-1/4 px-4 py-2">Email</th>
            <th className="w-1/4 px-4 py-2">Password</th>
            <th className="w-1/4 px-4 py-2">Edit</th>
            <th className="w-1/4 px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.value.map((u) => {
            return (
              u && (
                <tr>
                  <td className="border px-4 py-2">{u.name}</td>
                  <td className="border px-4 py-2">{u.email}</td>
                  <td className="border px-4 py-2">{u.password}</td>

                  <td className="border px-4 py-2">
                    <button
                      onClick={() => (user.value = u)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => deleteUser(u._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </>
  );
}
