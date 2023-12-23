import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing Page (Unprotected)
      <div>
        <Link href="/sign-in">
          <Button>
           Login
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button>
           Register
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;

/**
 *  To add a Component from ShadCn UI 
 *    
 * Go to the Site of ShadCn and Copy the Installation Command for a Component
 * Execute the Command and now in the COmpoents Folder under the File UI the 
 * Button.tsx File appers
 *  
 */