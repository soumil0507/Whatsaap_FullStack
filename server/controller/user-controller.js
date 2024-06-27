import User from "../modal/User.js";


export const addUser = async (request, response) => {

    console.log(request.body);

    try{
        let exists = await User.findOne({sub : request.body.sub});
        if (exists) {

            response.status(200).json(
                {msg:"User already exists"}
            );

            return;

        }

        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);

    }catch(e){
        return response.status(500).json(e.message);
    }
}

export const getUsers = async (request, response) => {
    
    try{
        const users = await User.find({});
        return response.status(200).json(users);
    }
    catch(e){
        return response.status(500).json(e.message);
    }

}
