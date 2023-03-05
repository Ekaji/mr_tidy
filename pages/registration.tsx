import React, { useReducer } from 'react'
import { setDoc, doc, collection, DocumentReference, DocumentData} from 'firebase/firestore';
import {db} from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    auth,
    // provider
} from '../firebaseConfig';
const Registration = () => {

    const initialState = {
        first_name: '',
        last_name: '',
        home_address: '',
        email_address: '',
        comment: '',
        phone_number: '',
        company: ''
    }

    const [formData, SetFormData] = useReducer(
        (currValue: any, newValue: any) => ({ ...currValue, ...newValue }), initialState
    )

    const { first_name, last_name, home_address, email_address, comment, phone_number, company } = formData
    
    function handleFormChange(e: any) {
        const { name, value } = e.target
        SetFormData({ [name]: value })
    }
    // console.log(formData)

    const [user]  = useAuthState(auth);

    
    const registrationRef: DocumentReference<DocumentData> = doc(db, 'user_registration', `${user?.uid}`)
    console.log(`${user?.uid}`)

    const registerUser = async () => {
        await setDoc(registrationRef, {
            user_id: user?.uid,
            first_name,
            last_name,
            home_address,
            email_address,
            comment,
            phone_number,
            company
        }).then(() => {
            console.log('success')
        }).catch((e) => {
            console.log(e.message)
        })
    }

    return (
    <div className='w-10/12 mx-auto pt-40'>      
        <form>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="first_name" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ first_name } onChange={ handleFormChange } placeholder=" " required />
                    <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="last_name" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ last_name } onChange={ handleFormChange } placeholder=" " required />
                    <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type='text' name="home_address" id="home_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ home_address } onChange={ handleFormChange } placeholder=" " required />
                <label htmlFor="home_address" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Home address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" name="email_address" id="email_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ email_address } onChange={ handleFormChange } placeholder=" " required />
                <label htmlFor="email_address" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="comment" name="comment" id="comment" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ comment } onChange={ handleFormChange } placeholder=" " required />
                <label htmlFor="comment" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">comment</label>
            </div>
          
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone_number" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ phone_number } onChange={ handleFormChange } placeholder=" " required />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={ company } onChange={ handleFormChange } placeholder=" " required />
                    <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">company (Ex. Google)</label>
                </div>
            </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                onClick={ registerUser }>Submit</button>
        </form>
    </div>  

  )
}

export default Registration