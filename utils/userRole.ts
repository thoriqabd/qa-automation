// Used for user role management in Vlepo tests
import {defaultUser, UserCredentials} from './defaultUser';

export const getUserRole = (role: keyof typeof defaultUser): UserCredentials => {
    const user = defaultUser [role];

    if (!user || !user.email.trim() || !user.password.trim() ){
        throw new Error (`Role "$[role]" is not valid`)
    }

    return user; 
}

// type role = keyof typeof defaultUser;

// export const getUserRole = (role : 'superadmin' | 'admin') => {
//     return defaultUser[role];
// };