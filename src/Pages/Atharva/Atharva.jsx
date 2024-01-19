import React from 'react';
import ProjectsBanner from '../../Components/ProjectsBanner/ProjectsBanner';
import ContactUs from '../Home/ContactUs';
import Amenities from './Amenities';
import ProjectContents from './ProjectContents';
import Facilities from './Facilities';
import ProjectsFAQs from '../../Components/ProjectsFAQs/ProjectsFAQs';
import { atharvaFAQs } from './AtharvaFAQs';

const Atharva = () => {
    return (
        <div>
            <ProjectsBanner />
            <ProjectContents />
            <Facilities />
            <Amenities />
            <ContactUs />
            <ProjectsFAQs faqs={atharvaFAQs} />
        </div>
    );
};

export default Atharva;