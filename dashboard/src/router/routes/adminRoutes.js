import {lazy} from "react";
import Comment from "../../views/admin/Comment";
import UserDetails from "../../views/auth/UserDetails";
import Shipping from "../../views/admin/Shipping";

const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const Category = lazy(() => import("../../views/admin/Category"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const Users = lazy(() => import("../../views/admin/Users"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));
const EditProduct = lazy(() => import("../../views/admin/EditProduct"))
export const adminRoutes = [
    {
        path: "admin/dashboard",
        element: <AdminDashboard/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/users",
        element: <Users/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/orders",
        element: <Orders/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/category",
        element: <Category/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/sellers",
        element: <Sellers/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/payment-request",
        element: <PaymentRequest/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/edit-product/:productId",
        element: <EditProduct/>,
        role: "admin",
    },
    //edit-product
    {
        path: "admin/dashboard/deactive-sellers",
        element: <DeactiveSellers/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/shipping",
        element: <Shipping/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/user/details/:userId",
        element: <UserDetails/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/sellers-request",
        element: <SellerRequest/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/seller/details/:sellerId",
        element: <SellerDetails/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/chat-sellers",
        element: <ChatSeller/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/chat-sellers/:sellerId",
        element: <ChatSeller/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/order/details/:orderId",
        element: <OrderDetails/>,
        role: "admin",
    },
    {
        path: "admin/dashboard/comments",
        element: <Comment/>,
        role: "admin",
    },
];
