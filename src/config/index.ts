import { IConfig } from "@/types";

const config: IConfig = {
    appEnv: process.env.NEXT_PUBLIC_APP_ENV as 'development' | 'staging' | 'production',
    nodeEnv: process.env.NODE_ENV,
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
}

export default config;