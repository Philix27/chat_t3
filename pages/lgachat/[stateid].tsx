import { useRouter } from "next/router";
import React from "react";
import { api } from "../../client/utils/api";
import CardsSection from "../../client/views/cards/cards.veiw";

export default function ChatPage() {
  const router = useRouter();
  const query = router.query;
  const stateid = query.stateid as string;
  console.log(stateid);

  const { data, isLoading, error } = api.lga.getByStateId.useQuery({
    stateId: Number(stateid),
  });

  // const { data, isLoading, error } = api.lga.getAll.useQuery();
  // console.log(data);

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
      sectionTitle="All LGA in your state"
      objs={data.map((lga) => {
        return {
          href: `/wardchat/${lga.id}`,
          title: lga.name,
          subtitle: lga.name,
        };
      })}
    />
  );

  // return <LgaChat userState={userState} />;
}
