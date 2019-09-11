class FeedbackService {
  constructor(solution) {
    this.solution = solution;
    this.attempts = [];
    this.feedback = [];
  }

  won(placement) {
    let counter = 0;
    for (let i = 0; i<this.solution.length; i++) {
      if (this.solution[i] == placement[i]) {
        counter ++;
      }
    }
    if (counter == 4) {
      return true
    }
    else {
      return false
    }
  }

  checkPlacement(placement) {
    let checked = true;
    for(let i = 0; i<placement.length;i++) {
      if (placement[i] == '') {
        checked =  false;
      }
    }
    return checked
  }

  getAttempts(placement) {
    this.attempts.push({placement})
    return this.attempts;
  }

  getFeedback(placement) {
    let solution = this.solution;
    let correctPositions = [];
    let correctColors = [];
    for(let i = 0;i < solution.length; i++) {
      if(placement[i] == solution[i]) {
        correctPositions.push(placement[i]);
      }
      else if(solution[i].includes(placement[i])) {
        correctColors.push(placement[i]);
      }
    }
    this.feedback.push([correctPositions.length,correctColors.length])
    console.log(`placement: ${placement}`);
    console.log(correctPositions);
    console.log(correctColors);
    return this.feedback
  }
}

module.exports = FeedbackService;
