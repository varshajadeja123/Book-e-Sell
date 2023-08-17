import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import shared from "../../utils/shared";
import { RoutePaths } from "../../utils/enum";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const initialUserValue = {
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  roleId: 0,
  role: "",
  password: "",
};

const initialState = {
  setUser: () => {},
  user: initialUserValue,
  logOut: () => {},
  appInitialize: false,
};

export const authContext = createContext(initialState);

export const AuthWrapper = ({ children }) => {
  const [appInitialize, setAppInitialize] = useState(false);
  const [user, _setUser] = useState(initialUserValue);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const setUser = (user) => {
    console.log("bruce@wayne2.com", user);
    localStorage.setItem(shared.LocalStorageKeys.USER, JSON.stringify(user));
    _setUser(user);
  };

  useEffect(() => {
    const itemStr =
      JSON.parse(localStorage.getItem(shared.LocalStorageKeys.USER)) ||
      initialUserValue;
    // if the item doesn't exist, return null
    if (!itemStr.id) {
      navigate(`${RoutePaths.Login}`);
    }
    _setUser(itemStr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = () => {
    setUser(initialUserValue);
    localStorage.removeItem(shared.LocalStorageKeys.USER);
    navigate(`${RoutePaths.Login}`);
  };

  useEffect(() => {
    if (pathname === RoutePaths.Login && user.id) {
      navigate(RoutePaths.BookListing);
    }

    if (!user.id) {
      return;
    }
    const access = shared.hasAccess(pathname, user);
    if (!access) {
      toast.warning("Sorry, you are not authorized to access this page");
      navigate(RoutePaths.BookListing);
      return;
    }
    setAppInitialize(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, user]);

  let value = {
    user,
    setUser,
    logOut,
    appInitialize,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(authContext);
};


















// import { createContext, useContext, useEffect, useState } from "react";
// import shared from "../../utils/shared";
// import { useLocation, useNavigate } from "react-router-dom";
// import { RoutePaths } from "../../utils/enum";
// import { toast } from "react-toastify";

// const initialUserValues = {
//     id: 0,
//     email: 0,
//     firstName:"",
//     lastName:"",
//     roleId:0,
//     role:"",
//     password:"",
// };

// const initialValues = {
//     setUser: () => { },
//     user: initialUserValues,
//     logOut: () => { },
//     appInitialize: false,
// }

// const authContext = createContext(initialValues)

// export const AuthWrapper = ({ children })=>{
//     const [appInitialize, setAppInitialize] = useState(false);
//     const [user, _setUser] = useState(initialUserValues);

//     const navigate = useNavigate();
//     const { pathname } = useLocation();

//     const setUser=(userDetails) => {
//         _setUser(userDetails)
//         localStorage.setItem(shared.LocalStorageKeys.USER, JSON.stringify(userDetails))
//     };

//     useEffect(()=>{
//         const existingUser = JSON.parse(localStorage.getItem(shared.LocalStorageKeys.USER)) || initialUserValues

//         if(!existingUser.id){
//             navigate(RoutePaths.Login);
//         }
//         _setUser(existingUser);
//     }, []);

//     useEffect(()=>{
//         if(!user.id){
//             navigate(RoutePaths.Login);
//         }else{
//             const hasAccess = shared.hasAccess(pathname, user.roleId)
//             if(!hasAccess){
//                 navigate(RoutePaths.BookListing)
//                 toast.error("You don't have access of this page.")
//             }
//         }
//         setAppInitialize(true);
//     },[pathname, user]);

//     const logOut =()=>{
//         _setUser(initialUserValues);
//         localStorage.removeItem(shared.LocalStorageKeys.USER);
//         navigate(`${RoutePaths.Login}`);
//     }

//     return <authContext.Provider value={{
//         user,
//         setUser,
//         logOut,
//         appInitialize,
//     }}>{ children }</authContext.Provider>
// };

// export const useAuthContext = ()=>{
//     return useContext(authContext)
// };
