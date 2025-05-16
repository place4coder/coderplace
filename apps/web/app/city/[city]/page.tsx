type CityPageProps = {
  params: Promise<{ city: string }>;
};

const CityPage = async ({ params }: CityPageProps) => {
  const { city } = await params;
  return <>{city}</>;
};

export default CityPage;
