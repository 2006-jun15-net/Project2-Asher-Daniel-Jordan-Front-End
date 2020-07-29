import { Deserializable } from './deserializable.model';



export class OpsRoom implements Deserializable {

    public opsRoomId: number | undefined;
    public available: boolean | undefined;


    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
