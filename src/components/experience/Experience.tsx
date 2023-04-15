import { BsPatchCheckFill } from 'react-icons/bs';
import { dataExperienceBackend, dataExperienceFrontend } from '../../utils/api';

import './experience.css';

export const Experience = () => {

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Depelopment</h3>
          <div className='experience__content'>
            {
              dataExperienceFrontend.map(({id, technology, level}) => {
                return(
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{technology}</h4>
                      <small className='text-light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Depelopment</h3>
          <div className='experience__content'>
            {
              dataExperienceBackend.map(({id, technology, level}) =>{
                return(
                  <article key={id} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>{technology}</h4>
                      <small className='text-light'>{level}</small>
                    </div>
                  </article>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};
