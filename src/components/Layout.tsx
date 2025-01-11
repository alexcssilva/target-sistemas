import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-red-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Target Sistemas - Desafios</h1>
          <Link
            to="/"
            className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            Voltar ao Menu
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
