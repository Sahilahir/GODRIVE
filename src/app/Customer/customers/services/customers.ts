export interface Customer {
    id: string,
    First_name: string,
    Last_name: string,
    Gender: string,
    Mobile_number: number,
    dob: Date,
    Idproof: string,
    Address: string,
    Occupation: string,
    doj: Date,
    date: Date,
    Progress_in_km: number,
    Trainer:string,
    Timeslot:string
}
export interface Trainer {
    id:string,
    trainer_name: string,
    mobile_number: number,
    idproof: string,
    dob: Date
}
export interface Request{
    r_id:string,
    r_first_name:string,
    r_middle_name:string,
    r_last_name:string,
    r_gender:string,
    r_phone:number,
    r_dob:Date,
    r_address:string,
    r_occupation:string,
    r_idproof:string,
    r_timeslot_1:string,
    r_timeslot_2:string,
    r_timeslot_3:string
}