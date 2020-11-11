

export default class usersController{
    static async login (req, res){
        try {
            res.send("login successfuly");
        }
        
        catch (error){
            res.send(error);
        }

    }

};