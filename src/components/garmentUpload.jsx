import React, {useState} from "react";


// TODO: change input types to dropdown lists to reflect userPrefForm //

const GarmentUploadForm = () => {

    const [formInput, setFormInput] = useState({
        garmentType: "",
        weatherCompatibility: "",
        styleType: "",
        color: "",
        occasion: "",
        gender: ""
      });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await fetch('http://localhost:3000/userprefform', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify(formInput),
        //     });
      
        //     const result = await response.json();
      
        //     if (result.success) {
        //       setSearchResults(result.data)
        //       console.log('Preferences submitted successfully:', result.data);
        //     } else {
        //       console.error('Error submitting preferences:', result.error);
        //     }
        //   } catch (error) {
        //     console.error('Error during form submission:', error);
        //   }};
        // console.log("Form submitted:", formInput);
      };
    
  return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <label>
            Garment Type:
            <select 
              name="Garment Type"
              value={formInput.garmentType}
              onChange={(e) => setFormInput({ ...formInput, garmentType: e.target.value })}>
              <option value="choose">Choose One</option>
              <option value="shirt">Shirts</option>
              <option value="blouse">Blouses</option>
              <option value="shorts">Shorts</option>
              <option value="leggings">Leggings</option>
              <option value="trousers">Trousers</option>
              <option value="skirts">Skirts</option>
              <option value="pants">Pants</option>
              <option value="jackets">Jackets</option>
            </select>
          </label>
          <label>
            Weather Compatibility:
            <select 
             name="Weather Compatability"
             value={formInput.weatherCompatibility}
             onChange={(e) => setFormInput({ ...formInput, weatherCompatibility: e.target.value })}>
             <option value="choose">Please Choose One</option>
             <option value="fall">Fall</option>
             <option value="spring">Spring</option>
             <option value="summer">Summer</option>
             <option value="winter">Winter</option>
            </select>
          </label>
          <label>
            Style Type:
            <select 
                name="Style Type"
                value={formInput.styleType}
                onChange={(e) => setFormInput({ ...formInput, styleType: e.target.value })}>
                <option value="choose">Please Choose One</option>
                <option value="athleisure">Athleisure</option>
                <option value="business">Business</option>
                <option value="casual">Casual</option>
                <option value="chic">Chic</option>
                <option value="elegance">Elegance</option>
                <option value="grunge">Grunge</option>
                <option value="sporty">Sporty</option>
                <option value="streetwear">Streetwear</option>
            </select>
          </label>
          <label>
            Color:
            <select 
                name="Color"
                value={formInput.color}
                onChange={(e) => setFormInput({ ...formInput, color: e.target.value })}>
                <option value="choose">Please Choose One</option>
                <option value="tan">Tan</option>
                <option value="gray">Gray</option>
                <option value="blue">Blue</option>
                <option value="light-gray">Light-Gray</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="red">Red</option>
            </select>
          </label>
          <label>
            Occasion:
            <select 
                name="Occasion"
                value={formInput.occasion}
                onChange={(e) => setFormInput({ ...formInput, occasion: e.target.value })}>
                <option value="choose">Please Choose One</option>
                <option value="business">Business</option>
                <option value="casual">Casual</option>
                <option value="formal">Formal</option>
                <option value="athletic">Athletic</option>
            </select>
          </label>
          <label>
            Gender:
                <input type="text"
                name="Gender"
                value={formInput.gender}
                onChange={(e) => setFormInput({ ...formInput, gender: e.target.value })}/>
          </label>
          <br />
          <button type="submit">Upload</button>
    </form>
  );
}

export default GarmentUploadForm;