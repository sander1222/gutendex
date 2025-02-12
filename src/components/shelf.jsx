import "./shelf.css";
import BookList from "../App.jsx";

// const Projekts = BookList

// export default function ProjektDisplay() {
//   return (
//     <div id="ProjektsBox">
//       {Projekts.map((projekt, index) => (
//         <div id="ProjektFile">
//           <h3>{projekt.name}</h3>
//           <p>{projekt.beskrivelse}</p>
//           <button>
//             <a href={projekt.link} target="_blank">
//               Besøk prosjektet
//             </a>
//           </button>
//           <img src={projekt.image} alt={projekt.name} />
//         </div>
//       ))}
//     </div>
//   );
// }

const Projekts = BookList;

function Shelf() {
  return (
    <>
      <div className="topShelf">
        {Projekts.map((projekt, index) => (
          <div id="ProjektFile">
            <h3>{projekt.name}</h3>
            <p>{projekt.beskrivelse}</p>
            <button>
              <a href={projekt.link} target="_blank">
                Besøk prosjektet
              </a>
            </button>
            <img src={projekt.image} alt={projekt.name} />
          </div>
        ))}
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
      <div className="shelf">
        <img src="/public/shelf.png" alt="" />
      </div>
    </>
  );
}

export default Shelf;
