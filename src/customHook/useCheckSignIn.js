import { useEffect, useState } from 'react';
import { checkSignIn } from '../api/api.auth';

export default function useCheckSignIn() {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    const fetchSignInStatus = async () => {
      const isSignedIn = await checkSignIn();
      setIsSignedIn(isSignedIn);
    };

    fetchSignInStatus();
  }, []);

  return isSignedIn;
}
