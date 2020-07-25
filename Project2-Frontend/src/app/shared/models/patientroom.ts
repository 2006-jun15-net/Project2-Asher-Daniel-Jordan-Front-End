import { Deserializable } from "./deserializable.model";



export class PatientRoom implements Deserializable {
    
    public patientRoomId: number | undefined;
    public available: boolean | undefined;
    

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}