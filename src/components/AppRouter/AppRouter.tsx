import {Route, Routes} from 'react-router-dom';
import {MainPage} from "@/pages/MainPage";
import {RequireAuth} from "@/components/RequireAuth";
import {UserRoles} from "@/store/reducers/UserSliceSchema";
import {GoodPage} from '@/pages/GoodPage'
import {CategoryPage} from "@/pages/CategoryPage/CategoryPage";
import {CartPage} from "@/pages/CartPage";

export const AppRouter = () => (
        <Routes>
            <Route path="/" element={
                <MainPage/>
            }/>
            <Route path="/admin" element={
                <RequireAuth roles={[UserRoles.ADMIN]}>
                    <div>admin page</div>
                </RequireAuth>
            }/>
            <Route path="/goods" element={
                <CategoryPage/>
            }/>
            <Route path="/goods/:id" element={
                <GoodPage/>
            }/>
            <Route path="/cart" element={
                <RequireAuth roles={[UserRoles.ADMIN, UserRoles.USER]}>
                    <CartPage/>
                </RequireAuth>
            }/>
            {/*<Route path="*" element={<Navigate to="/404page" replace />}/>*/}
        </Routes>
);
