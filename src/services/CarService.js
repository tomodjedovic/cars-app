import HttpService from "./HttpService";




 class CarService extends HttpService {
    async getAll(){
        try{
            const {data} = await this.client.get("cars");
            console.log(data);
            return data;
        }catch(error){
            console.log(error);
        }
        return []; 
    }
}


const carService = new CarService()

export default carService



