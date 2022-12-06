import "./components.css";

type Address = {
  city?: String;
  postalCode?: String;
  street?: String;
};
export type Cowork = {
  name: String;
  address: Address;
  web?: String;
};
type CoworkCardProps = {
  cowork?: Cowork;
};
export const CoworkCard = ({ cowork }: CoworkCardProps) => {
  return (
    <div className="card">
      <span>{cowork?.name}</span> - <span>{cowork?.address?.city}</span>
    </div>
  );
};
