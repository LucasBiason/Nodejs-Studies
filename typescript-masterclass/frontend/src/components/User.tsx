import React from 'react';

export interface IUser {
    name: string;
    email: string;
  }

interface Props {
    user: IUser;
}

export const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name} <br/>
            <strong>E-mail: </strong> {user.email} <br/>
            <hr/>
        </div>
    );
};

