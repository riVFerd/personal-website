import SanityClient from "@/lib/SanitiyClient";
import imageUrlBuilder from '@sanity/image-url'
import {ImageUrlBuilder} from "@sanity/image-url/lib/types/builder";

export default class SanityImgUrl {
  static imageUrlBuilder: ImageUrlBuilder;
  static getUrlBuilder(url: string): ImageUrlBuilder {
    if (!SanityImgUrl.imageUrlBuilder) {
      this.imageUrlBuilder = imageUrlBuilder(SanityClient.getClient()!);
    }
    return this.imageUrlBuilder.image(url);
  }
}