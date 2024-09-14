export {default} from "next-auth/middleware"

export const config = {matcher: ["/screens/home/?new-recipe=y", "/screens/drafts"]}