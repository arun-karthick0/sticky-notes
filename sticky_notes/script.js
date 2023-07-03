let random_margin = ["-5px", "1px", "5px", "10px", "7px"];
let random_colors = ["#32CD32", "#00CED1", "#1E90FF", "#FF0000", "#FF7F50"];
let random_degree = [
  "rotate(3deg)",
  "rotate(1deg)",
  "rotate(-1deg)",
  "rotate(-3deg)",
  "rotate(-5deg)",
  "rotate(-8deg)",
];
let index = 0;
// display modal during loading
window.onload = document.querySelector("#user_input").select();

// display modal after add note button
document.querySelector("#add_note").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});
// display modal to none
document.querySelector("#hide").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

// enter after written
document.querySelector("#user_input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const text = document.querySelector("#user_input");
    createStickyNote(text.value);
  }
});

// new notes
createStickyNote = (text) => {
  let note = document.createElement("div");
  let details = document.createElement("div");
  let noteText = document.createElement("h1");

  note.className = "note";
  details.className = "details";
  noteText.textContent = text;

  details.appendChild(noteText);
  note.appendChild(details);

//   for generating random color and angles for sticky notes
  if (index > random_colors.length - 1) index = 0;

  note.setAttribute(
    "style",
    `margin:${
      random_margin[Math.floor(Math.random() * random_margin.length)]
    }; background-color:${random_colors[index++]}; transform:${
      random_degree[Math.floor(Math.random() * random_degree.length)]
    }`
  );

//   remove sticky notes 
  note.addEventListener("dblclick", () => {
    note.remove();
  });

  document.querySelector("#all_notes").appendChild(note);
};
