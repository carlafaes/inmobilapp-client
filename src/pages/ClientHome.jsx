import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../componentes/Footer'
import { NavbarClient } from '../componentes/navbars/NavbarClient'
import { TablaHomeClient} from '../componentes/tablas/TablaHomeClient'

export const ClientHome = () => {


    return (
        < >
            <NavbarClient/>
                <div className="tabla-home">
                    <TablaHomeClient/>
                </div>
        </>
    )
}
