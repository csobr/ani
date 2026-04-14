import {initializeApp, FirebaseOptions, getApp, FirebaseApp} from 'firebase/app';
import {getAuth, Auth} from 'firebase/auth';
import {getDatabase, Database} from 'firebase/database';

let config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MSG_SENDER_ID,
  appId: process.env.APP_ID,
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

let _app: FirebaseApp | undefined;
let _auth: Auth | undefined;
let _db: Database | undefined;

function getFirebaseApp() {
  if (!_app) _app = createFirebaseApp(config);
  return _app;
}

export const auth = new Proxy({} as Auth, {
  get(_, prop) {
    if (!_auth) _auth = getAuth(getFirebaseApp());
    return (_auth as any)[prop];
  },
});

export const db = new Proxy({} as Database, {
  get(_, prop) {
    if (!_db) _db = getDatabase(getFirebaseApp());
    return (_db as any)[prop];
  },
});
