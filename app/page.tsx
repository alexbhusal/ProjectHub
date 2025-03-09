"use client";
import { useEffect, useState } from 'react';
import { auth } from "../utils/FireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';

const Home = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth,async (user:any) => {
      setUser(user);
      if (user) {
        router.push('/form'); // Redirect to dashboard if logged in
      } else {
        router.push('/login'); // Redirect to login if not logged in
      }
    });
    return () => unsubscribe();
  }, [router]);

};


export default Home;
