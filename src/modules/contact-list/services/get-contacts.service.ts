import { IHttpClient } from "../../../infra/http-client";
import { MockHttpAdapter } from "../../../infra/mock-http-adapter";
import { Contact } from "../entities/contact.entity";

class GetContactsService {
  constructor(private readonly httpClient: IHttpClient) {}
  async execute() {
    const response = await this.httpClient.get("/contacts");
    return response.map((contact: any) => new Contact(contact));
  }
}

const httpClient: IHttpClient = new MockHttpAdapter();
export default new GetContactsService(httpClient);
