import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSidebar, NavItems } from "../../../components";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function clientLoader() {
  console.log("clientLoader: Started");
  try {
    const user = await account.get();

    if (!user?.$id) {
      return redirect("/sign-in");
    }

    const existingUser = await getExistingUser(user.$id);

    if (existingUser?.status === "user") {
      return redirect("/");
    }

    let result;
    if (existingUser?.$id) {
      result = existingUser;
    } else {
      result = await storeUserData();
    }
    return result;
  } catch (e) {
    console.error("Error in client loader:", e); // console.errorの方が見やすいかも
    console.log("clientLoader: Caught error, redirecting to /sign-in");
    return redirect("/sign-in");
  }
}

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar />
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent id="sidebar" width="270px" enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
