import { ForecastDetails } from './ForecastDetail.model';

export class ForecastData {
  public name: string | undefined;
  //Deatils array of type ForecastDetails class.
  public details: Array<ForecastDetails> = new Array<ForecastDetails>();
}
