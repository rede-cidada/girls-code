import React from 'react';

import PageOne from '../../components/PageOne';
import InternetPage from '../../components/InternetPage';
import ProfessionsPage from '../../components/ProfessionsPage';
import AreasPage from '../../components/AreasPage';


const Guia = () => {
    return (
        <div className="PageOne-Guia">
            <PageOne />
            <InternetPage />
            <ProfessionsPage />
            <AreasPage />
        </div>

    )
}

export default Guia;