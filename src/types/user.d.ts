interface User {
    name?: string;
    avatar?: string;
    mobile?: number;
    auths?: string[],
    data:Object
}

interface UserState {
    userInfo: Nullable<User>;
}

export type{
    User,
    UserState
}