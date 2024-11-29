class AuthController {
  constructor() {
    this.baseURL = 'http://13.201.7.212:8000/api/auth';
  }

  async logout() {
    try {
      const response = await fetch(`${this.baseURL}/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong in Logout');
      }

      return true;
    } catch (error) {
      console.error('AuthController\t', 'Error in Logout: ', error.message);
      throw error;
    }
  }
}

export default AuthController;
