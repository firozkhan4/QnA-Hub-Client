import { useContext, useEffect, useState } from 'react';
import Controllers from '../apis';
import { Avatar, Notification } from '../components';
import { NotificationContext } from '../contexts/NotificationContext';

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const { showNotification, handleNotification } =
    useContext(NotificationContext);

  const fetchUsers = async () => {
    const userController = new Controllers.UserController();

    try {
      const response = await userController.getAll();
      setUsers(response || []);
      console.log(response);
    } catch (error) {
      console.error(
        'Users Management\t',
        'Error in fetching Users:',
        error.message
      );
    }
  };

  const deleteUser = async (id) => {
    const userController = new Controllers.UserController();

    try {
      await userController.delete(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      handleNotification(`User ${id} deleted successfully.`);
    } catch (error) {
      console.error(
        `Users Management\t Error deleting user ${id}:`,
        error.message
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users Management</h1>
      <div className="grid grid-cols-1  gap-4">
        {users.map((user, index) => (
          <UserCard
            key={index}
            username={user.username}
            onDelete={() => deleteUser(user.id)}
          />
        ))}
      </div>
    </div>
  );
}

const UserCard = ({ username, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded hover:shadow-sm border">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12 mr-4" />
        <div>
          <p className="text-lg font-medium">{username}</p>
        </div>
      </div>
      <button
        onClick={onDelete}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};
