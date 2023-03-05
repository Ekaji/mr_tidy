/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import dynamic from "next/dynamic";
import {
    auth,
    // provider
} from '../../firebaseConfig';
// import { signInWithPopup } from 'firebase/auth'
import { Dispatch, SetStateAction, useState } from 'react';

import { useRouter } from 'next/router';

let message = ''

interface AuthProps {
  email: string;
  password: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

console.log(auth)

const signUp = async ( email: string, password: string , setMessage: { (value: SetStateAction<string>): void; (arg0: string): void; }) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password); 
        setMessage('success')
        
    } catch (error: any) {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
            setMessage('this user exists, please sign in instead')
        } else {
            setMessage('an error occurred! please try after sometime')
        }
    }

};

const signIn = async ( email: string, password: string, setMessage: { (value: SetStateAction<string>): void; (arg0: string): void; } ) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('Success!')

    } catch (error : any) {
        if (error.message == 'Firebase: Error (auth/user-not-found).') {
            setMessage('this user does not exist! please signUp')
        } else {
            setMessage(`an error occurred! please try after sometime ${error.message}`)
            
        }
    }
};

// const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).catch((error) => alert(error.message));
// };

const logout = () => {
    signOut(auth);
};

const CurrentUser = () => {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    const [showSelectedAuth, setshowSelectedAuth] = useState(true)
    const [popUpmessage, setPopUpMessage] = useState('')


    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const handleValueChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        // e.preventDefault
        setValue((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    if (loading) {
        return (
            <div className='pt-28'>
                <p>Initialising User...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className='pt-28'>
                <p>Error: `${error.message}`</p>
            </div>
        );
    }
    if (user) {
        // router.push('/registrationForm');
        console.log(user)
        return (
            <div className='pt-28'>
                <p>Current User: {
                    user.email
                }</p>
                <button onClick={logout}>Log out</button>
            </div>
        );
    }


        return (
            <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
  
                <div className="flex shadow-md">
                    {/* <!-- Login form --> */}
                    <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{ width: '24rem', height: '32rem' }}>
                    <div className="card transition-all h-auto p-4 w-96 relative bg-white rounded-lg">
                    <div className="user h-full w-full flex">
                        {
                        showSelectedAuth ? (
                            <div className="signup w-full transition-all">
   
                                <div className="relative">
                                    <input className="text-sm border border-indigo-100 px-2 rounded-lg w-full h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="text" name='email' value={value.email} placeholder="example@mail.com" onChange={ handleValueChange } />
                                    <span className="text-gray-800 text-sm absolute top-2 left-0" >Email</span>
                                </div>
                                <div className="relative">
                                    <input className="signup_pass text-sm border border-indigo-100 px-2 rounded-lg w-full pr-12 h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="password" name='password' value={value.password} onChange={ handleValueChange } placeholder="at least 8 characters"/>
                                    <span className="text-gray-800 text-sm absolute top-2 left-0">Password</span>
                                    <span className=" text-gray-800 h-6 cursor-pointer bg-gray-100 flex justify-center items-center absolute right-3 top-10 w-6 border border-gray-400 rounded-full ">
                                        <i className="signup_eye fa fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className=" mt-5 flex gap-2">
                                        <p className='text-red-600'>{ popUpmessage }</p>
                                </div>
                                <button className="signup_btn mt-5 h-12 w-full outline-none bg-blue-500 rounded-lg text-sm text-white hover:bg-blue-600 transition-all"
                                    onClick={() => signUp( value.email, value.password, setPopUpMessage )} >Sign up</button>
                                <hr className="mt-5"/>
                                
                                <div className="mb-3">
                                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                                    <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt='google icon' />
                                    Sign up with Google
                                  </button>
                                </div>

                                <p className="text-sm text-center text-gray-800 mt-6">Already have an account?
                                    <br/>
                                    <a className="login_page text-blue-600 cursor-pointer"
                                        onClick={
                                            () => setshowSelectedAuth(!showSelectedAuth)
                                    }>Log in</a>
                                </p>
                                
                                
                                
                            </div>
                        ) : (
                            <div className="signin w-full transition-all">
                                
                                <div className="relative">
                                            <input className="text-sm border border-indigo-100 px-2 rounded-lg w-full h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="text" placeholder="example@mail.com" name='email' value={value.email} onChange={ handleValueChange } />
                                    <span className="text-gray-800 text-sm absolute top-2 left-0">
                                        Email</span>
                                </div>
                                <div className="relative">
                                    <input className="login_pass text-sm border border-indigo-100 px-2 rounded-lg w-full pr-12 h-12 mt-7 transition-all focus:border-blue-400 outline-none" type="password" placeholder="at least 8 characters" name='password' value={value.password} onChange={ handleValueChange }/>
                                    <span className="text-gray-800 text-sm absolute top-2 left-0">Password</span>
                                    <span className="text-gray-800 h-6 cursor-pointer bg-gray-100 flex justify-center items-center absolute right-3 top-10 w-6 border border-gray-400 rounded-full ">
                                        <i className="login_eye fa fa-eye-slash"></i>
                                    </span>
                                </div>
                                <div className=" mt-5 flex gap-2">
                                    
                                            <p className='text-red-600'>{ popUpmessage}</p>
                                    {/* <p className="text-sm text-gray-700">Remember Me</p> */} </div>
                                <button className="signin_btn mt-5 h-12 w-full outline-none bg-blue-500 rounded-lg text-sm text-white hover:bg-blue-600 transition-all"
                                    onClick={() => signIn( value.email, value.password, setPopUpMessage )} >Log in</button>
                                
                                <hr className="mt-5"/>

                                <div className="mb-3">
                                  <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                                    <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt='google icon' />
                                    Sign in with Google
                                  </button>
                                </div>

                                <p className="text-sm text-center text-gray-800 mt-6">
                                    {`Don't have an account? `}<br/>
                                    <a className="signup_page text-blue-600 cursor-pointer"
                                        onClick={
                                            () => setshowSelectedAuth(!showSelectedAuth)
                                    }>Sign up</a>
                                </p>
                            </div>
                        )
                    } </div>
                </div>
                    </div>

                    {/* <!-- Login banner --> */}
                    <div className="flex flex-wrap content-center justify-center rounded-r-md" style={{ width: '24rem', height: '32rem' }}>
                        <img className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://i.imgur.com/9l1A4OS.jpeg" />
                    </div>

                </div>

                {/* <!-- Credit --> */}
                <div className="mt-3 w-full">
                    <p className="text-center">Made by <a target="_blank" href="https://www.instagram.com/_inubayuaji/" className="text-purple-700" rel="noreferrer">Inu Bayu Aji</a> and ispired by <a target="_blank" href="https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI" className="text-purple-700" rel="noreferrer">this</a>.</p>
                </div>
            </div>
        )
    }

export default CurrentUser