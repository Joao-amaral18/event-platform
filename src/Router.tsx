import { Route, Routes } from 'react-router-dom'
import Event from './pages/Event'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<h1>a</h1>} />
            <Route path='/event/lesson/:slug' element={<Event />} />
        </Routes>
    )
}
