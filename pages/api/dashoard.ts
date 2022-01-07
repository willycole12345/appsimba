import prisma from "../../lib/prisma";

export default async function handler(req,res){
    var message = "";
	try {
		const { id } = req.body;
        const result =  await prisma.user.findUnique({
            where:{
                id:id,
            
            },
          select: {
            name: true,
            balance:true
            
          }

        });
        if(result== null){

            message = "Login not successful";

        }else{
            message = "Login successful";
        }
        res.status(200).json({ result, message});
    } catch(error){
		console.log("entering this block");
        res.status(400).json({error});
    }
    
}
