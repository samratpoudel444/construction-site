
interface UserAttributes{
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    last: string;
    createdAt: Date;
    updatedAt: Date;
}

type UserCreationAttribute= Optional<UserAttributes, 'id' | "createdAt">