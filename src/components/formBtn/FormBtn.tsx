import formBtnStyle from './FormBtn.module.css'

type FormBtnProps = {
  text: string,
}

const FormBtn = ({text}: FormBtnProps) => {
  return (
    <button className={formBtnStyle.btn}>
      {text}
    </button>
  )
}

export default FormBtn
