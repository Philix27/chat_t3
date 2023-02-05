import { useRouter } from "next/router";
import React from "react";
import { api } from "../../client/utils/api";
import CardsSection from "../../client/views/cards/cards.veiw";

export default function ChatPage() {
  const router = useRouter();
  const query = router.query;
  const lgaId = query.lgaId as string;
  console.log(lgaId);
  // return <LgaChat userState={userState} />;

  const { data, isLoading, error } = api.ward.getByStateId.useQuery({
    lgaId: Number(lgaId),
  });

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
  console.log(data);
  return (
    <CardsSection
      sectionTitle="All Ward in your state"
      objs={data.map((lga) => {
        return { href: "#", title: lga.name, subtitle: lga.name };
      })}
    />
  );
}
