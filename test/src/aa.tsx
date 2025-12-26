import { useEffect } from "react";

function App() {

  useEffect(() => {

    async function getData() {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();

      console.log(data); // 👈 just look at data
    }

    getData();

  }, []);

  return <h1>Check the console</h1>;
}

export default App;
