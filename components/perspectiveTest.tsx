const PerspectiveText = ({ label }: { label: string }) => {
  return (
    <div className="w-full h-full flex-center perspective-text">
      <p className="">{label} </p>
      <p className="absolute rotate">{label} </p>
    </div>
  );
};

export default PerspectiveText;
