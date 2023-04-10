import style from '../../styles/LinkBar.module.scss'

export default function LinkBar() {
  return (
    <div className="linkbar mt-20 flex flex-row flex-wrap gap-5 items-center justify-center">
      <span className={style.link}>參與社團</span>
      <span className={style.link}>歷屆成員</span>
      <span className={style.link}>社群文章</span>
      <span className={style.link}>內部分組</span>
      <span className={style.link}>近期活動</span>
      <span className={style.link}>贊助單位</span>
    </div>
  )
}