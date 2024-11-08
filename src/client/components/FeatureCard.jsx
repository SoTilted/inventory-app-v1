const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <div className='flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4'>
        {icon}
      </div>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default FeatureCard;
