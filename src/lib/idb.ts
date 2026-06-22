import { openDB } from 'idb'

const DB_NAME = 'reporte-tecnico-db'
const DB_VERSION = 1
const STORE_REPORTS = 'reports'

async function getDb() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_REPORTS)) {
        db.createObjectStore(STORE_REPORTS, { keyPath: 'id' })
      }
    }
  })
}

export async function saveReport(report: any) {
  const db = await getDb()
  await db.put(STORE_REPORTS, report)
}

export async function getAllReports() {
  const db = await getDb()
  return db.getAll(STORE_REPORTS)
}
