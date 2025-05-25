import { getAllCityList } from '~/lib/getCityList';

type CityPageProps = {
  params: Promise<{ city: string }>;
};

const CityPage = async ({ params }: CityPageProps) => {
  const data = getAllCityList();

  const { city } = await params;
  return (
    <div>
      {city}
      {JSON.stringify(data)}
    </div>
  );
};

export default CityPage;
