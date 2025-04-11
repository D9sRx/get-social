import { db } from "@/db";
import { users } from "@/db/schema";
import { generateJWT, HashPassword } from "@/utils/auth";
import { eq } from "drizzle-orm";


export async function POST(request: Response){
    const {email, password} = await request.json();

    console.log(email, password);

    //1. look up user by email in the database
    const user = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    
    
    if (!user) {
        return Response.json(
            {error: "User with this email doesn't exists."},
            {status :400}
        );
    }

    
    //Hash the password using Web Crypto API
    const hashedPassword = await HashPassword(password);

    if(user.password !== hashedPassword){
        return Response.json(
            {error: "Incorrect password."},
            {status :400}
        );  
    }
    

    //5. generate a JWT token for the user
    const token = await generateJWT(user.id);

    //6. return the JWT token as a response

    return Response.json({token});


}