import { createContext, useContext, useState } from "react";
import type { Usuario } from "../interfaces/interfaces";
interface AuthContextType {
  user: Usuario | null;
  login: (user: Usuario) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });
  const login = (usuario: Usuario) => {
    sessionStorage.setItem("user", JSON.stringify(usuario));
    setUser(usuario);
  };

  const logout = () => {
    sessionStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
