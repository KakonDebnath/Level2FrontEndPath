export const AccordionItem = ({ children }) => {
  return (
    <div className="p-4 border-b">
      <button
        onClick={() => toggle(index)}
        className="flex justify-between items-center py-4 w-full h-full"
      ></button>
    </div>
  );
};
