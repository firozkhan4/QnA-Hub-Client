import { useEffect } from 'react';
import Controllers from '../apis';

export default function Logout() {
  const authController = new Controllers.AuthController();
  useEffect(() => {
    const logout = async () => {
      try {
        await authController.logout();
        window.location.reload();
      } catch (error) {
        console.error('Logout Page\t', Error.message);
        window.location.reload();
      }
    };

    logout();
  }, []);
  return <div>Logout</div>;
}
