import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%", marginLeft: "-4vw", marginTop: "-4vh"}}>
      <SignIn afterSignInUrl="/"></SignIn>
    </div>
  );
}
