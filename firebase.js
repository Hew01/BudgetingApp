import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, where,query ,getDocs,updateDoc, getDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGjaDt6mnq7Yokox0wKBs6KotcGjrrDVs",
  authDomain: "budgetapp-a60a6.firebaseapp.com",
  projectId: "budgetapp-a60a6",
  storageBucket: "budgetapp-a60a6.appspot.com",
  messagingSenderId: "1053988743194",
  appId: "1:1053988743194:web:a74254600d4416a5c1c9a3",
  measurementId: "G-J4R67EZVST"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const createAccount = async (email, password, fullName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(auth.currentUser, {
      displayName: fullName
    });

    // Create a user document in Firestore
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, {
      email: user.email,
      fullName: fullName,
      tienmat: null
    });

    console.log('User account created:', user);
  } catch (error) {
    console.log('Error creating user account:', error);
    throw error;
  }
};

export const checkAndSetEmail = async (mathe, password) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('User not logged in');
    }
    const email = user.email;

    if (!email) {
      throw new Error('User email not found');
    }
    await updateEmailInWallet(mathe, password, email);
    await updateProfile(auth.currentUser, {
      email: email
    });

    return email;
  } catch (error) {
    console.log('Error checking and setting email:', error);
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
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

const updateEmailInWallet = async (mathe, password, email) => {
  try {
    const walletQuery = query(collection(db, 'wallet'), where('mathe', '==', mathe));
    const walletSnapshot = await getDocs(walletQuery);

    if (!walletSnapshot.empty) {
      const walletDocRef = doc(db, 'wallet', walletSnapshot.docs[0].id);
      await updateDoc(walletDocRef, { email: email });
      console.log('Email updated in wallet collection:', email);
    } else {
      throw new Error('Wallet not found');
    }
  } catch (error) {
    console.log('Error updating email in wallet collection:', error);
    throw error;
  }
};

export const updatePasswordFunction = async (currentPassword, newPassword) => {
  try {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
    console.log('Password updated successfully');
  } catch (error) {
    console.log('Error updating password:', error);
    throw error;
  }
};
export const getWalletInfo = async () => {
  try {
    const walletQuery = collection(db, 'wallet');
    const walletSnapshot = await getDocs(walletQuery);

    if (!walletSnapshot.empty) {
      // Assuming you want to retrieve the first wallet document
      const walletDoc = walletSnapshot.docs[0];
      return walletDoc.data();
    } else {
      throw new Error('Wallet not found');
    }
  } catch (error) {
    console.log('Error fetching wallet info:', error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const walletQuery = collection(db, 'users');
    const walletSnapshot = await getDocs(walletQuery);

    if (!walletSnapshot.empty) {
      // Assuming you want to retrieve the first wallet document
      const walletDoc = walletSnapshot.docs[0];
      return walletDoc.data();
    } else {
      throw new Error('Wallet not found');
    }
  } catch (error) {
    console.log('Error fetching wallet info:', error);
    throw error;
  }
};

export const checkAndSetTienmat = async (mathe) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error('User not logged in');
    }
    
    const email = user.email;

    if (!email) {
      throw new Error('User email not found');
    }

    const walletQuery = query(collection(db, 'users'), where('email', '==', email));
    const walletSnapshot = await getDocs(walletQuery);

    if (!walletSnapshot.empty) {
      const walletDocRef = doc(db, 'users', walletSnapshot.docs[0].id);
      await updateDoc(walletDocRef, { tienmat: mathe });
      console.log('Tienmat updated successfully:', mathe);
    } else {
      throw new Error('User not found in the "users" collection');
    }
    await updateProfile(user, {
      email: email
    });
    return email;
  } catch (error) {
    console.log('Error checking and setting email:', error);
    throw error;
  }
};
export const getTienMat = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userQuery = query(collection(db, 'users'), where('email', '==', user.email));
      const userSnapshot = await getDocs(userQuery);

      if (!userSnapshot.empty) {
        const userData = userSnapshot.docs[0].data();
        const tienMatValue = userData.tienmat;
        // Sử dụng giá trị tienmat ở đây
      }
    } else {
      console.log('Người dùng chưa đăng nhập');
    }
  } catch (error) {
    console.log('Lỗi khi truy xuất giá trị tienmat:', error);
  }
};
export { auth, createAccount, login, updateProfile, signOut, updateEmailInWallet};
export { db };