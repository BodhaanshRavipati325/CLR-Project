//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function UserSettings() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}