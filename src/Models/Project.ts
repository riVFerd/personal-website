import SanityClient from "@/utils/SanitiyClient";

export default class Project {
  imgUrl: string;
  projectTitle: string;
  projectSlug: string;
  projectContent: any;
  isFeatured: boolean;

  private constructor(imgUrl: string, projectTitle: string, projectSlug: string, projectContent: any, isFeatured?: boolean) {
    this.imgUrl = imgUrl;
    this.projectTitle = projectTitle;
    this.projectSlug = projectSlug;
    this.projectContent = projectContent;
    this.isFeatured = isFeatured || false;
  }

  static fromJson(json: any): Project {
    return new Project(json.imgUrl, json.title, json['slug'].current, json.content, json.isFeatured);
  }

  static async getProjects(): Promise<Project[]> {
    const query = `*[_type == "project"]{
        "imgUrl": thumbnail.asset->url,
        title,
        slug,
        content,
        featured
    }`;
    const json = await SanityClient.getClient()?.fetch(query);
    return json.map((projectJson: any) => this.fromJson(projectJson));
  }

  static async getFeaturedProjects(): Promise<Project[]> {
    const query = `*[_type == "project" && featured == true]{
        "imgUrl": thumbnail.asset->url,
        title,
        slug,
        content,
        featured
    }`;
    const json = await SanityClient.getClient()?.fetch(query);
    return json.map((projectJson: any) => this.fromJson(projectJson));
  }

  static async getProjectBySlug(slug: string): Promise<Project> {
    const query = `*[_type == "project" && slug.current == $slug]{
        "imgUrl": thumbnail.asset->url,
        title,
        slug,
        content,
        featured
    }`;
    const params = {slug};
    const json = await SanityClient.getClient()?.fetch(query, params);
    return json.map((projectJson: any) => this.fromJson(projectJson))[0];
  }
}