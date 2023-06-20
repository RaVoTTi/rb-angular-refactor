import { IAutor } from "./IAutor"
import { IEvaluation } from "./IEvaluation"
import { IMinIBook } from "./IMinIBook"
import { ISubject } from "./ISubject"


export interface IBook extends IMinIBook{
  _id:string
  autor: IAutor
  subject: ISubject
  name: string
  state: boolean
  isFeatured: boolean
  image: string
  price: number
  dateCreated?: Date
  content: string
  evaluation: IEvaluation[]
  // rating?: number
  description?: string
  // numReviews?: number
}
