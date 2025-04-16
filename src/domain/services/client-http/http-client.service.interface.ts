import type { CustomHttpRequest, CustomHttpResponse } from "../../types";

export interface IHttpClientService {
  request<T = unknown>(data: CustomHttpRequest): Promise<CustomHttpResponse<T>>;
}
