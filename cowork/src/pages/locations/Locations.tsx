import { CoworkCard } from "../../components/CoworkCard";
import { useCompanies } from "./hooks/use-companies";

export const Locations = () => {
  const { data, loading, error } = useCompanies();
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>Find your coworking space</h2>
        </header>
      </div>
      <div className="main">
        <h4>Available spaces:</h4>
        <div className="spaces">
          {data.coworks?.map((space: any, index: any) => (
            <CoworkCard key={index} cowork={space} />
          ))}
        </div>
      </div>
    </>
  );
};
