import AppLayout from './AppLayout'
import styles from './page.module.css'
import { Button } from 'antd'

export default function Home() {
  return (
    <AppLayout>
         <Button type='default'>hello</Button>
    </AppLayout>
  )
}
