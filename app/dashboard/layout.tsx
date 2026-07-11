"use client";

import { router } from "next/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
      return;
    }

    const currentUser = JSON.parse(storedUser);

    setUser(currentUser);

    const adminRoutes = [
      "/dashboard/users",
      "/dashboard/manage-foods",
      "/dashboard/analytics",
    ];

    if (
      currentUser.role !== "admin" &&
      adminRoutes.includes(pathname)
    ) {
      router.push("/unauthorized");
    }
  }, [pathname, router]);

  return (
    <div className="min-h-screen flex bg-slate-100">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="
    md:hidden
    fixed
    top-24
    left-4
    z-50
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-lg
  "
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`
    fixed
    md:static
    top-0
    left-0
    z-40
    min-h-screen
    w-72
    bg-slate-900
    text-white
    shadow-2xl
    transform
    transition-transform
    duration-300
    ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }
    md:translate-x-0
  `}
      >

        <div className="border-b border-slate-800 p-6">

          <h1 className="text-3xl font-bold text-blue-500">
            FoodieHub
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            {user?.role === "admin"
              ? "Admin Panel"
              : "User Dashboard"}
          </p>

        </div>

        <nav className="p-5 space-y-3">

          <Link
            href="/dashboard"
            className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
          >
            🏠 Dashboard
          </Link>

          {user?.role === "admin" ? (
            <>
              <Link
                href="/dashboard/manage-foods"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                🍔 Manage Foods
              </Link>

              <Link
                href="/dashboard/users"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                👥 Manage Users
              </Link>

              <Link
                href="/dashboard/add-food"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                ➕ Add Food
              </Link>

              <Link
                href="/foods"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                🍽 All Foods
              </Link>

              <Link
                href="/dashboard/analytics"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                📊 Analytics
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard/my-foods"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                🍔 My Foods
              </Link>

              <Link
                href="/dashboard/add-food"
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                ➕ Add Food
              </Link>

              <Link
                  href="/foods"
                  
                className="block rounded-xl px-5 py-3 bg-slate-800 hover:bg-blue-600 transition"
              >
                🍽 All Foods
              </Link>
            </>
          )}

        </nav>

      </aside>

      {/* Main Content */}
      <main
        className="
    flex-1
    bg-slate-950
    overflow-y-auto
    md:ml-0
    w-full
    p-4
    md:p-8
  "
      >
        {children}
      </main>

    </div>
  );
}