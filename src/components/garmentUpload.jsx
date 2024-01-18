import React from "react";

const GarmentUploadForm = () => {

    return (
        <div>
                  <form>
            <label>
                Garment Type: 
                <input type="text" name="Garment Type"/><br/>
            </label>
            <br />
            <br />
            <label>
                Weather Compatability: 
                <input type="text" name="Weather Compatability"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                style Type: 
                <input type="password" name="style Type"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Color: 
                <input type="text" name="Color"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Occasion: 
                <input type="text" name="Occasion"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Gender: 
                <input type="text" name="Gender"/><br/>
            </label>
            <br />
            <button type="submit">Upload</button>
            </form>
        </div> 
    )
}

export default GarmentUploadForm;