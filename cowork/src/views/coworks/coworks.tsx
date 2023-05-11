import { useQuery } from "@apollo/client";
import { CoworkCard1 } from "./cowork-card";
import { GET_COWORKS } from "../../graphql/querys";

export const Coworks = () => {
  const { data } = useQuery(GET_COWORKS);

  return (
    <div>
      {data && (
        <>
          {data.feed.map((cowork) => (
            <CoworkCard1
              key={cowork.id}
              desciption={cowork.description}
              url={cowork.url}
            />
          ))}
        </>
      )}
    </div>
  );
};
