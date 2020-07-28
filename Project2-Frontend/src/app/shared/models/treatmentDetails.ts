import { Deserializable } from "./deserializable.model";

export class TreatmentDetails implements Deserializable {
   public patientId: number | undefined;
   public opsRoomId: number | undefined;
   public startTime: string | undefined;

   deserialize(input: any): this {
      Object.assign(this, input);
      return this;
  }
}