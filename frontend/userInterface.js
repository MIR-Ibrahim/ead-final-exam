import react from 'react';
import ReactDOM from 'react-dom';
import recipeItems from './recipeItems';

function userInterfaces() {
    const obj = recipeItems();
    const title  = obj.title;
    const discreption = obj.discreption;
    const ingredients = obj.ingredients;
    const instructions = obj.instructions;

<div className='container'>
    <h3>title</h3>
    <p>discreption</p>
    <P>ingredients</P>
    <p>instructions</p>

    <div className='container'>
        <button className='btn-btn-primary' onClick={this.createRecipe} > Create Recipe </button>
        <button className='btn-btn-primary' onClick={this.editRecipe} >Edit Recipe</button>
        <button className='btn-btn-primary' onClick={this.viewRecipes}> View Recipe</button>
    </div>

</div>

function createRecipe(){
    <recipeItems/>
}

function editRecipe(){
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

function viewRecipes(recipe){
    for (var num of recipe){
        title = recipe[num].title;
        discreption = recipe[num].discreption;
        ingredients = recipe[num].ingredients;
        instructions = recipe[num].instructions;
        img = recipe[num].img;
    }
}

}

export default userInterfaces;