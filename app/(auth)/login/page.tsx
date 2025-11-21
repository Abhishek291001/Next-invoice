
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/SubmitButton";

import { signIn } from "@/lib/auth";
export default function LoginPage() {
  return (
    <Card className="max-w-sm min-w-xs  lg:min-w-sm p-4" >
      <CardTitle className="text-xl font-bold">Login</CardTitle>
      <CardDescription>
        Enter your email below to login in your account
      </CardDescription>
      <CardContent>
        <form className="grid gap-8"
        action={async(formdata)=>{
          "use server"
           const data = Object.fromEntries(formdata) as { email: string };
          await signIn("resend", {
  email: data.email,
  redirect: false, // won't crash if email fails
});

        }}
        >
          <div>
            <Label>Email</Label>
            <Input
            className="my-2"
            placeholder="Example@hello.com"
            required
            type="email"
            name="email"
            />
          </div>
          <SubmitButton title="login" />
        </form>
      </CardContent>
    </Card>
  );
}
