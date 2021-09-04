import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { LangLevel } from '../Types/Language'
import { SkillLevel } from '../Types/Skill'

interface LevelProps {
  cid: number
  options: typeof LangLevel | typeof SkillLevel
  actionType: string
  value?: string
}
const Level = ({ value, actionType, cid, options }: LevelProps) => {
  const dispatch = useDispatch()
  const op = Object.values(options).map(item => ({ value: item, label: item }))
  const onChangeHandler = (e: any) => {
    dispatch({
      type: actionType,
      payload: {
        id: cid,
        value: { level: e.value, value: Object.values(options).indexOf(e.value) + 1 }
      }
    })
  }
  const styles = {
    control: (provided: any) => {
      return { ...provided, backgroundColor: 'rgb(230, 244, 255)', border: 0, boxShadow: 0 }
    },
    container: (provided: any) => {
      return { ...provided, marginTop: 5 }
    }
  }
  return (
    <div className="level input-field item">
      <span>Level</span>
      <br />
      <div className="select">
        <Select defaultValue={{ label: value, value }} isSearchable={false} options={op} styles={styles} onChange={onChangeHandler} />
      </div>
    </div>
  )
}

export default Level
