import React from 'react';

import PageOne from '../../components/PageOne';
import InternetPage from '../../components/InternetPage';
import ProfessionsPage from '../../components/ProfessionsPage';
import AreasPage from '../../components/AreasPage';
import Logica from '../../components/Logica';
import Cursos from '../../components/Cursos';


const Guia = () => {
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