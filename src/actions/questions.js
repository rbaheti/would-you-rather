import {RECEIVE_QUESTIONS} from "./types";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}
