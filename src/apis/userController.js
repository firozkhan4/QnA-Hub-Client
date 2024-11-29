class UserController {
  constructor() {
    this.baseURL = 'http://13.201.7.212:8000/api/users';
  }

  async getAll() {
    try {
      const response = await fetch(this.baseURL, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          'Something Went wrong in User Controller GetAll function:'
        );
      }

      const jsonData = await response.json();

      return jsonData;
    } catch (error) {
      console.error(
        'UserController\t',
        'Error in Fetching all users',
        error.message
      );
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await fetch(this.baseURL + '/' + id, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong in Deleting the user');
      }

      return true;
    } catch (error) {
      console.error('UserController\t', 'Error in Delete users', error.message);
      throw error;
    }
  }
}

export default UserController;
