namespace NodeJS {
    interface ProcessEnv {
      //Application
      PORT: number;
      BACKEND_URL: string;
      FRONTEND_URL: string;
      
      //Database
      DB_PORT: number;
      DB_NAME: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_HOST: string;
  
      //s3
      S3_ACCESS_KEY: string;
      S3_SECRET_KEY: string;
      S3_BUCKET_NAME: string;
      S3_ENDPOINT: string;
  
      //secrets
      COOKIE_SECRET: string;
      OTP_TOKEN_SECRET: string;
      ACCESS_TOKEN_SECRET: string;
      REFRESH_TOKEN_SECRET: string;
      EMAIL_TOKEN_SECRET: string;
      MOBILE_TOKEN_SECRET: string;
  
  
    }
  }
  