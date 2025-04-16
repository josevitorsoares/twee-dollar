type HttpMethod = "get" | "post" | "put" | "delete";

export type CustomHttpRequest<T = unknown> = {
  method: HttpMethod;
  url: string;
  body?: T;
  hearers?: Record<string, string>;
};

export type CustomHttpResponse<T = unknown> = {
  statusCode: number;
  body: T;
};
