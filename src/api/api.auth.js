import bcrypt from 'bcryptjs';
import { apiImg } from './api.img';
import supabase from './api.supabase';

export const signUp = async (email, password, nickname, img) => {
  try {
    const imageSrc = await apiImg(img);

    const hashedPassword = await bcrypt.hash(password, 10);
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          nickname: nickname,
          imageSrc: imageSrc
        }
      }
    });

    if (signUpError) {
      console.log('Error:', signUpError);
      return;
    }

    console.log(signUpData);

    const { data: memberData, error: memberError } = await supabase.from('member').insert([
      {
        user_id: email,
        user_pw: hashedPassword,
        user_name: nickname,
        user_imageSrc: imageSrc
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

export const checkEmailDuplicate = async (email) => {
  const { data, error } = await supabase.from('member').select('id').eq('user_id', email).single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error checking email:', error);
    throw error;
  }

  return !!data; // 중복이 있으면 true, 없으면 false 반환
};

export const checkNicknameDuplicate = async (nickname) => {
  const { data, error } = await supabase.from('member').select('id').eq('user_name', nickname).single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error checking nickname:', error);
    throw error;
  }

  return !!data; // 중복이 있으면 true, 없으면 false 반환
};

export const checkSignIn = async () => {
  const session = await supabase.auth.getSession();
  const isSignIn = !!session.data.session;
  console.log(session.data, isSignIn);
  return isSignIn;
};
