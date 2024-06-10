import React from 'react'

const Wave = () => {
  return (
    <svg style={{position: "absolute" , top: 20 , zIndex: -1 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#f3f4f5" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,74.7C672,96,768,160,864,165.3C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>
  )
};

export default Wave;
