import React from 'react'
import Footer from '../componentes/Footer'
import { NavbarClient } from '../componentes/navbars/NavbarClient'

export const ClientHome = () => {
    return (
        <>
        <NavbarClient/>
            <div>
                <div>
                    <h3>hola mundo</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ab iure at possimus dolor voluptate atque dicta. Hic eius consectetur ipsam. Unde eos sunt eaque placeat ut doloremque vitae. Qui.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus earum error odio iure delectus corporis, assumenda quis porro. Aperiam, est recusandae! Nesciunt explicabo deserunt, esse natus impedit vero iste doloribus.</p>
                </div>
            </div>
        <Footer/>
        </>
    )
}
