import useNewSubForm from "../hooks/useNewSubForm";
import { Sub } from "../types";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  //const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    dispatch({type: 'clear'})
    // handleClear(); 
  };

  const [inputValues, dispatch] = useNewSubForm();

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({
      type: "clear",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          onChange={handleChange}
          type="text"
          name="nick"
          placeholder="Nick name"
        />
        <input
          value={inputValues.subMonths}
          onChange={handleChange}
          type="text"
          name="subMonths"
          placeholder="SubMonths"
        />
        <input
          value={inputValues.avatar}
          onChange={handleChange}
          type="text"
          name="avatar"
          placeholder="Avatar"
        />
        <textarea
          value={inputValues.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
        <button onClick={handleClear} type="button">
          Clear the Form
        </button>
        <button type="submit">Save Subscription</button>
      </form>
    </div>
  );
};

export default Form;