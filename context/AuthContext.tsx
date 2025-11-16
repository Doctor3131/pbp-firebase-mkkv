import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, loginUser, registerUser } from '../data/userStore'; // Import your existing user logic

interface AuthContextType {
  session: User | null;
  isLoading: boolean;
  signIn: (name: string, pass: string) => Promise<void>;
  signOut: () => void;
  register: (name: string, nim: string, pass: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const authValue: AuthContextType = {
    signIn: async (name, password) => {
      const user = loginUser(name, password);

      if (user) {
        setSession(user);
      } else {
        throw new Error('Invalid name or password.');
      }
    },
    register: async (name, nim, password) => {
      const user = registerUser(name, nim, password);

      if (user) {
        return;
      } else {
        throw new Error('A user with this name already exists.');
      }
    },
    signOut: () => {
      setSession(null);
    },
    session,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}
