export interface Trainer{
    id:string,
    trainer_name: string,
    mobile_number: number,
    idproof: string,
    dob: Date,
    Car:string
}
export interface Vehicle{
    id:string,
    vehicle_number: string,
    vehicle_name: string,
    insurance: string,
    puc_date: Date
}