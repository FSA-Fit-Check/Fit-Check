import React from "react";

const GarmentUploadForm = () => {

  return (
    <form className='flex flex-col gap-3'>
        <label>
            Garment Type: 
            <input type="text" name="Garment Type"/>
        </label>
        <label>
            Weather Compatability: 
            <input type="text" name="Weather Compatability"/>
        </label>
        <label>
            style Type: 
            <input type="password" name="style Type"/>
        </label>
        <label>
            Color: 
            <input type="text" name="Color"/>
        </label>
        <label>
            Occasion: 
            <input type="text" name="Occasion"/>
        </label>
        <label>
            Gender: 
            <input type="text" name="Gender"/>
        </label>
        <br />
        
        <button type="submit">Upload</button>
    </form> 
  );
}

export default GarmentUploadForm;