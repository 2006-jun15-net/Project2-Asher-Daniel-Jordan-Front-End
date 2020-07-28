import { Deserializable } from "./deserializable.model";

export class TreatmentDetails implements Deserializable {
   public treatmentId: number | undefined;
   public patientId: number | undefined;
   public opsRoomId: number | null = null;
   public startTime: string = "";

   deserialize(input: any): this {
      Object.assign(this, input);
      return this;
  }
}