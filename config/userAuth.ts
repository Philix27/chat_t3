import {
  useEffect,
  useState,
  useContext,
  createContext,
  FunctionComponent,
} from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import { initFirebase } from "./firebase";
import { removeTokenCookie, setTokenCookie } from "./tokenCookies";

// initFirebase();

interface IAuthContext {
  // user: firebase.User | null;
  logout: () => void;
  authenticated: boolean;
}

const AuthContext = createContext<IAuthContext>({
  // user: null,
  logout: () => null,
  authenticated: false,
});
