import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "29.5vh"}}>
      <SignIn afterSignInUrl="/"></SignIn>
    </div>
  );
}
