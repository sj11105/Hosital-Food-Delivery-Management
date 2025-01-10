export default function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded mt-4"
    >
      Logout
    </button>
  );
}
