import React, { useState } from "react";

    function searchRecipe(props) {
      const [search, setInput] = useState("");

      const handleSubmit = (evt) => {
          evt.preventDefault();
          alert(`Submitting search ${search}`)
      }
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Search Input
            <input type="text" value={search} onChange={e => setInput(e.target.value)} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }

    export default searchRecipe;