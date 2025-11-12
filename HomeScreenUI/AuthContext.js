import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { getUserSession, clearUserSession } from '../utils/session';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading while checking session

  useEffect(() => {
    const checkSession = async () => {
      try {
        const storedUser = await getUserSession(); // Retrieve user from AsyncStorage
        if (storedUser) {
          setUser(storedUser); // Auto-login if session exists
          console.log('Auto-login successful:', storedUser);
        }
      } catch (error) {
        console.log('Error retrieving user session:', error);
      } finally {
        setLoading(false); // Stop loading screen
      }
    };

    checkSession();

    // Optional: Keep Firebase auth listener in case of changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('Firebase auth state changed:', currentUser ? `User: ${currentUser.uid}` : 'No user');
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      await clearUserSession(); // Clear AsyncStorage session
      setUser(null);
      console.log('Logout successful');
    } catch (error) {
      console.log('Logout error:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
