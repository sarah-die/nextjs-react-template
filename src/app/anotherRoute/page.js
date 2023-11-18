"use client";
import { useEffect, useState } from "react";

const AnotherRoute = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(`https://catfact.ninja/fact`);
      const json = await res.json();
      setData(json);
    }

    getData().catch(console.error);
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};
export default AnotherRoute;
