// import React, { useEffect, useState } from 'react';
// import './About.css';

// function About() {
//   const [api, setApi] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(false); 

//   useEffect(() => {
//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setApi(data);
//       });
//   }, []);


//   return (
//     <>
//       <h1>Menyu</h1>
//       <div className="fox">
//         {api.map((item) => (
//           <div key={item.id} className="card" data-aos="flip-right">
//             <div className='bv'>
//               <h2>{item.name}</h2>
//               <img src={item.image} alt={item.name} /><br />
//               <h3>{item.firstName}</h3><br />
//               <button>
//                <a href="">More info</a>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>


//       {selectedItem && (
//         <div className="modal">
//           <h2>{selectedItem.name} - {selectedItem.firstName}</h2>
//           <p>{selectedItem.description}</p> 
//           <button onClick={() => setSelectedItem(null)}>Yopish</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default About;

// import React, { useEffect, useState } from 'react';
// import './About.css';

// function About() {
//   const [api, setApi] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null); // null qilib qo'yildi

//   useEffect(() => {
//     fetch("http://localhost:3000/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setApi(data);
//       });
//   }, []);

//   return (
//     <>
//       <h1>Menyu</h1>
//       <div className="fox">
//         {api.map((item) => (
//           <div key={item.id} className="card" data-aos="flip-right">
//             <div className='bv'>
//               <h2>{item.name}</h2>
//               <img src={item.image} alt={item.name} /><br />
//               <h3>{item.firstName}</h3><br />
//               <button onClick={() => setSelectedItem(item)}>
//                 More info
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedItem && (
//         <div className="modal">
//           <h2>{selectedItem?.name} - {selectedItem?.firstName}</h2>
//           <p>{selectedItem?.description}</p> 
//           <button onClick={() => setSelectedItem(null)}>Yopish</button>
//         </div>
//       )}
//     </>
//   );
// }

// export default About;


import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  const [api, setApi] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const[date,setDate]=useState()

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setApi(data);
      });
  }, []);

let funk =()=>{
 alert('bron qilish uchun INSTAGRAM , TEEGRAM tarmoqlaridan yozing yoki qongiroq qiling!');
 
}


  return (
    <div id='about'>
      <h1>Menyu</h1>
      <div className="fox">
        {api.map((item) => (
          <div key={item.id} className="card" data-aos="flip-right">
            <div className='bv'>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} /><br />
              <h3>{item.firstName}</h3><br />
              <span><p className='p'><img src="./e.png" alt="" />2 people</p></span>
             <span> <p className='po'><img src="./ho.png" alt="" /> 10 day</p></span><br />
              <p style={{color:'red'}}>Ko'proq bilish uchun bosing</p>
              <button class onClick={() => setSelectedItem(item)}>More info</button>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 style={{color:'white'}}>{selectedItem?.name} - {selectedItem?.firstName}</h2><br />
            <h3 style={{color:'black'}}>{selectedItem?.description}</h3> 
            <button onClick={()=> funk()}>Bron qilish </button><br />
            <button onClick={() => setSelectedItem(null)}>Yopish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;






