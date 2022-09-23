import { v4 as uuid } from 'uuid'
import { Importance } from 'models/Importance'

export interface Todo {
	id: string
	text: string
	done: boolean
	importance: Importance
}

export const createTodo = (text: string): Todo => ({
	id: uuid(),
	text: text,
	done: false,
	importance: 2
})
