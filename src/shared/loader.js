import React from 'react';

import './loader.css';

export default function Loader() {
    return (
        <>
            <div className="container">
                <div className="col-md-12" style={{ top: '40vh' }}>
                    <div className="row">
                        <svg className="spinner" style={{ margin : 'auto' }} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}