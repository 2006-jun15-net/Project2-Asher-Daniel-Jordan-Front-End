import { Deserializable } from "./deserializable.model";



export class Nurse implements Deserializable {
    
    public nurseId: number | undefined;
    public firstName: string | undefined;
    public lastName: string | undefined;

    

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}