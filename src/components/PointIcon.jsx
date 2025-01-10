const PointIcon = ({ text, children }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center p-2 bg-primary-50 hover:bg-primary-100 rounded-full text-primary-500 size-8">
        {children}
      </div>
      <span>{text}</span>
    </div>
  );
};

export default PointIcon;
