import React from 'react';
import { FaSpinner} from 'react-icons/fa';
import styles from './Spiner.module.css'

export default function Spiner() {
  return (
    <div className={styles.spinner}><FaSpinner  className={styles.spinning} size={35} /></div>
  )
}
