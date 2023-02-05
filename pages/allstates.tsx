import { api } from "../client/utils/api";
import CardsSection from "../client/views/cards/cards.veiw";

export default function AllStatesPage() {
  const { data, isLoading, error } = api.state.getAll.useQuery();
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h3>Error...</h3>
      </div>
    );
  }

  return (
    <CardsSection
      sectionTitle="All States"
      objs={data.map((state) => {
        return {
          href: `/lgachat/${state.id}`,
          title: state.name,
          subtitle: state.capital,
        };
      })}
    />
  );
}
