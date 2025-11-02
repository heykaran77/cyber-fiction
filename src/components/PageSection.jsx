const PageSection = ({ id, bgColor }) => {
  return (
    <div className={`h-screen flex items-center justify-center ${bgColor}`}>
      Page {id}
    </div>
  );
};

export default PageSection;
