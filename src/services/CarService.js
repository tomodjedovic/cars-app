import HttpService from "./HttpService";




 class CarService extends HttpService {
    async getAll(){
        try{
            const {data} = await this.client.get("cars");

            return data;
        }catch(error){
            console.log(error);
        }
        return []; 
    }

    async postCar(car){
        try{
            this.client.post("cars",car);
        }catch(error){
            console.log(error);
        }
    }

    async deleteCar(id){
        try{
            this.client.delete("cars",id);
        }catch(error){
            console.log(error);
        }
    }
}


const carService = new CarService()

export default carService



