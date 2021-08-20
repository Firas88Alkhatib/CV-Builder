import { useDispatch } from 'react-redux'
import { debounce } from '../Helpers/Util'

interface TextFieldProps {
  inputType?: string
  label: string
  name: string
  onChange?: Function
  actionType: string
  cid?: number
  value?: string
}

const TextField = ({ value, cid, label, actionType, name, onChange }: TextFieldProps) => {
  const dispatch = useDispatch()
  const onChangeHandler = debounce((e: any) => {
    dispatch({ type: actionType, payload: { id: cid, value: { [name]: e.target.value } } })
  }, 500)
  return (
    <div className="text-field">
      <label>
        <span>{label}</span>
        <br />
        <textarea defaultValue={value} name={name} onChange={onChangeHandler}></textarea>
      </label>
    </div>
  )
}

export default TextField
