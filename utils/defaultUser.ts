// Create default credentials for tests
import * as dotenv from 'dotenv';
dotenv.config();

export type UserCredentials = {
    email : string;
    password : string;
};

export const defaultUser: Record<string, UserCredentials> = {
    superadmin : {
        email : process.env.DEFAULT_EMAIL || '',
        password : process.env.DEFAULT_PASSWORD || '',
    },
    admin : {
        email: process.env.ADMIN_EMAIL || '',
        password: process.env.ADMIN_PASSWORD || '',
    }
};

console.log('Superadmin Credentials:', defaultUser.superadmin);
