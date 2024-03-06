import axios from 'axios';
import { Location } from '../models/Location';

export const getLocation = async (datetime: string): Promise<Location[]> => {
  const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL ?? '';
  let locations: Location[] = [];
  const url = `${baseUrl}/api/locations?datetime=${datetime}`;
  try {
    const response = await axios.get<Location[]>(url);
    if (response.status != 200) {
      throw new Error();
    }
    locations = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(
        `Error getting location data: ${error.response?.data ?? error.message}`,
      );
    } else {
      console.log(`Error getting location data: ${(error as any).message}`);
    }
  }
  return locations;
};
