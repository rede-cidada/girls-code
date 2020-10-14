import React, { useEffect } from 'react';

import PageOne from '../../components/PageOne';
import InternetPage from '../../components/InternetPage';
import ProfessionsPage from '../../components/ProfessionsPage';
import AreasPage from '../../components/AreasPage';
import Logica from '../../components/Logica';
import Cursos from '../../components/cursos';


const Guia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="PageOne-Guia">
            <PageOne />
            <InternetPage />
            <ProfessionsPage />
            <AreasPage />
            <Logica />
            <Cursos />
        </div>

    )
}

export default Guia;