import React from 'react';
import SiderMenu from './SiderMenu';

/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menus
 */
const getFlatMenuKeys = menuData => {
  let keys = []; // 路由路径数组
  menuData.forEach(item => {
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
    keys.push(item.path);
  });
  return keys;
};

const SiderMenuWrapper = props => {
  const { menuData } = props;
  return <SiderMenu {...props} flatMenuKeys={getFlatMenuKeys(menuData)} />;
};

export default SiderMenuWrapper;
