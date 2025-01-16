import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function Createnote(notedata){
return <Note key={notedata.id} title={notedata.title} content={notedata.content} />
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(Createnote)}
      {/* <Note title= {notes[0].title} content={notes[0].content}/>
      <Note title= {notes[1].title} content={notes[1].content}/>
      <Note title= {notes[2].title} content={notes[2].content}/>
      <Note title= {notes[3].title} content={notes[3].content}/>  */}
      <Footer />
    </div>
  );
}

export default App;
