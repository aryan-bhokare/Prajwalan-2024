
    import React from 'react';
   import im from '../assets/spinner.svg'
    const Spinner = () => {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
        <img src={im} style={{ width: '250px', height: '100px' }} />
      </div>
      );
    };
    
    export default Spinner;