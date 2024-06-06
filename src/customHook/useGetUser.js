import { useEffect, useState } from 'react';
import { checkSignIn, getUser } from '../api/api.auth';
import supabase from '../supabase';

export default function useGetUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchGetUserStatus = async () => {
      const isSignedIn = await checkSignIn();
      console.log(isSignedIn);
      if (isSignedIn) {
        const userData = await getUser();
        const { data } = await supabase.from('member').select('*').eq('user_id', userData.email);
        setUser(data);
      }
    };

    fetchGetUserStatus();
  }, []);
  return user;
}
