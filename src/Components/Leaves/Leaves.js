import React from 'react';
import './Leaves.css';
import leaves1 from './leaves1.png';
import leaves2 from './leaves2.png';
import leaves3 from './leaves3.png';
import leaves4 from './leaves4.png';

const Leaves = () => {
    return (
        <section>
            <div className='set'>
                <div><img src={leaves1} alt=""/></div>
                <div><img src={leaves2} alt=""/></div>
                <div><img src={leaves3} alt=""/></div>
                <div><img src={leaves4} alt=""/></div>
                <div><img src={leaves1} alt=""/></div>
                <div><img src={leaves2} alt=""/></div>
                <div><img src={leaves3} alt=""/></div>
                <div><img src={leaves4} alt=""/></div>
            </div>
            <div className='set set2'>
                <div><img src={leaves1} alt=""/></div>
                <div><img src={leaves2} alt=""/></div>
                <div><img src={leaves3} alt=""/></div>
                <div><img src={leaves4} alt=""/></div>
                <div><img src={leaves1} alt=""/></div>
                <div><img src={leaves2} alt=""/></div>
                <div><img src={leaves3} alt=""/></div>
                <div><img src={leaves4} alt=""/></div>
            </div>
            <div className='set set3'>
                <div><img src={leaves1} alt=""/></div>
                <div><img src={leaves2} alt=""/></div>
                <div><img src={leaves3} alt=""/></div>
                <div><img src={leaves4} alt=""/></div>
                <div><img src={leaves1} alt=""/></div>
                <div><img src={leaves2} alt=""/></div>
                <div><img src={leaves3} alt=""/></div>
                <div><img src={leaves4} alt=""/></div>
            </div>
        </section>
        
    );
}

export default Leaves;