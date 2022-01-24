<template>
  <router-view />
</template>

<style lang="scss">
.w-8 {
  width: 2em;
}
.h-4 {
  height: 1em;
}
.h-6 {
  height: 1.5em;
}
.opacity-50 {
  opacity: 0.5;
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #f2fbff;
  border-radius: 0.5em;
  color: #222;
  padding: 2em 0;
}
.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  border-right: 0 !important;
}
.ant-card-body {
  padding: 12px;
}
.card__frame {
  background: #f8fafd;
  border-radius: 0.5em;
  width: 100%;
  height: 300px;
  text-align: center;
  img {
    margin: 0.5em 0;
    border-radius: 0.5em;
    width: 90%;
    height: 280px;
    background-position: center;
    background-size: contain;
  }
}
.ant-layout-header {
  background: #fff !important;
}
.smallnav {
  text-align: center;
  display: flex;
  align-items: center;
  &__pill {
    color: #0d75ff;
    padding: 1em 3.5em;
    background: rgba(13, 117, 255, 0.05);
    border-radius: 30px;
    letter-spacing: 0.02em;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  &__icon {
    margin: 0 2em;
  }
  &__total {
    color: #222;
    font-weight: 600;
    letter-spacing: 0.03em;
    font-size: 14px;
    line-height: 17px;
  }
}
@media screen and (max-width: 768px) {
  .smallnav {
    width: 100%;
    &__pill {
      padding: 1em 2em;
    }
    &__icon {
      margin: 0 1.5em;
    }
  }
}
.book-detail {
  &__img {
    text-align: center;
    margin-bottom: 2em;
    img {
      width: 300px;
      height: auto;
    }
  }
}
</style>
