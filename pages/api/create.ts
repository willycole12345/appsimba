import prisma from "../../lib/prisma";

export default async function handler(req,res){
	try {
		const { name , email, password } = req.body;
        const result =  await prisma.user.create({
          data: {
            name: name,
            email: email,
            password: password,
			balance: 100,
          }

        });
		
        res.status(200).json({ message:'submitted successfully'});
    } catch(error){
		console.log("entering this block");
        res.status(400).json({error});
    }
    
}
