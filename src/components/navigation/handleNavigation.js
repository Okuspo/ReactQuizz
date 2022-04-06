import { useNavigate } from 'react-router-dom'
function handleNavigation (id, limit) {
  const navigate = useNavigate()
  if (id === limit) {
    navigate('/gameover')
  } else {
    navigate(`/quizz/${id + 1}`)
  }
}

export { handleNavigation }
