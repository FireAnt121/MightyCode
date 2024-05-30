import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Login() {
  return (
    <div className="w-100 min-h-[100vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>MightyCode</CardTitle>
          <CardDescription>Login,Be ready !!!!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">UserName/Email</Label>
                  <Input id="name" placeholder="Your Awesome Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input type="password" id="name" placeholder="Your Password" />
                </div>
              </div>
            </form>
            <Button className="w-100 flex-1">Enter the battle</Button>
            <span className="text-center text-sm text-gray-500 mt-2 mb-1">If you are not already invited, request</span>
            <hr />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Organization Handle</Label>
              <Input id="name" placeholder="Your Battleground" />
            </div>
            <Button className="w-100 flex-1">Request to Join</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

