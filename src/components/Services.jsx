import { Component } from 'react';

import Title from './Title';
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktails',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, quam.',
            },
            {
                icon: <FaHiking />,
                title: 'Endless Hiking',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, quam.',
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, quam.',
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, quam.',
            },
        ],
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{service.icon}</span>
                                <h6>{service.title}</h6>
                                <p>{service.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
