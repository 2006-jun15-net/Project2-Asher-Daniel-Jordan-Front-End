import { Deserializable } from './deserializable.model';


// export default interface Patient {
//     patientId: number;
//     patientRoomId?: number;
//     firstName: string;
//     lastName: string;
// }

export class Patient implements Deserializable {

    public patientId: number | undefined;
    public patientRoomId: number | undefined;
    public firstName: string | undefined;
    public lastName: string | undefined;



    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}
