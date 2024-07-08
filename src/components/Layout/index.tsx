// // // main_app/src/components/Layout.js

// // import React from 'react';
// // import { Link, Outlet } from 'react-router-dom';

// // const Layout = () => {
// //     return (
// //         <div style={{ display: 'flex' }}>
// //             <nav style={{ width: '200px', padding: '20px', background: '#f0f0f0' }}>
// //                 <ul>
// //                     <li><Link to="/">Home</Link></li>
// //                     <li><Link to="/vehicles">Vehicles</Link></li>
// //                     <li><Link to="/foods">Foods</Link></li>
// //                     {/* 这里可以根据需要添加更多菜单项 */}
// //                 </ul>
// //             </nav>
// //             <div style={{ flex: 1, padding: '20px' }}>
// //                 {/* 右侧内容展示区域 */}
// //                 {/* 使用 React Router 的 Outlet 来展示当前路由匹配的组件 */}
// //                 <Outlet />
// //             </div>
// //         </div>
// //     );
// // };

// // export default Layout;


// // main_app/src/components/Layout.js
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const Layout = ({ subApps }) => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <nav style={{ width: '200px', padding: '20px', background: '#f0f0f0' }}>
//         <ul>
//           {subApps.map((subApp, index) => (
//             <li key={index}><a href={`/${subApp.name}`}>{subApp.name}</a></li>
//           ))}
//         </ul>
//       </nav>
//       <div style={{ flex: 1, padding: '20px' }}>
//         {/* 右侧内容展示区域 */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;