import { Link } from "react-router-dom";

function Sidebar() {

  const adminName = localStorage.getItem("adminName") || "Admin";

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="w-1/5 bg-slate-900 text-white flex flex-col justify-between p-6">

      <div>

        <h2 className="text-xl font-semibold mb-10">
          Hi, {adminName}
        </h2>

        <nav className="flex flex-col gap-5">

          <Link to="/admin/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>

          <Link to="/admin/products" className="hover:text-blue-400">
            Products
          </Link>

          <Link to="/admin/orders" className="hover:text-blue-400">
            Orders
          </Link>

          <Link to="/admin/users" className="hover:text-blue-400">
            Users
          </Link>

        </nav>

      </div>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 p-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Sidebar;