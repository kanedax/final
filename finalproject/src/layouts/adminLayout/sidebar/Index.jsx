import React, { useContext } from 'react';
import { AdminContext } from '../../../contexts/AdminLayoutContext';
import Avatar from './Avatar';
import SidebarGroupTitle from './SidebarGroupTitle';
import SidebarItem from './SidebarItem';

const Index = () => {
    const {showSidebar} = useContext(AdminContext);
    return (
        <section id="sidebar_section">
            <div className={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}>
                <div className="p-0 m-0">
                    <Avatar name="قاسم بساکی" imagepath={"/assets/images/avatar/user2.jpg"}/>
                    <SidebarItem  targetPath={'/'} title="داشبورد" icon="fas fa-tachometer-alt"/>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="فروشگاه"/>
                    <SidebarItem  targetPath={'CategoryManagement'} title="مدیریت گروه محصول" icon="fas fa-stream"/>
                    <SidebarItem  targetPath={'ProductManagement'} title="مدیریت محصول" icon="fas fa-cube"/>
                    <SidebarItem  targetPath={'BrandManagement'} title="مدیریت برندها" icon="fas fa-copyright"/>
                    <SidebarItem  targetPath={'GuaranteeManagement'} title="مدیریت گارانتی ها" icon="fab fa-pagelines"/>
                    <SidebarItem  targetPath={'ColorManagement'} title="مدیریت رنگ ها" icon="fas fa-palette"/>
                    <SidebarItem  targetPath={'DiscountManagement'} title="مدیریت تخفیف ها" icon="fas fa-percentage"/>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="سفارشات و سبد"/>
                    <SidebarItem  targetPath={'CartManagement'} title="مدیریت سبد ها" icon="fas fa-shopping-basket"/>
                    <SidebarItem  targetPath={'OrderManagement'} title="مدیریت سفارش ها" icon="fas fa-luggage-cart"/>
                    <SidebarItem  targetPath={'DeliveryManagement'} title="مدیریت  نحوه ارسال" icon="fas fa-truck-loading"/>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="کاربران و همکاران"/>
                    <SidebarItem  targetPath={'UserManagement'} title="مشاهده کاربران" icon="fas fa-users"/>
                    <SidebarItem  targetPath={'RolesManagement'} title="نقش ها" icon="fas fa-user-tag"/>
                    <SidebarItem  targetPath={'PermisionManagement'} title="مجوز ها" icon="fas fa-shield-alt"/>
                    {/* <!-- =================================== --> */}
                    <SidebarGroupTitle title="ارتباطات"/>
                    <SidebarItem  targetPath={'QuestionManagement'} title="سوالات" icon="fas fa-question-circle"/>
                    <SidebarItem  targetPath={'CommentManagement'} title="نظرات" icon="fas fa-comment"/>
                </div>
            </div>
        </section>
    );
}

export default Index;
