import { useQuery, gql } from "@apollo/client";

const PEOPLE_NAMES_QUERY = gql`
  {
    characters {
      results {
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(PEOPLE_NAMES_QUERY);

  if (loading) {
    return <p>loading ...</p>;
  }

  console.log(data);

  return (
    <div>
      <ul>
        {data?.characters.results.map((character) => {
          return <li>{character.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
