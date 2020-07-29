import { Deserializable } from './deserializable.model';

export class TreatmentDetails implements Deserializable {
   public treatmentDetailsId: number | undefined;
   public treatmentId: number | undefined;
   public patientId: number | undefined;
   public opsRoomId: number | null = null;
   public startTime = '';

   deserialize(input: any): this {
      Object.assign(this, input);
      return this;
  }
}
