import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <div>main</div>
            }/>
            <Route path="/login" element={
                <div>login</div>
            }/>
            <Route path="/register" element={
                <div>register</div>
            }/>
        </Routes>
);
