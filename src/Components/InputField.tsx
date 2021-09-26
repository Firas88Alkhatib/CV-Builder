import { useDispatch } from 'react-redux'

import { debounce } from '../Helpers/Util'

interface InputFieldProps {
  inputType?: string
  label: string
  name: string
  cid?: number
  value?: string
  action: Function
}

const InputField = ({ cid, label, name, value, action }: InputFieldProps) => {
  const dispatch = useDispatch()
  const onChangeHandler = debounce((e: any) => {
    dispatch(action(cid, name, e.target.value))
  }, 700)

  return (
    <div className="input-field item">
      <label>
        <span className="input-field-label">{label}</span>
        <br />
        <input defaultValue={value} name={name} onChange={onChangeHandler}></input>
      </label>
    </div>
  )
}
export default InputField
