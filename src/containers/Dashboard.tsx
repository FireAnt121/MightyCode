import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import LoadingComponent from "./Loading";

const Dashboard = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <div className="flex bg-emerald-200 border p-2">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Button variant={'default'}>button</Button>
        This is dashboard
      </div>
    </Suspense>
  )
}

export default Dashboard;
