import dayjs from 'dayjs'
import dataJSON from '../data.json'
import relativeTime from 'dayjs/plugin/relativeTime'
import { DataEntry } from '../types/data'

dayjs.extend(relativeTime)

export function getBlogData(): DataEntry {
  return dataJSON || []
}

export const dayFromNow = (date: string) => dayjs().from(dayjs(date))
