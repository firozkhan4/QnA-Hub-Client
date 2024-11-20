class AnswerController {
  constructor() {
    this.baseURL = 'http://localhost:8080/api/answers';
  }
  async create(answerPayload) {
    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerPayload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Something went wrong AnswerController'
        );
      }

      return data;
    } catch (error) {
      console.error('Error in creating answer:', error.message);
      throw error;
    }
  }

  async getAllAnswer(questionId) {
    try {
      const response = await fetch(this.baseURL + '/question/' + questionId, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const jsonData = await response.json();

      if (!response.ok) {
        throw new Error(
          jsonData.message || 'Something Went Wrong in AnswerController'
        );
      }

      return jsonData;
    } catch (error) {
      console.error('Error in getting all answer:', error.message);
      throw error;
    }
  }
}

export default AnswerController;
