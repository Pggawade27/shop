import React, { useState } from 'react';
import { Input } from 'reactstrap';
import './SideMenue.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the hamburger icon

const SideMenue = ({ rangeChange }) => {
    const [range, setRange] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    rangeChange(range);

    const options = [
        { value: 'Samsung', label: 'Samsung' },
        { value: 'iPhone', label: 'iPhone' },
        { value: 'Oppo', label: 'Oppo' },
        { value: 'Vivo', label: 'Vivo' },
    ];

    const checkOptions = [
        { value: '5 Start', label: '5 Start' },
        { value: '4 Start', label: '4 Start' },
        { value: '3 Start', label: '3 Start' },
        { value: '2 Start', label: '2 Start' },
        { value: '1 Start', label: '1 Start' },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };
    

    return (
        <>
            <div className='hamburger-icon' onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={`sidebar${isSidebarOpen ? ' open' : ''}`}>
                <div className='d-flex flex-column justify-content-center gap-4 p-3'>
                    <div>
                        <div className='d-flex flex-column gap-2 p-1'>
                            <label>PRICE</label>
                            <Input
                                min='100'
                                max='100000'
                                type='range'
                                step='1000'
                                onChange={(e) => setRange(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='d-flex flex-column gap-2 p-1'>
                            <label>BRAND</label>
                            <select className='form-control'>
                                {options.map((ele) => (
                                    <option key={ele.value} value={ele.value}>
                                        {ele.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex flex-column gap-2 p-1'>
                            <p>CUSTOMER RATINGS</p>
                            {checkOptions.map((ele) => (
                                <div key={ele.value} className='d-flex align-items-center'>
                                    <Input className=' form-check-input' id={ele.value} type='checkbox' value={ele.value} />
                                    <label htmlFor={ele.value} className='ms-2'>{ele.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideMenue;
