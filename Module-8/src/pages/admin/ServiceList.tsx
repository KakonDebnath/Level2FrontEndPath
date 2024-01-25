import { getServicesData } from '@/api/admin/service/service.api';
import { useQuery } from '@tanstack/react-query';


const ServiceList = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['services'],
    queryFn: getServicesData,
  });

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>Service List Admin</h2>
      {data?.map((service, i) => (
        <p key={i}>{service?.name}</p>
      ))}
    </div>
  );
};

export default ServiceList;
