import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./componets/Nav";
import Card from "./componets/Card";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);

  const handleChange = (e) => {

    let keyWord = e.target.value.toLowerCase();

    let arr = data.filter(city => {
      let name = city.city.toLowerCase(); // recibo un string
      return name.includes(keyWord);
    });
    setFiltered(arr);
  };

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  useEffect(() => {
    setFiltered(data.slice(0, 6));
  }, [data]);

  // Puedes ver la variable data en consola.
  console.log(data);

  
  return (
    <section className="contenedorAll">
    <Nav filtered={filtered} handleChange={handleChange}/>

    {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */} 
    {/* {data.map((el, i) => {
      return <h1 key={i}>{el.city}</h1>;
    })} */}

  
{/* {filtered.map((el, i) =>  <Citys key={i} el={el}/>)} */}
 {/* Agrega más información adicional que deseas mostrar  */}


      <h1 className="titulo">Stays in Finland</h1>
    <div className="contenedorcards">
    {filtered.slice(0, 6).map((el, i) =>  <Card key={i} el={el}/>)}
    
    </div>
  </section>
  );
}

export default App;































































// import { useEffect, useState } from "react";
// import "./App.css";
// import Nav from "./componets/Nav";
// import Card from "./componets/Card";

// function App() {
//   // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");



//   // Función para traer los datos de "stays.json".
//   const getData = async () => {
//     // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
//     try {
//       const res = await fetch("stays.json");
//       const resJson = await res.json();
//       // Aquí guardamos los datos de "stays.json" en la variable data.
//       setData(resJson);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
//   useEffect(() => {
//     getData();
//   }, []);

//   const handleChange = (e) => {
//     const keyWord = e.target.value.toLowerCase();

//     const filtered = data.filter((city) => {
//       const name = city.city.toLowerCase();
//       return name.includes(keyWord);
//     });

//     setFilteredData(filtered);
//   };


//   // Puedes ver la variable data en consola.
//   console.log(data);
//   return (
//     <section className="contenedorAll">
      
//       <Nav />
//       <input onChange={handleChange} value={searchQuery} type="text" placeholder='Add guests' />

//       {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */}
//       {filteredData.map((el, i) => {
//         return (
//           <h1 key={i}>
//             {el.city}
//             {el.filtered && <span> - Filtro aplicado: {el.filtered}</span>}
//           </h1>
//         );
//       })}

//       <h1 className="titulo">Stays in Finland</h1>
//       <div className="contenedorcards">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>

//     </section>
//   );
// }

// export default App;





























































// import { useEffect, useState } from "react";
// import "./App.css";
// import Nav from "./componets/Nav";
// import Card from "./componets/Card";

// function App() {
//   // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
//   const [data, setData] = useState([]);
//   const [filtered, setFiltered] = useState(data);

//   const handleChange = (e) => {

//     let keyWord = e.target.value.toLowerCase();

//     let arr = data.filter(city => {
//       let name = city.city.toLowerCase(); // recibo un string
//       return name.includes(keyWord);
//     });
//     setFiltered(arr);
//   };

//   // Función para traer los datos de "stays.json".
//   const getData = async () => {
//     // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
//     try {
//       const res = await fetch("stays.json");
//       const resJson = await res.json();
//       // Aquí guardamos los datos de "stays.json" en la variable data.
//       setData(resJson);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
//   useEffect(() => {
//      getData();
//   }, []);

//   // Puedes ver la variable data en consola.
//   console.log(data);

  
//   return (
//     <section className="contenedorAll">
//     <Nav />
//     <input onChange={handleChange} type="text" placeholder='Add guests' />

//     {/* Aquí te dejo un ejemplo de cómo podrías imprimir varios elementos a la vez. */} 
//     {/* {data.map((el, i) => {
//       return <h1 key={i}>{el.city}</h1>;
//     })} */}

// {filtered.map((el, i) => (
//   <div key={i}>
//     <h1>{el.city}</h1>
//     <p>Country: {el.country}</p>
//     <p>Rating: {el.rating}</p>
//     <p>Rating: {el.rating}</p>
//     {/* Agrega más información adicional que deseas mostrar */}
//   </div>
// ))}


//       <h1 className="titulo">Stays in Finland</h1>
//     <div className="contenedorcards">
//     <Card />
//     <Card />
//     <Card />
//     <Card />
//     <Card />
//     <Card />
//     </div>

//   </section>
//   );
// }

// export default App;
