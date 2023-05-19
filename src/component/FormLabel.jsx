export const FormLabel = ({ child, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="text-[1.2rem]">
      {child}
    </label>
  );
};
