import React from 'react';
import  ReactDOM from 'react';
import ImagePicker from 'react-native-image-picker';

function  takePic(){
    ImagePicker.showImagePicker({},(responce)=>{
      console.log(responce);
      const file ={
        uri : responce.path,
        name : responce.fileName,
        type :  responce.type,
      }})};

function createRecipe(){  
    
    const title  = '';
    const discreption = '';
    const ingredients = '';
    const instructions = '';
    const img = ImagePicker();

    <div className = 'container'>
        <label >Title: </label>
        title = <input type="text" className="form-control"></input><br></br>
        <label>Discreption: </label>
        discreption = <input type="text" className="form-control"></input><br></br>
        <label>Ingredients: </label>
        ingredients = <input type="text" className="form-control"></input><br></br>
        <label>Instructions: </label>
        instructions = <input type='text' className='form-control'></input><br></br>
        img = <button className="btn btn-primary" onClick={this.takePic}>Upload Picture</button>
        <button type='submit' className="btn btn-primary"></button>
    </div>

}

export default createRecipe;