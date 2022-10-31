type SearchBar = {

  updateText: () => void
}

export const SearchBar = ({updateText})=> JSX.Element {
  return (
   <>
  <div className="filter-bar">
  <div className="input-line">
    <input
      className="input-field"
      onChange={updateText}
      value={text}
      type="text"
      placeholder="Aufgabe..."
    ></input>
    // <button onClick={addTodo} className="input-button">
    //   Hinzufügen
    // </button>
  </div>
//   <div>
//   //   <input
//   //     type="checkbox"
//   //     checked={showAllItems}
//   //     onChange={showAllCheckHandler}
//   //   ></input>
//   //   Alle Anzeigen
//   // </div>
// </div>
</>
  )

});
