import { getServicesData } from '@/api/admin/service/service.api';
import { useQuery } from '@tanstack/react-query';

const ServiceList = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['services'],
    queryFn: getServicesData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // if (isError) {
  //   return <p>SomeThing Went wrong</p>;
  // }

  console.log("loading:", isLoading,"error", isError, data);

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
