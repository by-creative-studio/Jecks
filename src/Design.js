import React, { useState, useRef } from 'react';
import './App.scss';
import html2canvas from 'html2canvas';
import body from './Image/character.png';
import Download from './Image/download_image.png';
import Reset from './Image/Reset.png';
import Random from './Image/RANDOM.png';
import topsButtonImage from './Image/tops_buttom.png';  
import bottomButtonImage from './Image/bottom_button.png';  
import glassesButtonImage from './Image/glasses_button.png';  
import mouthsButtonImage from './Image/mouth_button.png';  
import nosesButtonImage from './Image/nose_button.png';  
import eyesButtonImage from './Image/eye_button.png';  
import shoesButtonImage from './Image/shoes_button.png';  
import maskButtonImage from './Image/headgear button.png'; 
import backgroundButtonImage from './Image/background_button.png';  
import startDesignText from './Image/2nd page heading.png';  

import { useNavigate } from 'react-router-dom';

 
// Import images dynamically
const topsImages = require.context('./Image/tops', true, /\.(png|jpe?g|svg)$/);
const bottomImages = require.context('./Image/bottoms', true, /\.(png|jpe?g|svg)$/);
const glassesImages = require.context('./Image/glasses', true, /\.(png|jpe?g|svg)$/);
const mouthsImages = require.context('./Image/mouth', true, /\.(png|jpe?g|svg)$/);
const nosesImages = require.context('./Image/nose', true, /\.(png|jpe?g|svg)$/);
const eyesImages = require.context('./Image/eyes', true, /\.(png|jpe?g|svg)$/);
const shoesImages = require.context('./Image/shoes', true, /\.(png|jpe?g|svg)$/);
const maskImages = require.context('./Image/headgear', true, /\.(png|jpe?g|svg)$/);
const backgroundimage = require.context('./Image/background', true, /\.(png|jpe?g|svg)$/);

const topsList = topsImages.keys().map(image => topsImages(image));
const bottomsList = bottomImages.keys().map(image => bottomImages(image));
const glassesList = glassesImages.keys().map(image => glassesImages(image));
const mouthsList = mouthsImages.keys().map(image => mouthsImages(image));
const nosesList = nosesImages.keys().map(image => nosesImages(image));
const shoesList = shoesImages.keys().map(image => shoesImages(image));
const maskList = maskImages.keys().map(image => maskImages(image));
const eyesList = eyesImages.keys().map(image => eyesImages(image));
const backgroundList = backgroundimage.keys().map(image => backgroundimage(image));

