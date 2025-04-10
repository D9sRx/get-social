import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

export async function POST(request: Response){
    const {email, password} = await request.json();

    console.log(email, password);

    //1. validate email and password
    if (!email || !password) {
        return Response.json(
            {error: "Email and password are required."}, 
            {status :400}
        );
    }

    if(password.length < 8){
        return Response.json(
            {error: "Password must be at least 8 characters long."},
            {status :400}
        );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return Response.json(
            {error: "Please enter a valid email"},
            {status :400}
        );
    } 
    //2. look up user by email in the database
    const user = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    
    //3. if the user exists, return an error message
    if (user) {
        return Response.json(
            {error: "User with this email already exists."},
            {status :400}
        );
    }


    //4. if the user does not exist, create a new user in the database
    const [newUser] = await db.insert(users).values({
        email,
        //TODO salt andhash the password before storing it in the database
        password,
    }).returning();

    //5. generate a JWT token for the user
    const token = jwt.sign({userId: newUser.id}, process.env.JWT_SECRET!);

    //6. return the JWT token as a response

    return Response.json({token});


}