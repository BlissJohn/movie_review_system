export class User{
    id! :number;
    firstname! : string;
    lastname! :string;
    email! : string;
    mobilenumber! : number;
    password! : string;
    
    constructor(firstName: string,lastName:string,email:string,mobileNumber:number,password:string){
    this.firstname=firstName;
    this.lastname=lastName;
    this.email=email;
    this.mobilenumber=mobileNumber;
    this.password=password;

}
}
