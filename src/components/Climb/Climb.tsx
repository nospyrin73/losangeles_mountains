import { Fragment, ReactElement, useState } from 'react';

import schedule from './schedule.json';

import './Climb.scss';

export function Climb(): ReactElement {
    const [active, setActive] = useState(0);

    return (
        <section className="climb">
            <header className="climb__header">
                <div className="marked">
                    <span className="marked__number">02.</span>
                    <span className="marked__title">climb</span>
                </div>
                <p className="climb__body-text">
                    Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue.
                </p>
            </header>
            <div className='climb__mountains'>
                <dl className="climb__navigation">
                    { schedule.map(({ title, image, content }, i) => (
                        <Fragment key={ i }>
                            <dt
                              className={ active === i ? 'active' : '' }
                              onClick={ () => setActive(i) }
                              key={ i }
                            >
                                { title }
                            </dt>
                            <dd
                              className={ `climb__content ${active === i ? 'active' : ''}` }
                              style={ { backgroundImage: `url(${image})` } }
                            >
                                <div className="climb__schedule">
                                    <h2>schedule</h2>
                                    <ul>
                                        { content.map(({ name, date }) => (
                                            <li key={ date }>
                                                <span>{ date }</span>
                                                <span>{ name }</span>
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                            </dd>
                        </Fragment>
                    )) }
                </dl>
                <div className="climb__dummy"></div>
            </div>
        </section>
    );
}
