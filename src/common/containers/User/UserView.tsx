import * as React from 'react';

interface IUserViewProps {
  userName: string;
  onChange: React.EventHandler<React.ChangeEvent<any>>;
}

const UserView: React.StatelessComponent<IUserViewProps> = ({
  userName,
  onChange,
}: IUserViewProps) => (
  <div>
    Current user: <input onChange={onChange} value={userName} />
  </div>
);

export default UserView;
