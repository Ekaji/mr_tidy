import NavBar from './navbar'
import Head from 'next/head'
import og from '../public/og.jpg'
import Footer from './footer'

interface ChildrenProps {
    children: string | JSX.Element | JSX.Element[]
}


export default function Layout({children} : ChildrenProps ) {
    return(
        <>
 
            <NavBar />
                { children }
            <Footer />    
        </>
    )
}