interface DatabaseResponse {
  status: string;
  latência: string;
  versão: [
    {
      server_version: string;
    }
  ];
}

interface AiServiceResponse {
  ai: {
    status: string;
    model: string;
    version: number;
    latency: number;
  };
}

interface ServerResponse {
  versão: string;
  status: string;
  ambiente: string;
  timezone: string;
  versão_node: string;
  plataforma: string;
  região: string;
}

export interface StatusReponse {
  updatedAt: Date;
  database: DatabaseResponse;
  ai_service: AiServiceResponse;
  server: ServerResponse;
}
