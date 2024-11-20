class QuestionController {
  constructor() {
    this.baseURL = 'http://localhost:8080/api/questions';
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
    } catch (error) {
      console.error(
        'QuestionController:\t',
        'Error to fetch Question By Id: ',
        id,
        error.message
      );
      throw error;
    }
  }
}

export default QuestionController;
