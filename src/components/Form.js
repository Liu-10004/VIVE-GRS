import React from 'react'
import cx from 'classnames'
import Button from 'components/Button'
import styles from './Form.scss'

const Radio = ({ index, disabled, currentSelection, text, onSelect }) => <Button key={index} className={styles.option} onClick={onSelect} disabled={disabled}>
  <span className={styles.outterCircle}>
    <span
      className={cx(styles.innerCircle, {
        [styles.selected]: currentSelection,
      })}
    /> </span>
  <span className={styles.text}>{text}</span>
</Button>

const FormCard = ({ children, title, tips }) => <div className={styles.formCard}>
  <div className={styles.header}>
    <h2>{title}</h2>
    {tips && <span>{tips}</span>}
  </div>
  <div>
    {children}
  </div>
</div>

const MemberCard = ({ index, data, editable, update ,del,len}) => {
  console.log('card-data',data)
  const { type, name, phone, dept, identityNum } = data
  const validatorSet = new Set(type.validator.split('|'))

  return (<div className={styles.memberCard}>
    <div className={styles.formItem}>
      <span>成员身份({parseInt(index, 10) + 1})</span>
      { !editable
        ? <input readOnly="true" className={styles.input} value={type.value} />
        : <div className={styles.radioGroup}>
          <Radio 
            disabled={!editable || (editable && !validatorSet.has('指导老师'))} currentSelection={type.value === '指导老师'} 
            index="0" 
            text="指导老师" 
            onSelect={() => update(index, { field: 'type', value: '指导老师' })} />
          {/* <Radio disabled={!editable || (editable && !validatorSet.has('参赛老师'))} currentSelection={type.value === '参赛老师'} index="1" text="参赛老师" onSelect={() => update(index, { field: 'type', value: '参赛老师' })} /> */}
          <Radio 
            disabled={!editable || (editable && !validatorSet.has('参赛学生'))} currentSelection={type.value === '参赛学生'} 
            index="2" 
            text="参赛学生" 
            onSelect={() => update(index, { field: 'type', value: '参赛学生' })} />
          <Button 
            className={cx(styles.option,styles.btn)} 
            onClick={()=>{del(index)}}
            disabled={!editable } >
            删除该成员
          </Button>
        </div>
      }
    </div>
    <div className={styles.formItem}>
      <span>成员姓名</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: name.error })} value={name.value} onChange={e => update(index, { field: 'name', value: e.target.value })} />
    </div>
    <div className={styles.formItem}>
      <span>院系/专业</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: dept.error })} value={dept.value} onChange={e => update(index, { field: 'dept', value: e.target.value })} />
    </div>
    <div className={styles.formItem}>
      <span>联系电话</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: phone.error })} value={phone.value} onChange={e => update(index, { field: 'phone', value: e.target.value })} />
    </div>
    <div className={styles.formItem}>
      <span>身份证号码</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: identityNum.error })} value={identityNum.value} onChange={e => update(index, { field: 'identityNum', value: e.target.value })} />
    </div>
  </div>)
}

const SchoolCard = ({ data, editable, update }) => {
  // const { name, dept, teacher, job, phone } = data
  const { name, dept } = data

  return (<div className={styles.schoolCard}>
    <div className={styles.formItem}>
      <span>学校名称</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: name.error })} value={name.value} onChange={e => update({ field: 'name', value: e.target.value })} />
    </div>
    <div className={styles.formItem}>
      <span>院系专业</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: dept.error })} value={dept.value} onChange={e => update({ field: 'dept', value: e.target.value })} />
    </div>
    {/* <div className={styles.formItem}>
      <p className={styles.row}>
        <span>负责老师姓名</span>
        <input readOnly={!editable} className={cx(styles.input, styles.sm, { [styles.error]: teacher.error })} value={teacher.value} onChange={e => update({ field: 'teacher', value: e.target.value })} />
      </p>
      <p className={styles.row}>
        <span>职务</span>
        <input readOnly={!editable} className={cx(styles.input, styles.sm, { [styles.error]: job.error })} value={job.value} onChange={e => update({ field: 'job', value: e.target.value })} />
      </p>
    </div>
    <div className={styles.formItem}>
      <span>联系电话</span>
      <input readOnly={!editable} className={cx(styles.input, { [styles.error]: phone.error })} value={phone.value} onChange={e => update({ field: 'phone', value: e.target.value })} />
    </div> */}
  </div>)
}

export { FormCard, MemberCard, SchoolCard }
