// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBlbdlxp30lzlLaldIq62HRpJhHqlTMDL4",
  authDomain: "appt-ac877.firebaseapp.com",
  projectId: "appt-ac877",
  storageBucket: "appt-ac877.appspot.com",
  messagingSenderId: "225961154918",
  appId: "1:225961154918:web:fdced675880b955c6410a7",
  measurementId: "G-RMS0E2MWV8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createAccount = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Tài khoản người dùng được tạo thành công
    const user = userCredential.user;
    await updateProfile(auth.currentUser, {
      displayName: fullName
    });
    console.log('User account created:', user);
  } catch (error) {
    console.log('Error creating user account:', error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Người dùng đăng nhập thành công
    const user = userCredential.user;
    console.log('User logged in:', user);
    return user;
  } catch (error) {
    console.log('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log('Error logging out:', error);
  }
};

export { auth, createAccount, login,updateProfile, signOut };
