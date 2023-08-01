//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function UserSettings() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"appearance={{
        elements: {
          userButtonAvatarBox: {
            width: "8vw",
            height: "auto"
          }
        }
      }}/>
    </div>
  )
}