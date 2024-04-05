import styles from './style.module.css'

const DocsPage = ({ params, searchParams }) => {
  console.log(params)
  console.log(searchParams)
  return (
    <div>
      docs with params -<p className={styles.title}>{params.id}</p>
    </div>
  )
}

export default DocsPage
