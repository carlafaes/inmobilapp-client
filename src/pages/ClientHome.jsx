import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../componentes/Footer'
import { NavbarClient } from '../componentes/navbars/NavbarClient'
import { toast } from 'react-toastify'

export const ClientHome = () => {
    const notify = () => toast.success("Welcome!", {
        icon: "👋",
        theme: "dark"
    });

    useEffect(() => {
        notify()
    }, [])

    return (
        <>
        <NavbarClient/>
        <div >
            <div>
                tablas
            </div>
        </div>
        <Footer/>
        </>
    )
}
