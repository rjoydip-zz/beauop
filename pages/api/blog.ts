import { getBlogData } from '../../utils'
import { NextApiRequest, NextApiResponse } from 'next'
import { DataEntry } from '../../types/data'

export default (_: NextApiRequest, res: NextApiResponse<DataEntry>) => {
  res.send(getBlogData())
}
