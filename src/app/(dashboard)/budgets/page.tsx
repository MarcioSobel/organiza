import { StandardDefinition } from '@phosphor-icons/react'
import styles from './Budgets.module.css'
import { TesteGraf } from '@/app/(dashboard)/budgets/viewsTest'



export default function Budgets() {
  return (
    <section className={styles.budgets_container}>
      <h1>
        <span>Orçamento</span>
        </h1>
      <p>Comece a gerenciar os seus Orçamento e planejamentos financeiros!</p>
        <TesteGraf/>
    </section>
  

  
  )
}
