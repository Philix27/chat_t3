import { Inter } from "@next/font/google";
import { api } from "../client/utils/api";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading, error } = api.state.getAll.useQuery();
  if (isLoading) console.log("Loading");
  if (error) console.log("An Error occured");
  if (data) console.log(data);

  return (
    <>
      <div>Home Town</div>
    </>
  );
}
