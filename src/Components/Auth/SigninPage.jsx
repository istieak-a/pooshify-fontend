import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-screen pt-20">
      <SignIn />
    </div>
  );
}
