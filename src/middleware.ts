import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: "/"
    // afterAuth(auth, req, evt) {
    //     // handle users who aren't authenticated
    //     // if (!auth.userId && !auth.isPublicRoute) {
    //     //   return NextResponse.redirect(new URL('/', req.url));
    //     // }
    //     // redirect them to organization selection page
    //     if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/org-selection"){
    //       const orgSelection = new URL(`/users/${auth.userId}`, req.url)
    //       return NextResponse.redirect(orgSelection)
    //     }
    // }
});

export const config = {

    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
