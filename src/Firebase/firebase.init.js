import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { getDatabase } from "firebase/database";

const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};
const app = initializeAuthentication();
export const db = getDatabase(app);

export default initializeAuthentication;
