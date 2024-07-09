import { lusitana } from "../../ui/fonts";
import { Card } from "../../ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { Suspense } from "react";
import { InvoiceSkeleton, RevenueChartSkeleton, CardSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "../../ui/dashboard/cards";
const Dashboard = async () => {

  return (
    <main>
      <h1 className={`${lusitana.className}  mb-4 text-xl md:text-2xl font-semibold uppercase`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper  />
        </Suspense>
      </div>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<InvoiceSkeleton />}>
          <LatestInvoices />  
        </Suspense>
        
      </div>
    </main>
    
  )
}

export default Dashboard