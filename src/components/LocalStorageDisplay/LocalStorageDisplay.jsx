/*
    written by Josip Brljevic

    A component that displays the ingredients of the recipe that you clicked on (you click on the black button at the top of the box)
    It gets ingredients from the local storage.
    The ingredients were saved with the onClick function on a previous component
*/

export default function LocalStorageDisplay() {
  const re = /, ?|\n/gm;
  const storage = localStorage.getItem("recipedata");

  let words = storage.split(re);
  console.log(storage.split(re));

  return (
    <div>
      {words.map((word) => (
        <div className="localstoragedisplay" key={Math.random()}>
          <p>{word}</p>
        </div>
      ))}
    </div>
  );
}
