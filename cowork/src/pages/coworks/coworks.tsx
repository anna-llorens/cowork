import { useQuery } from "@apollo/client";
import { CoworkCard } from "./cowork-card";
import { GET_COWORKS } from "../../graphql/querys";

export const Coworks = () => {
  const { data } = useQuery(GET_COWORKS);

  return (
    <div>
      {data && (
        <>
          {data.feed.map((cowork) => (
            <CoworkCard key={cowork.id} cowork={cowork} />
          ))}
        </>
      )}
    </div>
  );
};
