function sideNavigationHeight(screenHeight) {
  return screenHeight * 1.0;
}

function sideNavigationWidth(screenWidth) {
  return screenWidth * 0.25;
}

function sideNavigationItemHeight(screenHeight) {
  return screenHeight * 0.10;
}

function sideNavigationItemWidth(screenWidth) {
  return sideNavigationWidth(screenWidth);
}

export {
  sideNavigationHeight,
  sideNavigationWidth,
  sideNavigationItemHeight,
  sideNavigationItemWidth
}