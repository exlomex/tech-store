import {Route, Routes} from 'react-router-dom';
import {MainPage} from "@/pages/MainPage";
import {RequireAuth} from "@/components/RequireAuth";
import {UserRoles} from "@/store/reducers/UserSliceSchema";

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
                <div>goods by category page</div>
            }/>
            <Route path="/goods/:id" element={
                <div>good page</div>
            }/>
            {/*<Route path="*" element={<Navigate to="/404page" replace />}/>*/}
        </Routes>
);
