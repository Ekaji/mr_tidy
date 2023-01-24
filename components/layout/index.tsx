import NavBar from './navbar'
import Head from 'next/head'
import og from '../public/og.jpg'

interface ChildrenProps {
    children: string | JSX.Element | JSX.Element[]
}


export default function Layout({children} : ChildrenProps ) {
    return(
        <>
 
            <NavBar />
                { children }
        </>
    )
}