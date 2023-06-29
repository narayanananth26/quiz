import Options from "./Options";

function Question({ question }) {
	const { statement, options, correctOption, points } = question;

	return (
		<div>
			<h4>{statement}</h4>
			<Options options={options} />
		</div>
	);
}

export default Question;
