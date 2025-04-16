import type { AxiosInstance } from "axios";
import type { IHttpClientService } from "src/domain/services";
import type { CustomHttpRequest, CustomHttpResponse } from "src/domain/types";

export class AxiosClientHttpService implements IHttpClientService {
  constructor(private readonly _axiosInstance: AxiosInstance) {}

  async request<T = unknown>(
    data: CustomHttpRequest
  ): Promise<CustomHttpResponse<T>> {
    // TODO: Add try catch
    const response = await this._axiosInstance.request({
      url: data.url,
      method: data.method,
      data: data.body,
    });

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
