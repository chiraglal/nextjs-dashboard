import BarChart from "../components/BarChart";
import Header from "../components/Header";
import RecentOrders from "../components/RecentOrders";
import TopCards from "../components/TopCards";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <TopCards />
      <div className="grid p-4 md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
