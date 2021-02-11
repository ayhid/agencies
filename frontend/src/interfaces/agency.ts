interface Agency{
  name: string;
  manager: string;
  activity: string;
}
export interface AgencyOption extends Agency {
  label: string;
  value: string;
}
