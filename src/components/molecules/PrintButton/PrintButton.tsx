const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print:hidden flex justify-end">
      <button
        className="bg-green200 text-white text-18 px-12 py-4 rounded-sm"
        onClick={handlePrint}
      >
        Drukuj
      </button>
    </div>
  );
};

export { PrintButton };
