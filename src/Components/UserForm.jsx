import { nanoid } from "nanoid";
import { users, user } from "../Signals/Store";
export function UserFrom() {
  const createOrUpdate = (e) => {
    e.preventDefault();
    if (user.value._id === "") {
      users.value = [
        ...users.value,
        {
          ...user.value,
          _id: nanoid(8),
        },
      ];
    } else {
      users.value = users.value.map((u) => {
        if (u && u._id === user.value._id) {
          return user.value;
        } else {
          return u;
        }
      });
    }
    user.value = {
      _id: "",
      name: "",
      email: "",
      password: "",
    };
  };
  const setUser = (e) => {
    user.value = {
      ...user.value,
      [e.target.name]: e.target.value,
    };
  };
  return (
    <>
      <div>
        <form onSubmit={createOrUpdate} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                name="name"
                onChange={setUser}
                value={user.value.name}
                className="appearance-none block w-full bg-gray-200 text-gray-700 
      border border-red-500 rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                name="email"
                onChange={setUser}
                value={user.value.email}
                className="appearance-none block w-full bg-gray-200 text-gray-700
       border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                name="password"
                onChange={setUser}
                value={user.value.password}
                className="appearance-none block w-full
       bg-gray-200 text-gray-700 border border-gray-200 rounded 
       py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Button
          </button>
        </form>
      </div>
    </>
  );
}
