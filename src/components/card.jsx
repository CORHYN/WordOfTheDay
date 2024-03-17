import { useQuery } from "@tanstack/react-query";
import "./components.css";
import axios from "axios";

export function WordCard({ searchWord }) {
  const { data, isError, isPending } = useQuery({
    queryKey: ["searchWord"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      return data;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <>
      {data.map(({ word, origin, meanings }, index) => {
        return (
          <div key={index} className="word-card-plaque">
            <h3>{word}</h3>
            {meanings.map(({ definitions }, index) => {
              console.log(definitions);
              return (
                <div key={index}>
                  {definitions.map((element, index) => {
                    return (
                      <div key={index}>
                        <h6>{element.definition}</h6>
                        <p>{element.example}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
