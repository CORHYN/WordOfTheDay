import { useQuery } from "@tanstack/react-query";
import "./components.css";
import axios from "axios";

export function WordCard() {
  const { data, isError, isPending } = useQuery({
    queryKey: ["searchWord"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
      );
      return data;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <div className="word-card-plaque">
      {data.map(({ word, origin, meanings }) => {
        return (
          <>
            <h1>{word}</h1>
          </>
        );
      })}
    </div>
  );
}

// word
// meaning
// exaples
// {
//   meanings.map((meaning) => {
//     return (
//       <>
//         <h2>{meaning.definitions[0].definition}</h2>
//         <h4>{meaning.definitions[0].example}</h4>
//       </>
//     );
//   });
// }
