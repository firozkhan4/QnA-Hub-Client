class QuestionVotingController {
  constructor() {
    this.baseURL = 'http://13.233.86.88:8000/api/question-vote';
  }

  async vote(id, voteType) {
    try {
      const response = await fetch(`${this.baseURL}/${voteType}`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong in Question Voting: ');
      }
      const jsonData = await response.json();

      return jsonData;
    } catch (error) {
      console.error(
        'Question Voting Controller\t',
        'Error in QuestionVoting :',
        error.message
      );
      throw error;
    }
  }

  async upVote(id) {
    return await this.vote(id, 'upvote');
  }
  async downVote(id) {
    return await this.vote(id, 'downvote');
  }
}

export default QuestionVotingController;
