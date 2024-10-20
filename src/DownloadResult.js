import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import companyLogo from './Image/finalresult/element 1.png';
import companyLogo1 from './Image/finalresult/element 2.png';
import companyLogo2 from './Image/finalresult/element 3.png';
import { useLocation } from 'react-router-dom';

const DownloadResult = () => {
    const location = useLocation();
    const { image } = location.state || {}; // Access the image passed through state

    return (
        <div className="container" style={homepageStyle}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center p-0 m-0">
                    <img src={companyLogo} alt="A detailed description" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center p-0 m-0">
                    {image ? (
                        <img src={image} alt="Generated Design"  style={{maxWidth:'62%'}}/>
                    ) : (
                        <p>No design available.</p> 
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center p-0 m-0">
                    <img src={companyLogo1} alt="A detailed description"  />
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center p-0 m-0">
                    <img src={companyLogo2} alt="A detailed description" />
                </div>
            </div>
        </div>
    );
}

const homepageStyle = {
    backgroundColor: '#FFA26D', // Background color as per the image
};

export default DownloadResult;
