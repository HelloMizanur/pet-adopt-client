"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api, endpoints } from "./api";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const { data } = await api.get(endpoints.me);
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = async (email, password) => {
    const { data } = await api.post(endpoints.login, { email, password });
    setUser(data.user);
    return data.user;
  };

  const register = async (payload) => {
    const { data } = await api.post(endpoints.register, payload);
    setUser(data.user);
    return data.user;
  };

  const logout = async () => {
    await api.post(endpoints.logout);
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, loading, login, register, logout, refresh }}>
      {children}
    </AuthCtx.Provider>
  );
}

export const useAuth = () => useContext(AuthCtx);
