import { Deserializable } from './deserializable.model';

export class Treatment implements Deserializable {
   public treatmentId: number | undefined;
   public illnessId: number | undefined;
   public doctorId: number | undefined;
   public name: string | undefined;
   public timeToTreat: number | undefined;

   deserialize(input: any): this {
      Object.assign(this, input);
      return this;
  }
}
