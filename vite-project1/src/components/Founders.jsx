import React from 'react'
import './Founders.css';
import { Navbar } from '../navbar/Navbar';

export const Founders = () => {
    const founders = [
        { description: 'I am Aditya Bhatt, an AI Engineer. I design AI agents that can analyze your CSVs in seconds, eliminating the need for manual preparation or scripting. This allows teams to focus more on deriving insights and enhancing business performance rather than dealing with data.', 
            name: 'Aditya Bhatt', profession: 'AI Engineer' },
        { description: 'I am Shrutika, and I create interfaces that transform complex data into clear, actionable insights. My work ensures that anyone can easily explore filters, charts, and KPIs on any device, enhancing collaboration across your organization.', name: 'Shrutika Soni', profession: 'Frontend Developer' }
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
