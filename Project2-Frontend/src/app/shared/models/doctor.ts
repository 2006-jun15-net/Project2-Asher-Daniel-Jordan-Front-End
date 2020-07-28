import { Deserializable } from './deserializable.model';



export class Doctor implements Deserializable {

    public doctorId: number | undefined;
    public firstName: string | undefined;
    public lastName: string | undefined;


    constructor(){}


    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

}
