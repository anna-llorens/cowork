import { Cowork } from "../../utils";

export const CoworkCard = ({ cowork }: { cowork: Cowork }) => {
  return (
    <div>
      <div>
        {cowork.description} ({cowork.url})
      </div>
    </div>
  );
};
