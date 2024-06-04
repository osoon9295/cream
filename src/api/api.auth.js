import bcrypt from 'bcryptjs';
import supabase from './api.supabase';

export const signUp = async (email, password, nickname) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: hashedPassword,
      options: {
        data: {
          nickname: nickname
        }
      }
    });

    if (signUpError) {
      console.log('Error:', signUpError);
      return;
    }
    console.log(signUpData);

    // const { user } = signUpData;
    const { data: memberData, error: memberError } = await supabase.from('member').insert([
      {
        user_id: email,
        user_pw: hashedPassword,
        user_name: nickname,
        user_imageSrc: ''
      }
    ]);

    if (memberError) {
      console.log('Error:', memberError);
      return;
    }

    console.log('signed up:', memberData);
  } catch (error) {
    console.log('error:', error);
  }
};

export const signIn = async (email, password) => {
  try {
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (signInError) {
      console.log('Error:', signInError);
      return;
    }

    console.log('Signed in:', signInData);
  } catch (error) {
    console.log('Error:', error);
  }
};

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log('Error:', error);
      return;
    }

    console.log('Signed out successfully');
  } catch (error) {
    console.log('Error:', error);
  }
};

export const getUser = async () => {
  try {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser();

    if (error) {
      console.log('Error:', error);
      return null;
    }

    console.log('User data:', user);
    return user;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};

// async function checkSignIn() {
//   const session = await supabase.auth.getSession();
//   const isSignIn = !!session.data.session;

//   setSignIn(isSignIn);
// }
