import type { IHttpClientService } from "src/domain/services/client-http";
import { axiosInstance } from "src/infrastructure/http/axios";
import { AxiosClientHttpService } from "src/infrastructure/services";

export const makeAxiosHttpClientService = (): IHttpClientService => {
  const axiosHttpClientService = new AxiosClientHttpService(axiosInstance);

  return axiosHttpClientService;
};
