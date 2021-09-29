import { useAuth0 } from "@auth0/auth0-react";
import { NextPage } from "next";
import { useGetAdminUserQuery } from "../../../types/generated/types";
import AdminLayout from "../../components/admin/AdminLayout";

type Props = {};

const Login: NextPage<Props> = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const { data: adminData, loading: adminLoading } = useGetAdminUserQuery();
  console.log("Login page", adminData);

  return (
    <AdminLayout>
      <h1 className="font-bold text-center text-2xl text-gray-500">
        {!isAuthenticated ? "Login" : "Logout"}
      </h1>
      <div className="text-center">
        {!isAuthenticated ? (
          <button
            className="mt-10 px-3 py-2 block w-full bg-fandango text-center text-white font-bold rounded-full"
            onClick={() => loginWithRedirect()}
          >
            ログイン
          </button>
        ) : (
          <button
            className="mt-10 px-3 py-2 block w-full bg-fandango text-center text-white font-bold rounded-full"
            onClick={() => logout()}
          >
            ログアウト
          </button>
        )}
      </div>
    </AdminLayout>
  );
};
export default Login;
