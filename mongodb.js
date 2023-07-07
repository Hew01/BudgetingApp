const admin = require('firebase-admin');
const mongoose = require('mongoose');

// Kết nối với Firebase
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Thay thế bằng đường dẫn đến tệp serviceAccountKey.json của bạn

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firebaseDB = admin.firestore();

// Kết nối với MongoDB
const mongoDBURL = 'mongodb://localhost:27017/budgeting'; // Thay thế URL kết nối của bạn tại đây

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  // Truy vấn dữ liệu từ Firebase
  firebaseDB.collection('users').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const userData = doc.data();

      // Chuyển đổi dữ liệu từ Firebase thành dữ liệu MongoDB
      const user = new User({
        userId: userData.userId,
        // Các trường thông tin người dùng khác
      });

      // Lưu dữ liệu vào MongoDB
      user.save().then(() => {
        console.log('User saved to MongoDB:', user);
      }).catch((error) => {
        console.log('Error saving user to MongoDB:', error);
      });
    });
  }).catch((error) => {
    console.log('Error querying Firebase:', error);
  });
}).catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});
