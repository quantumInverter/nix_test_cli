import QuestionsIndex from './components/questions/QuestionsIndex'
import QuestionForm from './components/questions/QuestionForm'
import Question from './components/questions/Question'
import User from './components/users/User'
import Login from './components/users/Login'
import UserForm from './components/users/UserForm'
import PageNotFound from './components/errors/PageNotFound'

export const routes = [
  {
    name: 'root',
    path: '/questions',
    component: QuestionsIndex,
    alias: '/'
  },
  {
    name: 'sign_up',
    path: '/sign_up',
    component: UserForm
  },
  {
    name: 'sign_in',
    path: '/sign_in',
    component: Login
  },
  {
    name: 'question-form',
    path: '/questions/new',
    component: QuestionForm
  },
  {
    name: 'question',
    path: '/questions/:id',
    component: Question
  },
  {
    name: 'user',
    path: '/users/:id',
    component: User
  },
  {
    path: '*',
    component: PageNotFound
  }
]
