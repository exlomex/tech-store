import { Route, Routes } from 'react-router-dom';
import { MainPage } from "@/pages/MainPage";
import { RequireAuth } from "@/components/RequireAuth";
import { UserRoles } from "@/store/reducers/UserSliceSchema";
import { GoodPage } from '@/pages/GoodPage'
import {CategoryPage} from "@/pages/CategoryPage/CategoryPage";

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
            <Route path="/admin" element={
                <RequireAuth role={UserRoles.ADMIN}>
                    <div>admin page</div>
                </RequireAuth>
            }/>
            <Route path="/goods" element={
                <CategoryPage/>
            }/>
            <Route path="/goods/:id" element={
                <GoodPage/>
            }/>
            {/*<Route path="*" element={<Navigate to="/404page" replace />}/>*/}
        </Routes>
);
