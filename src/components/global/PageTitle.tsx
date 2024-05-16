const PageTitle: React.FC<{ label: string }> = ({ label }) => {
  return <h1 className='text-4xl mb-3'>{label}</h1>;
};

export default PageTitle;
