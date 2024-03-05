import React from 'react'





const Table2 = ({ data }) => {
    return (
      <div style={{ width: '50%', border: '1px solid black', maxWidth: '100%'}}> {/* Réduire la largeur du conteneur à 50% */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map((item) => (
            <div key={item.id} style={{ flexBasis: '10%', maxWidth: '20%'}}>
              <img src={item.imageSrc} alt={`${item.first_name}`} style={{ width: '100%', height: 'auto' }} /> 
              {/* <a href= "http://www.google.com" target="_blank" rel="noopener noreferrer"></a></a> */}
            </div>
          ))}
        </div>
      </div>
    );
};
export default Table2;