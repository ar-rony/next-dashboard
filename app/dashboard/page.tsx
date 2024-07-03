import { lusitana } from "../ui/fonts";
import { Card } from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import { fetchRevenue, fetchLatestInvoices } from "../lib/data";
import LatestInvoices from "../ui/dashboard/latest-invoices";

const Dashboard = async () => {

  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <h1 className={`${lusitana.className}  mb-4 text-xl md:text-2xl font-semibold uppercase`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={""} type="collected"/>
        <Card title="Pending" value={""} type="pending"/>
        <Card title="Total Invoices" value={""} type="invoices"/>
        <Card title="Total Customers" value={""} type="customers"/>
      </div>
      <div className="mt-6 grid grid-cols-1">
        <RevenueChart revenue={revenue}/>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
    
  )
}

export default Dashboard