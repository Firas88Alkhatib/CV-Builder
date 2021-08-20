import { useDispatch } from 'react-redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface StartEndProps {
  onChange?: Function
  cid: number
  startDate?: Date | null
  endDate?: Date | null
  actionType: string
}

const StartEnd = ({ actionType, startDate, endDate, cid }: StartEndProps) => {
  const dispatch = useDispatch()
  const onChangeHandler = (actionType: string, id: number, fieldName: string, date: any) => {
    dispatch({ type: actionType, payload: { id, value: { [fieldName]: date } } })
  }
  return (
    <div className="start-end-container">
      <span className="startend-label">Start & End Date</span>
      <br />
      <div className="dates">
        <div className="time-item">
          <DatePicker
            dateFormat="MM / yyyy"
            showMonthYearPicker
            closeOnScroll={true}
            selected={startDate && new Date(startDate)}
            onChange={date => onChangeHandler(actionType, cid, 'startDate', date)}
          />
        </div>
        <div className="time-item">
          <DatePicker
            dateFormat="MM / yyyy"
            showMonthYearPicker
            closeOnScroll={true}
            selected={endDate && new Date(endDate)}
            onChange={date => onChangeHandler(actionType, cid, 'endDate', date)}
          />
        </div>
      </div>
    </div>
  )
}

export default StartEnd
