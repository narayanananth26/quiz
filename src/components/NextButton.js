import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
	// if (answer === null) return null;
	const { dispatch, index, numQuestions } = useQuiz();
	if (index < numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "nextQuestion" })}
			>
				Next
			</button>
		);

	if (index === numQuestions - 1)
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "finish" })}
			>
				Finish
			</button>
		);
}

export default NextButton;
