import {createClient} from "next-sanity";

export default class SanityClient {
  static _instance: SanityClient | null = null;
  private client;

  private constructor() {
    if (SanityClient._instance === null) {
      this.client = createClient({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
        useCdn: true,
      });
    }
  }

  static getClient() {
    if (SanityClient._instance === null) {
      SanityClient._instance = new SanityClient();
      console.log(SanityClient._instance.client)
    }
    return SanityClient._instance.client;
  }
}