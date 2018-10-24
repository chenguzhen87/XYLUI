// import React, { Fragment } from 'react';
// // import { formatMessage } from 'umi/locale';
// import Link from 'umi/link';
// import { Icon } from 'antd';
// import GlobalFooter from '@/components/GlobalFooter';
// // import SelectLang from '@/components/SelectLang';
// import styles from './UserLayout.less';
// import logo from '../assets/logo.svg';

// const copyright = (
//   <Fragment>
//     Copyright <Icon type="copyright" />
//     2015 版权所有 深圳市新运力科技开发有限公司
//     <a href="http://www.miitbeian.gov.cn/" target="_blank" rel="noopener noreferrer">
//       粤ICP备15054320号-3
//     </a>
//   </Fragment>
// );

// class UserLayout extends React.PureComponent {
//   // @TODO title
//   // getPageTitle() {
//   //   const { routerData, location } = this.props;
//   //   const { pathname } = location;
//   //   let title = 'Ant Design Pro';
//   //   if (routerData[pathname] && routerData[pathname].name) {
//   //     title = `${routerData[pathname].name} - Ant Design Pro`;
//   //   }
//   //   return title;
//   // }

//   render() {
//     const { children } = this.props;
//     return (
//       // @TODO <DocumentTitle title={this.getPageTitle()}>
//       <div className={styles.container}>
//         <div className={styles.content}>
//           <div className={styles.top}>
//             <div className={styles.header}>
//               <Link to="/">
//                 <img alt="logo" className={styles.logo} src={logo} />
//                 <span className={styles.title}>Ant Design</span>
//               </Link>
//             </div>
//           </div>
//           {children}
//         </div>
//         <GlobalFooter copyright={copyright} />
//       </div>
//     );
//   }
// }

// export default UserLayout;
