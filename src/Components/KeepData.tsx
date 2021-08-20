import { useSelector, useDispatch } from 'react-redux'
import ApplicationState from '../Types/ApplicationState'
import actions from '../Redux/Actions'

const styles = {
  checkbox: { marginRight: 5, display: 'inline-block', width: 'auto' },
  label: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline'
  }
}
const KeepData = () => {
  const dispatch = useDispatch()
  const keepData = useSelector<ApplicationState, boolean>(state => state.keepData)
  const onChangeHandler = (e: any) => {
    dispatch({
      type: actions.UPDATE_KEEPDATA,
      payload: {
        value: e.target.checked
      }
    })
  }
  return (
    <div className="checkbox">
      <label style={styles.label}>
        <input style={styles.checkbox} type="checkbox" defaultChecked={keepData} onChange={onChangeHandler} />
        {'Keep my data saved on this device'}
      </label>
    </div>
  )
}

export default KeepData
