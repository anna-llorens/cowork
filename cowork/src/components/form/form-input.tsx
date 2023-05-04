export const FormInput = (props) => {
  const { label, type = "text", name, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} name={name} />
    </div>
  );
};
