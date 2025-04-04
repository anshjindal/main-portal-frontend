import { useImmer } from "use-immer";
export function useForm (inputFields) {
    const [ formData, setFormData] = useImmer(inputFields)
    const handleOnChange = (e) => {
        const { name, value} = e.target
        setFormData((draft)=>{
            draft[name] = value
        })
    }
    const resetForm = (value) => {
        console.log(value)
        setFormData(value)
    }

    return {
      handleOnChange,
      formData,
      resetForm
    }
}