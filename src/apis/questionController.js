class QuestionController {
  constructor() {
    this.baseURL = 'http://13.233.86.88:8000/api/questions';
  }

  async getByID(id) {
    try {
      const response = await fetch(`${this.baseURL}/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const jsonData = response.json();

      return jsonData;
    } catch (error) {
      console.error(
        'QuestionController:\t',
        'Error to fetch Question By Id: ',
        id,
        error.message
      );
    }
  }

  async getAll() {
    try {
      const response = await fetch(this.baseURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(
        'QuestionController:\t',
        'Error to fetch All Question: ',
        id,
        error.message
      );
    }
  }

  async getCurrentUserQuestions() {
    try {
      const response = await fetch(this.baseURL + '/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(
        'Question Controller:\t',
        'Error to fetch All Current User Questions: ',
        id,
        error.message
      );
    }
  }

  async searchQuestions(input) {
    try {
      const response = await fetch(this.baseURL + '/search/' + input, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error(
        'Question Controller:\t',
        'Error to fetch Search Questions: ',
        error.message
      );
    }
  }

  async deleteQuestion(id) {
    try {
      const response = await fetch(this.baseURL + '/' + id, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Delete Question');
      }
    } catch (error) {
      console.error(
        'Question Controller:\t',
        'Error to Delete Question: ',
        error.message
      );
    }
  }
}

export default QuestionController;
