import { Deserializable } from "./deserializable.model";



export class Patient implements Deserializable {
    
    public patientId: number | undefined;
    public patientRoomId: number | null;
    public illnessId: number | undefined;
    public doctorId: number | undefined;
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