import { Deserializable } from "./deserializable.model";



export class Illness implements Deserializable {
    
    public illnessId: number | undefined;
    public name: string | undefined;
    

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}