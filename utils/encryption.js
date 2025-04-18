import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY || 'your-secret-key';

export const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decrypt = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const hashPassword = (password) => {
  return CryptoJS.SHA256(password).toString();
};

export const generateToken = () => {
  return CryptoJS.lib.WordArray.random(16).toString();
};

export const encryptObject = (obj) => {
  const text = JSON.stringify(obj);
  return encrypt(text);
};

export const decryptObject = (ciphertext) => {
  const text = decrypt(ciphertext);
  try {
    return JSON.parse(text);
  } catch (error) {
    console.error('Error decrypting object:', error);
    return null;
  }
}; 