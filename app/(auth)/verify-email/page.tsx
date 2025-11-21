import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, MailIcon } from "lucide-react";

export default function VerifyEmail(){
    return(
        <Card className="max-w-sm min-w-xs  lg:min-w-sm ">
            <CardHeader>
                <div className="flex justify-center">
                    <MailIcon className=" size-12 "/>
                </div>
                <CardTitle className="flex justify-center font-bold ">Check your email</CardTitle>
                <CardDescription className="flex justify-center">
                    We have send a verification link to your email
                </CardDescription>
            </CardHeader>
            <CardContent className=" grid gap-4 p-4">
                <div className="flex justify-center items-center gap-2 py-2 my-2 bg-yellow-50">
                    <AlertCircle className="size-4"/>
                    <span>Check your spam folder too.</span>
                </div>
                <Button className="w-full">
                    <ArrowLeft className="size-4" />
                    Back to Login
                </Button>
            </CardContent>
        </Card>
    )
}