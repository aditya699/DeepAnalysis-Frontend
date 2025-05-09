import React from 'react'
import './Founders.css';
import { Navbar } from '../navbar/Navbar';

export const Founders = () => {
    const founders = [
        { description: 'Our AI agents analyze your CSVs in seconds no manual prep or scripting required so teams spend less time wrestling with data and more time acting on insights and business performance.', 
            name: 'Aditya Bhatt', profession: 'AI Engineer' },
        { description: 'The web-based dashboard lets anyone explore filters, charts and KPIs on any device, turning complex data into clear decisions and boosting collaboration across your organization.', name: 'Shrutika Soni', profession: 'Frontend Developer' }
    ];
    return (

        <>
            <Navbar />
            <section className="founders-section">
                <h2 className="founders-heading">Meet Our Founders</h2>
                <div className="founders-container">
                    {founders.map(founder => (
                        <div key={founder.name} className="founder-card">
                            
                            <p className="founder-description">{founder.description}</p>
                            <br/>
                            <h3 className="founder-name">{founder.name}</h3>
                            <p className="founder-profession">{founder.profession}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