function Design() {
  //New Button layer
  const [selectedClothIndex, setSelectedClothIndex] = useState(null);
  const [selectedPantIndex, setSelectedPantIndex] = useState(null);
  const [selectedGlassesIndex, setSelectedGlassesIndex] = useState(null);
  const [selectedMouthIndex, setSelectedMouthIndex] = useState(null);
  const [selectedNoseIndex, setSelectedNoseIndex] = useState(null);
  const [selectedShoesIndex, setSelectedShoesIndex] = useState(null);
  const [selectedMaskIndex, setSelectedMaskIndex] = useState(null);
  const [selectedEyesIndex, setSelectedEyesIndex] = useState(null);
  const [selectedBackgroundIndex, setSelectedBackgroundIndex] = useState(2);

  const [collapsable, setCollapsableIndexExpand] = useState(null);

  const designRef = useRef(null); // Ref to the design container
  const handleNextTop = () => {
    setSelectedClothIndex((prevIndex) => (prevIndex === null || prevIndex === topsList.length - 1) ? 0 : prevIndex + 1);
  };
  const handleNextBottom = () => {
    setSelectedPantIndex((prevIndex) => (prevIndex === null || prevIndex === bottomsList.length - 1) ? 0 : prevIndex + 1);
  };  
  const handleNextGlasses = () => {
    setSelectedGlassesIndex((prevIndex) => (prevIndex === null || prevIndex === glassesList.length - 1) ? 0 : prevIndex + 1);
  };  
  const handleNextMouth = () => {
    setSelectedMouthIndex((prevIndex) => (prevIndex === null || prevIndex === mouthsList.length - 1) ? 0 : prevIndex + 1);
  }; 
  const handleNextNose = () => {
    setSelectedNoseIndex((prevIndex) => (prevIndex === null || prevIndex === nosesList.length - 1) ? 0 : prevIndex + 1);
  }; 
  const handleNextShoes = () => {
    setSelectedShoesIndex((prevIndex) => (prevIndex === null || prevIndex === shoesList.length - 1) ? 0 : prevIndex + 1);
  };
  const handleNextEye = () => {
    setSelectedEyesIndex((prevIndex) => (prevIndex === null || prevIndex === eyesList.length - 1) ? 0 : prevIndex + 1);
  };  
  const handleNextMask = () => {
    setSelectedMaskIndex((prevIndex) => (prevIndex === null || prevIndex === maskList.length - 1) ? 0 : prevIndex + 1);
  };  
  const handleNextBackground = () => {
    setSelectedBackgroundIndex((prevIndex) => (prevIndex === null || prevIndex === backgroundList.length - 1) ? 0 : prevIndex + 1);
  };

  const navigate = useNavigate(); // Initialize navigate here

  const downloadImage = () => {
    const hideElements = document.querySelectorAll('.hidden-when-download');
    // Hide the elements
    hideElements.forEach(element => {
      element.classList.add('hide-during-download');
    });
  
    if (designRef.current) {
      html2canvas(designRef.current).then(canvas => {
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'Jeck.png'; // File name for download
        link.click();
        navigate('/download', { state: { image: imageUrl } }); // Navigate to the DownloadResult page
        
        // Show the elements again after the download
        hideElements.forEach(element => {
          element.classList.remove('hide-during-download');
        });
      }).catch(error => {
        console.error('Error generating image:', error);
        
        // Show the elements again if there's an error
        hideElements.forEach(element => {
          element.classList.remove('hide-during-download');
        });
      });
    }
  };
  
  const resetDesign = () => {
    setSelectedClothIndex(null);
    setSelectedPantIndex(null);
    setSelectedGlassesIndex(null);
    setSelectedMouthIndex(null);
    setSelectedNoseIndex(null);
    setSelectedShoesIndex(null);
    setSelectedMaskIndex(null);
    setSelectedEyesIndex(null);
    setSelectedBackgroundIndex(2);
  };

  const randomizeDesign = () => {
    setSelectedClothIndex(Math.floor(Math.random() * topsList.length));
    setSelectedPantIndex(Math.floor(Math.random() * bottomsList.length));
    setSelectedGlassesIndex(Math.floor(Math.random() * glassesList.length));
    setSelectedMouthIndex(Math.floor(Math.random() * mouthsList.length));
    setSelectedNoseIndex(Math.floor(Math.random() * nosesList.length));
    setSelectedShoesIndex(Math.floor(Math.random() * shoesList.length));
    setSelectedMaskIndex(Math.floor(Math.random() * maskList.length));
    setSelectedEyesIndex(Math.floor(Math.random() * eyesList.length));
  };

  return (
    <React.Fragment>
      <div ref={designRef} className='container p-0 m-0' style={{height: '100vh'}} >
        <div className='row d-flex justify-content-center p-0 m-0' style={{height: 'inherit', width: 'inherit'}}>
          <div className='col-sm-12 p-0 m-0' style={{position: 'relative' , zIndex: 0, width: 'inherit'}}>
            {selectedBackgroundIndex !== null && (
              <img className='position-absolute' src={backgroundList[selectedBackgroundIndex]} style={{width: 'inherit' }} alt="background" />
            )}
            <img className='position-absolute hidden-when-download' src={startDesignText} style={{ width: 'inherit'}} alt="startDesign" />
            <img className='position-absolute' src={body} style={{ width: 'inherit' }} alt="body" /> 
            {selectedPantIndex !== null && (
              <img className='position-absolute' src={bottomsList[selectedPantIndex]} style={{ width: 'inherit'  }} alt="bottoms" />
            )}
            {selectedShoesIndex !== null && (
              <img className='position-absolute' src={shoesList[selectedShoesIndex]} style={{ width: 'inherit'  }} alt="shoes" />
            )}
            {selectedClothIndex !== null && (
              <img className='position-absolute' src={topsList[selectedClothIndex]} style={{  width: 'inherit' }} alt="tops" />
            )}
            {selectedMouthIndex !== null && (
              <img className='position-absolute' src={mouthsList[selectedMouthIndex]} style={{  width: 'inherit' }} alt="mouth" />
            )}
            {selectedNoseIndex !== null && (
              <img className='position-absolute' src={nosesList[selectedNoseIndex]} style={{ width: 'inherit'  }} alt="nose" />
            )}
            {selectedEyesIndex !== null && (
              <img className='position-absolute' src={eyesList[selectedEyesIndex]} style={{ width: 'inherit'  }} alt="eyes" />
            )}
             {selectedMaskIndex !== null && (
              <img className='position-absolute' src={maskList[selectedMaskIndex]} style={{ width: 'inherit'  }} alt="mask" />
            )}
            {selectedGlassesIndex !== null && (
              <img className='position-absolute' src={glassesList[selectedGlassesIndex]} style={{ width: 'inherit'  }} alt="glasses" />
            )}

          </div>
        </div>

      <div className='container m-0 p-0 hidden-when-download' style={{position: 'relative', bottom:'200px'}}>
        <div className='row d-flex justify-content-center m-0 p-0' style={{width: '100%'}} >
             <div className='d-flex justify-content-center col-sm-12'  style={{zIndex: 2, overflowX: 'auto', width: '100%'}} >
               <button onClick={handleNextShoes} style={bottomsButtonStyle} >
                 <img src={shoesButtonImage}   alt="Select Tops" />  
               </button> 
               <button onClick={handleNextMouth} style={bottomsButtonStyle} >
                 <img src={mouthsButtonImage}   alt="Select Tops" />  
               </button> 
               <button onClick={handleNextTop} style={bottomsButtonStyle} >
                 <img src={topsButtonImage}  alt="Select Tops" />  
               </button> 
               <button onClick={handleNextMask} style={bottomsButtonStyle} >
                 <img src={maskButtonImage}   alt="Select Tops" />  
               </button> 
              </div>   
        </div>

        <div className='row justify-content-center m-0 p-0' style={{width: '100%'}}>
             <div className='col-12 d-flex justify-content-center ' style={{zIndex: 2, overflowX: 'auto', width: '100%'}}>
               <button onClick={handleNextBottom} style={bottomsButtonStyle} >
                 <img src={bottomButtonImage}   alt="Select Tops" />  
               </button> 
               <button onClick={handleNextGlasses} style={bottomsButtonStyle} >
                 <img src={glassesButtonImage}   alt="Select Tops" />  
               </button> 
               <button onClick={handleNextNose} style={bottomsButtonStyle} >
                 <img src={nosesButtonImage}   alt="Select Tops" />  
               </button> 
               <button onClick={handleNextEye} style={bottomsButtonStyle} >
                 <img src={eyesButtonImage}   alt="Select Tops" />  
               </button> 
               <button onClick={handleNextBackground} style={bottomsButtonStyle} >
                 <img src={backgroundButtonImage}   alt="Select Tops" />  
               </button>  
              </div>   
        </div>

        <div className='row m-0' style={{ width: '100%' }}>
          <div className='col-12 d-flex justify-content-between p-0' style={{ zIndex: 1 }}>
              <img
                src={Random}
                alt="Randomize"
                style={{ width: 'auto', height: '40px', cursor: 'pointer' }}
                onClick={randomizeDesign}
              />
              <img
                src={Download}
                alt="Download"
                style={{ width: 'auto', height: '40px', cursor: 'pointer' }}
                onClick={downloadImage}
              />
              <img
                src={Reset}
                alt="Reset"
                style={{ width: 'auto', height: '40px', cursor: 'pointer' }}
                onClick={resetDesign}
              />
           </div>
        </div>
      </div>
      </div>
    </React.Fragment >
  );
} 
  
const characterStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const bottomsButtonStyle = {
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
};

export default Design;
